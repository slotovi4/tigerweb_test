import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Catalog.scss";

// components
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import CatalogRightSection from "../CatalogRightSection/CatalogRightSection";

class Catalog extends React.Component {
  public state = {
    showMenu: false
  };

  public render() {
    const catalog = cn("Catalog");
    const { showMenu } = this.state;

    return (
      <section className={catalog()}>
        <div className={catalog("Container")}>
          <span
            className={catalog("CatalogButton")}
            onClick={() => this.setState({ showMenu: !showMenu })}
          >
            каталог
          </span>

          <div className={catalog("SearchSection")}>
            <input
              className={catalog("Search")}
              type="text"
              placeholder="Что ищем?"
            />
            <div className={catalog("SearchButton")} />
          </div>

          <CatalogRightSection />

          {showMenu ? (
            <CatalogMenu close={() => this.setState({ showMenu: false })} />
          ) : null}
        </div>
      </section>
    );
  }
}

export default Catalog;
