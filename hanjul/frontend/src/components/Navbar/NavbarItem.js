import React from "react";

function NavbarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="item ">
      <p>{menu.name}</p>
    </div>
  );
}

export default NavbarItem;