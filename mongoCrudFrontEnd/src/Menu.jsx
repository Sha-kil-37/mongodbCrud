import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <ul className="flex py-2 bg-[#f2f2f2] justify-center">
        <li className="mr-2">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-blue-400 font-semibold" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/post"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-blue-400 font-semibold" : ""
            }
          >
            Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
