import { Link, useLocation } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
  const  toLink = useLocation()
  let judge = true 

  if (toLink.pathname.includes("/admin")) {
    judge = false;
  }
  return (
    <header className={style.nav}>
      <Link to="/" className={style.nav__brand}>
        {/* <div className="nav__brand__logo">
          <img className="nav__brand__img" src="" alt="logo"/>
        </div> */}
        <div className={style.nav__brand__title}>XXX美甲</div>
      </Link>
      <input
        type="checkbox"
        className={style.nav__toggle}
        id="nav__toggle"
      ></input>
      <div className={style.nav__menu}>
        <ul className={style.nav__menu__list}>
          <li className={style.nav__menu__item}>
            <Link
              to={judge ? "/" : "/admin/schedule"}
              className={style.nav__menu__link}
            >
              {judge ? "關於我們" : "工作排程"}
            </Link>
          </li>
          <li className={style.nav__menu__item}>
            <Link to="/reserve" className={style.nav__menu__link}>
              我要預約
            </Link>
          </li>
          <li className={style.nav__menu__item}>
            <Link to="/auth" className={style.nav__menu__link}>
              登出
            </Link>
          </li>
        </ul>
      </div>
      <label className={style.toggle__label} htmlFor="nav__toggle">
        <span className={style.toggle__label__hamburger}></span>
      </label>
    </header>
  );
};

export default Header;
