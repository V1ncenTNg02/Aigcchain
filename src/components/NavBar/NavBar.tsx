import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { GoTriangleDown } from "react-icons/go";
import DropDown from "./DropDown";
import { LuMenu } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", href: "/", dropDown: false },
  { name: "About", href: "/about", dropDown: false },
  { name: "Testnet", href: "/testnet", dropDown: true },
  { name: "Community", href: "/community", dropDown: true },
  { name: "Doc", href: "/Doc", dropDown: false },
];

const NavBar = () => {
  const [hovered, setIsHovered] = useState("none");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.navBar} onMouseLeave={() => setIsHovered("none")}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={500}
            height={500}
            className={styles.logo}
          />
        </div>
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <div className={styles.linkWrapper}>
              <div
                className={styles.link}
                onMouseOver={() => setIsHovered(link.name)}
              >
                <div className={styles.name}>{link.name}</div>
                {link.dropDown ? (
                  <GoTriangleDown className={styles.triangle} />
                ) : null}
              </div>
              <div className={styles.dropDown}>
                {hovered === "Testnet" && link.name === "Testnet" ? (
                  <DropDown name={"Testnet"} />
                ) : null}
                {hovered === "Community" && link.name === "Community" ? (
                  <DropDown name={"Community"} />
                ) : null}
              </div>
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <button className={styles.launchButton}>Launch dApp</button>
          </div>
        </div>
        <LuMenu
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
        />
        {mobileOpen && (
          <>
            <div className={styles.background} ref={menuRef}></div>
            <MobileMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
