import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Header.scss";

// components
import Catalog from "../Catalog/Catalog";

class Header extends React.Component {
  public state = {
    login: false
  };

  public render() {
    const header = cn("Header");
    const { login } = this.state;

    return (
      <React.Fragment>
        <section className={header()}>
          <div className={header("HeaderBg")}>
            <div className={header("Container", { type: "menu" })}>
              <ul className={header("Menu")}>
                <li className={header("Link", { active: true })}>Главная</li>
                <li className={header("Link")}>О компании</li>
                <li className={header("Link")}>Оплата</li>
                <li className={header("Link")}>Доставка</li>
                <li className={header("Link")}>Гарантия</li>
                <li className={header("Link")}>Акции %</li>
                <li className={header("Link")}>Контакты</li>
              </ul>

              <ul className={header("Menu")}>
                {!login ? (
                  <li className={header("Link")}>Регистрация</li>
                ) : (
                  <li className={header("Link", { type: "username" })}>
                    Иван Иванов
                  </li>
                )}

                <li
                  className={header("Link")}
                  onClick={() => this.setState({ login: !login })}
                >
                  {login ? "Выйти" : "Войти"}
                </li>
              </ul>
            </div>
          </div>

          <div className={header("Container", { type: "info" })}>
            <div className={header("InfoSection", { type: "logo" })}>
              <h2 className={header("Logo")}>ювента-крым</h2>
              <span className={header("PreLogo")}>
                Официальный дистрибьютер в Крыму с 2005 года
              </span>
            </div>
            <div className={header("InfoSection", { type: "city" })}>
              <span className={header("Text")}>Ближайший магазин</span>
              <span className={header("Text", { bold: true })}>
                Симферополь
              </span>
              <span className={header("Text")}>Ул. Маяковского 14-Э</span>
            </div>
            <div className={header("InfoSection", { type: "time" })}>
              <span className={header("Text")}>Пн. - Пт.:</span>
              <span className={header("Text", { bold: true })}>
                09.00 - 18.00
              </span>
              <span className={header("Text")}>Выходные:</span>
              <span className={header("Text")}>Cб. - Вс.</span>
            </div>
            <div className={header("InfoSection", { type: "tel" })}>
              <a className={header("Text")} href="tel:+79787290215">
                +7(978) <b>729-02-15</b>
              </a>
              <a className={header("Text")} href="tel:3652248231">
                (3652) <b>24-82-31</b>
              </a>
              <span className={header("Call")}>обратный звонок</span>
            </div>
          </div>
        </section>
        <Catalog />
      </React.Fragment>
    );
  }
}

export default Header;
