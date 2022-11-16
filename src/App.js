import "./styles.css";

export default function App() {
  let temp = <em> 19 </em>;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2> The temperature is {temp} </h2>
    </div>
  );
}
