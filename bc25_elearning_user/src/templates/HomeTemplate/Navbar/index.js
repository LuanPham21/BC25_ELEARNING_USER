import React, { useRef, useEffect } from "react";
import "./navbar.css";
import { Container } from "reactstrap";
import { Button } from "antd";

import { NavLink } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Trang chủ",
    url: "/",
  },
  {
    display: "Khóa học",
    url: "/courses",
  },
  {
    display: "Về chúng tôi",
    url: "/about",
  },
  {
    display: "Liên hệ",
    url: "/contact",
  },
];

const Navbar = () => {
  const navbarRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navbarRef.current.classList.add("header__shrink");
      } else {
        navbarRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={navbarRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              Elearning
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
              <form action="/search-course" className="form-field">
                <input
                  type="text"
                  name="keyword"
                  className="form-control"
                  placeholder="Tìm khóa học"
                />
                <button className="btn__search">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <Button href="/" className="btn__login mr-3" type="primary">
              Đăng nhập
            </Button>
            <Button href="/" className="btn__register" type="primary">
              Đăng ký
            </Button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
