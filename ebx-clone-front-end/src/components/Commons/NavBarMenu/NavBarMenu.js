import "../NavBarMenu/NavBarMenu.css";

import { FaDatabase } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";

function NavBarMenu() {
  return (
    <div>
      <a>
        <FaDatabase />
      </a>
      <a>
        <FaClock />
      </a>
      <a>
        <FaCheckSquare />
      </a>
      <a>
        <FaTabletAlt />
      </a>
      <a>
        <FaRegEdit />
      </a>
      <a>
        <AiFillApi />
      </a>
      <a>
        <RiAdminFill />
      </a>
    </div>
  );
}

export default NavBarMenu;
