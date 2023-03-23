import Props from "@/types/components/nav";
import { useEffect, useState } from "react";
import "./style.scss";

const Nav = ({ listItems, currentState }: Props) => {
    return (
        <ul className="side-nav">
            {
                listItems.map((item, index) => {
                    return (
                        <li key={`${item}${index}`} className={index === currentState ? "active" : "non-active"}>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav