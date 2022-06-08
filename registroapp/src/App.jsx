import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ListUsers from "./pages/ListUsers";
import AddUser from "./pages/AddUsers";
import EditUser from "./pages/EditUsers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ListUsers />} exact></Route>
          <Route
            path="/agregarusuario"
            element={<AddUser />}
            exact
          ></Route>
          <Route
            path="/editarusuario"
            element={<EditUser />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}


export default App;
