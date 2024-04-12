import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const currentDate = new Date();
  return (
    <>
    {currentDate.toLocaleString()}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Game Mix</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;