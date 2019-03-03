import * as React from "react";
import { cn } from "@bem-react/classname";

// style
import "./CatalogRightSection.scss";

class CatalogRightSection extends React.Component {
  public render() {
    const right = cn("CatalogRightSection");
    return (
      <section className={right()}>
        <span className={right("Button", { type: "heart" })}>0</span>
        <span className={right("Button", { type: "files" })}>0</span>
        <span className={right("Button", { type: "basket" })}>2</span>
        <span>
          На сумму - <b>23 140</b> руб.
        </span>
      </section>
    );
  }
}

export default CatalogRightSection;
