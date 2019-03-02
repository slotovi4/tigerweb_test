import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./CatalogMenu.scss";

// components
import PopupBg from "../PopupBg/PopupBg";

interface IProps {
  close: () => void;
}

class CatalogMenu extends React.Component<IProps> {
  public render() {
    const menu = cn("CatalogMenu");
    const { close } = this.props;

    return (
      <React.Fragment>
        <section className={menu()}>
          <ul className={menu("Menu")}>
            <li className={menu("Link", { type: "parent" })} onClick={close}>
              каталог
            </li>
            <li
              className={menu("Link", { type: "active" })}
              onClick={this.menuClick}
            >
              home & garden / бытовая техника
            </li>
            <li className={menu("Link")} onClick={this.menuClick}>
              professional / профессиональная техника
            </li>
          </ul>
          <div className={menu("Content")}>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "1" })} />
              <span className={menu("CardTitle")}>
                аппараты высокого давления
              </span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "2" })} />
              <span className={menu("CardTitle")}>пылесосы</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "3" })} />
              <span className={menu("CardTitle")}>
                системы топлива и орошения
              </span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "4" })} />
              <span className={menu("CardTitle")}>
                ручные подметальные машины
              </span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "5" })} />
              <span className={menu("CardTitle")}>насосы</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "6" })} />
              <span className={menu("CardTitle")}>электровеники</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "7" })} />
              <span className={menu("CardTitle")}>пароочистители</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "8" })} />
              <span className={menu("CardTitle")}>гладильные системы</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "9" })} />
              <span className={menu("CardTitle")}>паропылесосы</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "10" })} />
              <span className={menu("CardTitle")}>стеклоочиститель</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "11" })} />
              <span className={menu("CardTitle")}>полотер</span>
            </article>
            <article className={menu("Card")}>
              <div className={menu("CardImage", { type: "12" })} />
              <span className={menu("CardTitle")}>поломоечная машина</span>
            </article>
          </div>

          <div className={menu("Footer")}>
            <article className={menu("Card", { type: "footer" })}>
              <div
                className={menu("CardImage", {
                  position: "footer",
                  type: "l1"
                })}
              />
              <span className={menu("CardTitle", { type: "footer" })}>
                принадлежности
              </span>
            </article>
            <article className={menu("Card", { type: "footer" })}>
              <div
                className={menu("CardImage", {
                  position: "footer",
                  type: "l2"
                })}
              />
              <span className={menu("CardTitle", { type: "footer" })}>
                для чистки и ухода
              </span>
            </article>
          </div>
        </section>
        <PopupBg close={close} />
      </React.Fragment>
    );
  }

  // on menu link click
  private menuClick = (e: any) => {
    const links = document.querySelectorAll(".CatalogMenu-Link");
    const active = "CatalogMenu-Link_type_active";

    if (links) {
      links.forEach(link => link.classList.remove(active));
    }

    e.target.classList.add(active);
  };
}

export default CatalogMenu;
