import Props from "@/types/components/nav";
import Image from "next/image";
import "./style.scss";

const Nav = ({ listItems, currentState }: Props) => {
  return (
    <ul className="side-nav">
      {listItems !== null &&
        currentState !== null &&
        listItems.map((item, index) => {
          return (
            <li
              key={`${item.title}${index}`}
              className={index === currentState ? "active" : "non-active"}
            >
              <div className="shortTitle">{item.shortTitle}</div>
            </li>
          );
        })}
    </ul>
  );
};

export default Nav;
