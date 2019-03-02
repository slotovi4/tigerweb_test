import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./ItemMenu.scss";

class ItemMenu extends React.Component {
  public render() {
    const menu = cn("ItemMenu");

    return (
      <section className={menu()}>
        <ul className={menu("Menu")}>
          <li className={menu("Link")}>Главная</li>
          <li className={menu("Link")}>Home & Garden</li>
          <li className={menu("Link")}>Бытовые пылесосы</li>
          <li className={menu("Link", { current: true })}>
            Пылесос с аквафильтром Karcher DS 6.000 Mediclean
          </li>
        </ul>
      </section>
    );
  }
}

export default ItemMenu;
