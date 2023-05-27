import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/AdminForm/Login";
import Signup from "../pages/AdminForm/Signup";
import Admission from "../pages/AdmissionForm/Admission";
import Teachers from "../pages/Teachers/Teachers";
import Main from "../Layout/Main";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AllAdmissions from "../pages/Dashboard/AllAdmissions/AllAdmissions";
import AddTeacher from "../pages/Dashboard/AddTeacher/AddTeacher";
import ManageTeachers from "../pages/Dashboard/ManageTeachers/ManageTeachers";
import Contact from "../pages/Contact/Contact";
import PrivateRoutes from './PrivateRoutes';
import StudentsMsg from "../pages/Dashboard/StudentsMessage/StudentsMsg";
import Result from "../pages/Result/Result";
import StudentResult from "../pages/Dashboard/StudentsResult/StudentResult";
import Notice from "../pages/Notice/Notice";
import StudentsNotice from "../pages/Dashboard/StudentsNotice/StudentsNotice";
import Calender from "../pages/Calender/Calender";
import Routine from "../pages/Routine/Routine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/routine",
        element: <Routine />,
      },
      {
        path: "/calender", //
        element: <Calender />,
      },
      {
        path: "/result",
        element: (
          <PrivateRoutes>
            <Result />
          </PrivateRoutes>
        ),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoutes>
            <Admission />
          </PrivateRoutes>
        ),
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admissions",
        element: (
          <AdminRoute>
            <AllAdmissions />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-teachers",
        element: (
          <AdminRoute>
            <AddTeacher />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-teachers",
        element: (
          <AdminRoute>
            <ManageTeachers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/students-message",
        element: (
          <AdminRoute>
            <StudentsMsg />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/students-results",
        element: (
          <AdminRoute>
            <StudentResult />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/students-notice",
        element: (
          <AdminRoute>
            <StudentsNotice />
          </AdminRoute>
        ),
      },
    ],
  },
]);
