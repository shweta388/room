import "./App.css";
import Rows from "./components/Rows";

function App() {
  return (
    <div className="App">
      <p style={{ color: "blue", width: "80%", margin: "20px auto 5px auto" }}>
        <i
          class="fa fa-users"
          aria-hidden="true"
          style={{ marginRight: "10px" }}
        ></i>
        Choose number of <b>people</b>
      </p>
      <div className="container">
        <Rows />
      </div>
    </div>
  );
}

export default App;
