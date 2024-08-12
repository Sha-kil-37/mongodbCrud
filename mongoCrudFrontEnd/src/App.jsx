import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Menu from "./Menu";
import Details from "./Details";
import Edit from "./Edit";
//
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </>
  );
};

export default App;
