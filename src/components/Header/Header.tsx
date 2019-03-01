import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Header.scss";

class Header extends React.Component {
  public render() {
    const header = cn("Header");

    return (
      <section className={header()}>
        <div className={header("Container")}>
          <ul className={header("Menu")}>
            <li className={header("Link", { active: true })}>
              <a href="#">Главная</a>
            </li>
            <li className={header("Link")}>
              <a href="#">О компании</a>
            </li>
            <li className={header("Link")}>
              <a href="#">Оплата</a>
            </li>
            <li className={header("Link")}>
              <a href="#">Доставка</a>
            </li>
            <li className={header("Link")}>
              <a href="#">Гарантия</a>
            </li>
            <li className={header("Link")}>
              <a href="#">Акции %</a>
            </li>
            <li className={header("Link")}>
              <a href="#">Контакты</a>
            </li>
          </ul>

          <ul className={header("Menu")}>
            <li className={header("Link")}>
              <a href="#">Регистрация</a>
            </li>
            <li className={header("Link", { type: "login" })}>
              <a href="#">Войти</a>{" "}
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
