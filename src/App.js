import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index={true} element={<Home />}></Route>
        <Route path="shop" element={<p>Shop</p>}></Route>
        <Route path="about" element={<p>About</p>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
