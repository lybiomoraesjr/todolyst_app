import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TodoList from "../pages/TodoList";

const user = false;

const PrivateRoute = () => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = () => {
  return user ? <Navigate to="/todo" /> : <Outlet />;
};

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/todo" element={<TodoList />} />
      </Route>
    </Routes>
  );
};

export default Router;
