import './App.css';
import { Mafs, Text, Line, CartesianCoordinates, Plot, labelPi, useMovablePoint } from "mafs";

// Plot an interactive sine function
function Sine() {
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

// Plot an interactive line rfunction
function LineChart() {
  const point1 = useMovablePoint([0, 0])
  const point2 = useMovablePoint([2, 2])

  return (

    <Mafs viewBox={{ x: [-1, 1], y: [-1, 1], padding: 4 }}>
      <CartesianCoordinates />
      <Line.Segment
        point1={point1.point}
        point2={point2.point}
      />
      {point2.element}
      
      <Text
        x={point2.x}
        y={point2.y}
        attach="w"
        attachDistance={20}
        size={20}
      >
        ({point2.x.toFixed(2)}, {point2.y.toFixed(2)})
      </Text>
      <Text
        x={point2.x}
        y={point2.y}
        attach="e"
        attachDistance={20}
        size={20}
      >
        ({point2.x.toFixed(3)}, {point2.y.toFixed(3)})
      </Text>
      {point2.element}

    </Mafs>
    
  )
}


function App() {
  return (
    <div>
      
        <LineChart />

    </div>
  );
}

export default App;
