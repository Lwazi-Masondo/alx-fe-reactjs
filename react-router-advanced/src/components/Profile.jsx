import { Outlet, Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <nav className="flex gap 4">
        <Link to={"/"}>Home</Link>
        <Link to={"profiledetails"}>Profile Details</Link>
        <Link to={"profilesettings"}>Profile Settings</Link>
      </nav>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
