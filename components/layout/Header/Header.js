import styles from "./Header.module.scss";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navList = [
    {
      url: "/yacht",
      name: "Du Thuyền",
    },
    {
      url: "/tour",
      name: "Tour",
    },
    {
      url: "/media",
      name: "MEDIA",
    },
    {
      url: "/about",
      name: "Về La Liberte",
    },
    {
      url: "/contact",
      name: "Liên Hệ",
    },
  ];

  const openMenuMobile = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-dark">
      <Container className=" py-4 overflow-hidden d-flex align-items-center justify-between">
        <div className={styles.brand}>
          <Link href="/">
            <a>
              <img src="/static/Logo-brand.svg" alt="brand.jpg" />
            </a>
          </Link>
        </div>
        <nav className={styles.navLink}>
          {navList &&
            navList?.map((val, i) => {
              return (
                <Link href={val?.url} key={i}>
                  <a>{val?.name}</a>
                </Link>
              );
            })}
          <Link href="/rent">
            <a className="btn btn-blue">Thuê Du Thuyền</a>
          </Link>
        </nav>
        <div
          className={`${styles.btnMobile} ${open ? styles.menuActive : ""}`}
          onClick={() => openMenuMobile()}
        >
          <span></span>
        </div>

        <div className={` ${styles.mobile} ${open ? styles.mobileActive : ""}`}>
          <nav className={`${styles.navLink} ${styles.navMobile}`}>
            {navList &&
              navList.map((val, i) => {
                return (
                  <Link href={val?.url} key={i}>
                    <a
                      className={`${open ? styles.active : ""}`}
                      style={{ "--variable": `all  ${(i + 1) / 5}s` }}
                    >
                      {val?.name}
                    </a>
                  </Link>
                );
              })}
            <Link href="/rent">
              <a className={`${open ? styles.active : ""} btn btn-blue`}>
                Thuê Du Thuyền
              </a>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
