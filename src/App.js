import Portfolio from "./containers/Portfolio/Portfolio";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;
