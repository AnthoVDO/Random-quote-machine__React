import Generator from "./components/Generator";
import Header from "./components/Header";
import "./style/App.scss";


function App() {
  return (
    <div className="App" id="quote-box">
    <Header/>
    <Generator/>
     
    </div>
  );
}

export default App;
