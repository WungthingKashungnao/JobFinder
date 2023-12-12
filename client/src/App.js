import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import SingIn from "./pages/signin/SignIn";
import SignUp from "./pages/singup/SignUp";
import Main from "./pages/main/Main";
import NotFound from "./pages/notfound/NotFound";
function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
