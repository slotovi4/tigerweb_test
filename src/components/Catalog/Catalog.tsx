import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Catalog.scss";

class Catalog extends React.Component {
  public render() {
    const catalog = cn("Catalog");

    return (
      <section className={catalog()}>
        <div className={catalog("Container")}>
          <span className={catalog("CatalogButton")}>каталог</span>

          <div className={catalog("SearchSection")}>
            <input
              className={catalog("Search")}
              type="text"
              placeholder="Что ищем?"
            />
            <div className={catalog("SearchButton")} />
          </div>

          <div className={catalog("RightSection")}>
            <span className={catalog("Button", { type: "heart" })}>0</span>
            <span className={catalog("Button", { type: "files" })}>0</span>
            <span className={catalog("Button", { type: "basket" })}>2</span>
            <span>
              На сумму - <b>23 140</b> руб.
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Catalog;
