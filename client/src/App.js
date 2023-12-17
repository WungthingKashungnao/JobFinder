import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import SingIn from "./pages/signin/SignIn";
import SignUp from "./pages/singup/SignUp";
import Main from "./pages/main/Main";
import NotFound from "./pages/notfound/NotFound";
import AddJob from "./pages/addjob/AddJob";
import ViewJob from "./pages/viewjob/ViewJob";
import Auth from "./utils/Auth.js";

function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/addjob"
          element={
            <Auth>
              <AddJob />
            </Auth>
          }
        />
        {/*addjob this should be a protected route*/}
        <Route path="/viewjob" element={<ViewJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
