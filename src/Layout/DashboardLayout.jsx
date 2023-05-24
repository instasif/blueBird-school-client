import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useAdmin } from "../Hooks/useAdmin";


const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
    return (
      <div>
        <Navbar />
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              {isAdmin && (
                <>
                  <li>
                    <Link to={"/dashboard/users"}>All users</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/admissions"}>Admissions</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/add-teachers"}>Add a Teacher</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/manage-teachers"}>Manage Teachers</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;