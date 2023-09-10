import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./style.scss";
import MyContextProvider from "./context/MyContext";
import RegisterprofileProvider from "./context/Registerprofile";
import UserChatProvider from "./context/UserChat";

function App() {
  return <div>
    <BrowserRouter>
    <UserChatProvider>
    <RegisterprofileProvider>
    <MyContextProvider>
        <Routes>
          <Route path = "/">
                <Route index element={<Home />} />
                <Route path = "login" element={<Login />} />
                <Route path="register" element={<Register />} />
          </Route>
        </Routes>
    </MyContextProvider>
    </RegisterprofileProvider>
    </UserChatProvider>
    </BrowserRouter>
  </div>;
}

export default App;
