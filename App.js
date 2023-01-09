import './App.css';
import { Mafs, CartesianCoordinates, Plot, labelPi, useMovablePoint } from "mafs"

function HelloFx() {
  const phase = useMovablePoint([0, 0], {
    constrain: "horizontal",
  })

  return (
    <Mafs
      viewBox={{ x: [-10, 10], y: [-2, 2] }}
      preserveAspectRatio={false}
    >
      <CartesianCoordinates
        subdivisions={4}
        xAxis={{ lines: Math.PI, labels: labelPi }}
      />
      <Plot.OfX y={(x) => Math.sin(x - phase.x)} />
      {phase.element}
    </Mafs>
  )
}

function App() {
  return (
    <div>
      
        <HelloFx />
      
    </div>
  );
}

export default App;
