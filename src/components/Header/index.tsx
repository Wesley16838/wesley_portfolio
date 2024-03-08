"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo.png";
import "./style.scss";

const Header = () => {
  const pathname = usePathname();
  const isActive = (routename: string) =>
    routename == pathname ? "active" : "inactive";
  return (
    <div className="header">
      <Image src={Logo} width={64} height={64} alt={"Logo Image"} />
      <ul className="top-bar">
        <li>
          <Link href="/">
            <p className={`${isActive("/")}`}>Home</p>
          </Link>
        </li>
        <li>
          <Link
            className="disable"
            href="/about"
            aria-disabled="true"
            tabIndex={-1}
          >
            <p className={`${isActive("/about")}`}>About</p>
          </Link>
        </li>
        <li>
          <Link
            className="disable"
            href="/works"
            aria-disabled="true"
            tabIndex={-1}
          >
            <p className={`${isActive("/works")}`}>Works</p>
          </Link>
        </li>
        <li>
          <Link
            className="disable"
            href="/projects"
            aria-disabled="true"
            tabIndex={-1}
          >
            <p className={`${isActive("/projects")}`}>Projects</p>
          </Link>
        </li>
      </ul>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link href="/">
                <p className={`${isActive("/")}`}>Home</p>
              </Link>
            </li>
            <li>
              <Link
                className="disable"
                href="/about"
                aria-disabled="true"
                tabIndex={-1}
              >
                <p className={`${isActive("/about")}`}>About</p>
              </Link>
            </li>
            <li>
              <Link
                className="disable"
                href="/works"
                aria-disabled="true"
                tabIndex={-1}
              >
                <p className={`${isActive("/works")}`}>Works</p>
              </Link>
            </li>
            <li>
              <Link
                className="disable"
                href="/projects"
                aria-disabled="true"
                tabIndex={-1}
              >
                <p className={`${isActive("/projects")}`}>Projects</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
