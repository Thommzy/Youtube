import React from "react";

function SidebarRow({ selected, icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <div className="sidebarRow__icon">{icon}</div>
      <h2 className="sidebarRow__title ">{title}</h2>
    </div>
  );
}

export default SidebarRow;
