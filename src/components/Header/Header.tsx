import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Header.scss";
import "./Header.touch.scss";

// components
import Catalog from "../Catalog/Catalog";
import CatalogRightSection from "../CatalogRightSection/CatalogRightSection";
import CatalogMenu from "../CatalogMenu/CatalogMenu";

const body = document.querySelector("body");

class Header extends React.Component {
  public state = {
    login: false,
    transform: false,
    showMenu: false,
    mobile: body && body.classList.contains("touch-available") ? true : false,
    menuOpen: false
  };

  public node: any;

  public componentWillMount() {
    window.addEventListener("scroll", this.handleScroll, false);
    document.addEventListener("mousedown", this.handleClick, false);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  public render() {
    const header = cn("Header");
    const { login, transform, showMenu, mobile, menuOpen } = this.state;

    return (
      <React.Fragment>
        <section className={header()}>
          <div className={header("HeaderBg", { transform })}>
            <div
              className={header("Container", { type: "menu" })}
              ref={node => (this.node = node)}
            >
              {mobile ? (
                <div
                  className={header("MobileMenu", { close: menuOpen })}
                  onClick={() => this.setState({ menuOpen: !menuOpen })}
                />
              ) : null}
              <ul className={header("Menu", { type: "left", open: menuOpen })}>
                <li className={header("Link", { transform, active: true })}>
                  Главная
                </li>
                {transform ? (
                  <li
                    className={header("Link", { transform, catalog: true })}
                    onClick={() =>
                      this.setState({ showMenu: !showMenu, menuOpen: false })
                    }
                  >
                    Каталог
                  </li>
                ) : null}
                <li className={header("Link", { transform })}>О компании</li>
                <li className={header("Link", { transform })}>Оплата</li>
                <li className={header("Link", { transform })}>Доставка</li>
                <li className={header("Link", { transform })}>Гарантия</li>
                <li className={header("Link", { transform })}>Акции %</li>
                <li className={header("Link", { transform })}>Контакты</li>
              </ul>

              {!transform ? (
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
              ) : (
                <CatalogRightSection theme="dark" />
              )}

              {showMenu ? (
                <CatalogMenu
                  theme="header"
                  mobile={mobile}
                  close={() => this.setState({ showMenu: false })}
                />
              ) : null}
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

  // check click location
  private handleClick = (e: any) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({ menuOpen: false });
  };

  // transform header
  private handleScroll = () => {
    if (window.pageYOffset >= 40) {
      this.setState({ transform: true });
    } else {
      this.setState({ transform: false });
    }
  };
}

export default Header;
