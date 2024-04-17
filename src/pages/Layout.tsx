import { Outlet, NavLink } from "react-router-dom";
// import Image from "../components/Images/logo.png"
import Gif from "../components/Images/logo.gif"

const Layout = () => {
  const currentDate = new Date();
  return (
    <>
    <img src={Gif} alt="gif_logo" className="logo"/>
    <div className="date">
      {currentDate.toLocaleString()}
    </div>
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