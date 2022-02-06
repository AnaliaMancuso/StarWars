import { Provider } from "react-redux";
import "./App.css";
import Lateral from "./components/Lateral";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <Lateral />
      </div>
    </Provider>
  );
}

export default App;
