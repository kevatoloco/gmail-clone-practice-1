import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
    return( 
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h5>{title}</h5>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption