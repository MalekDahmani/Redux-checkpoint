import "./App.css";


import ListTask from "./Components/ListTask"
import Addtask from "./Components/AddTask"


function App() {
  

    return (
        <div className="App">
            <div className="container">
                <Addtask  />
                <ListTask   />
            </div>
        </div>
    );
}

export default App;