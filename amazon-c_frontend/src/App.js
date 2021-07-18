import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScren from "./component/HomeScren.js";
import ProductScren from "./component/ProductScren";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={HomeScren} exact />
        <Route path="/product/:id" component={ProductScren} />
      </div>
    </BrowserRouter>
  );
}

export default App;
