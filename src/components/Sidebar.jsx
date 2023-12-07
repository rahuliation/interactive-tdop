import React from "react";
import SidebarItems from './SidebarItems'
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar(props, {defaultActive}) {
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
    return (
        <>
            <div className="z-10 hidden md:block md:fixed left-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase">
            {
                SidebarItems.map((item, index)=> (
                    <Link to={item.route}>
                    <div key={item.key} active={index = activeIndex} className="py-2 text-xs hover:font-bold">
                        <p>{item.name}</p>
                    </div>
                    </Link>
                ))
            }
            </div>
        </>
    );
}

export default Sidebar