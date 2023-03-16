import { Link } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.nav}>
      <Link to="/home" className={style.nav__brand}>
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
            <Link to="" className={style.nav__menu__link}>
              最新消息
            </Link>
          </li>
          <li className={style.nav__menu__item}>
            <Link to="" className={style.nav__menu__link}>
              我要預約
            </Link>
          </li>
          <li className={style.nav__menu__item}>
            <Link to="" className={style.nav__menu__link}>
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
