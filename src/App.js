import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Gallery } from "./Pages/Gallery/Gallery";
import { Explore } from "./Pages/Explore/Explore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gallery/:slug" element={<Gallery />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
