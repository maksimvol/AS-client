import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const currentDate = new Date();
  return (
    <>
    {currentDate.toLocaleString()}
      <nav>
        <ul>
          <li>
            <Link to="/">Game Mix</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;