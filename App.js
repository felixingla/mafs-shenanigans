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

// Plot an interactive linear chart for ROI 
function ROILineChart() {
  const point1 = useMovablePoint([0, 0])
  const point2 = useMovablePoint([3, 3])
  const decimals = 1;


  function ROI_level(x, y) {
    if (y > 2*x) {
      let ROI = "High ROI"
      return ROI
    } else if (y < 2*x && y > 0.5*x){
      let ROI = "Mid ROI"
      return ROI
    } else {
      let ROI = "Low ROI"
      return ROI
    }
  }

    function ROI_color(x, y) {
    if (y > 2*x) {
      let color = "green"
      return color
    } else if (y < 2*x && y > 0.5*x){
      let color = "yellow"
      return color
    } else {
      let color = "red"
      return color
    }
  }

  return (

    <Mafs viewBox={{ x: [-1, 1], y: [-1, 2], padding: 3 }}>
      <CartesianCoordinates 
      />
      <Line.Segment
        point1={point1.point}
        point2={point2.point}
        color={ROI_color(point2.x, point2.y)}

      />
      {point2.element}

      <Text
        x={point2.x}
        y={point2.y}
        attach="s"
        attachDistance={30}
        size={16}
        color={ROI_color(point2.x, point2.y)}
      >
        {ROI_level(point2.x, point2.y)}
      </Text>

      <Text
        x={point2.x}
        y={point2.y}
        attach="e"
        attachDistance={20}
        size={16}
      >
        ({point2.x.toFixed(decimals)}, {point2.y.toFixed(decimals)})
      </Text>

    <Text
      x={0}
      y={4}
      size={16}
      attach="w"
      attachDistance={10}
    >
      Return
    </Text>

    <Text
      x={4}
      y={0}
      size={16}
      attach="n"
      attachDistance={20}
    >
      Investment
    </Text>

    </Mafs>
    
  )
}

function writeInputToDiv() {
  var input = prompt("Please enter your input:");
  document.getElementById("output").innerHTML = input;
<button onclick="writeInputToDiv()">Write Input</button>

  
}


function App() {
  
  
  return (
    <div>
    <writeInputToDiv />
    </div>
  );
  
}

export default App;
