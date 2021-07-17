import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Headers from "./component/Headers";

function App() {
  return (
    <div className="app">
      <Headers />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
