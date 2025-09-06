import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <>
      <h1>Advanced Routing in React with React Router</h1>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="profile" element={<Profile />} />
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="profilesettings" element={<ProfileSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
