"use client";

import Hamburger from "./Hamburger";
import { useEffect, useRef, useState } from "react";
import NavbarLinkList from "./NavbarLinkList";
import { Links } from "@/app/utils/routes";

export type INavbar = {
  type?: string;
  linkColor?: string;
  textBold?: number;
  height?: 60;
  width?: 100;
};

function Navbar({ type, linkColor, textBold }: INavbar) {
  const navRef: any = useRef(null);
  const headerRef: any = useRef(null);

  const [isResponsiveNav, setIsResponsiveNav] = useState(false);

  const showNavbar = () => {
    navRef?.current?.classList.toggle("responsive_nav");
    setIsResponsiveNav(!isResponsiveNav);
  };

  const onChangeRoute = () => {
    if (navRef?.current?.classList.contains("responsive_nav")) {
      navRef?.current?.classList.toggle("responsive_nav");
      setIsResponsiveNav(!isResponsiveNav);
    } else {
      return;
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 1 ||
        document.documentElement.scrollTop >= 1
      ) {
        headerRef.current.classList.add("scroll");
      } else {
        headerRef.current.classList.remove("scroll");
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`Navbar ${type ? "Navbar-" + type : ""} `}
    >
      <div className="logo__container">{/* <LogoWellintone /> */}</div>

      <NavbarLinkList
        onClick={onChangeRoute}
        links={Links}
        navRef={navRef}
        linkColor={linkColor}
        textBold={textBold}
      />

      <Hamburger isResponsiveNav={isResponsiveNav} onToggleMenu={showNavbar} />
    </header>
  );
}

export default Navbar;
