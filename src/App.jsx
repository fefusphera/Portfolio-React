import "./App.css";
import Title from "./components/Title";
import Gallery from "./components/Gallery/gallery";
import Sidebar from "./components/Sidebar/sidebar";
import Bio from "./components/Bio/bio";

// import { trimStr, printName } from "./utils";
// import { min } from "lodash";

const App = () => {
  // const name = trimStr(" Edgemony      ");
  // const myList = [2343, 43, 223, 1, 11, 21, 3, 4, 34, 3434, 0.434];

  return (
    <div className="App">
      <Title />
      <p>Foto di Gatti:</p>
      <div className="Content">
        <Sidebar />
        <Gallery />
        <Bio />
      </div>
    </div>
  );
};

export default App;
