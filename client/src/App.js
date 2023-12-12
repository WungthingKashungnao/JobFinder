import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import SingIn from "./pages/signin/SignIn";
import SignUp from "./pages/singup/SignUp";
function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
