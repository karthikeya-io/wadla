import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import RecordingsPage from "./pages/RecordingsPage";
import PrivateRoute from "./components/PrivateRoute";
import LoggedInHome from "./pages/LoggedInHome";
import NearestAttractions from "./pages/NearestAttractions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route
          path="emailvalidation"
          element={<LoginPage page={"emailvalidation"} />}
        />
        <Route path="login" element={<LoginPage page={"login"} />} />
        <Route path="Nearest-Attractions" element={<NearestAttractions />} />

        <Route path="event" element={<PrivateRoute />}>
          <Route index element={<RecordingsPage />} />
          <Route path=":eventid/:dayid" element={<RecordingsPage />} />
        </Route>
        <Route path="home" element={<PrivateRoute />}>
          <Route index element={<LoggedInHome />} />
        </Route>
        {/* <Route path="about" element={<h1>About</h1>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
