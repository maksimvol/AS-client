import { Outlet, NavLink } from "react-router-dom";
// import Image from "../components/Images/logo.png"
// import Gif from "../components/Images/logo.gif"
import DLV_Image from "../components/Images/logo_dlv.png"

const Layout = () => {
  const currentDate = new Date();
  return (
    <>
    {/* <img src={Gif} alt="gif_logo" className="logo"/> */}
    <img src={DLV_Image} alt="dlv_logo" className="logo"/>
    <div className="date">
      {currentDate.toLocaleString()}
    </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Game Mix</NavLink>
          </li>
          <li>
            <NavLink to="/addGame">Add Game</NavLink>
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