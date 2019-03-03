import * as React from "react";
import { cn } from "@bem-react/classname";

// style
import "./CatalogRightSection.scss";

interface IProps {
  theme?: "dark";
}

class CatalogRightSection extends React.Component<IProps> {
  public render() {
    const right = cn("CatalogRightSection");
    const { theme } = this.props;

    return (
      <section className={right()}>
        <span className={right("Button", { type: "heart", theme })}>0</span>
        <span className={right("Button", { type: "files", theme })}>0</span>
        <span className={right("Button", { type: "basket", theme })}>2</span>
        <span className={right("Text", { theme })}>
          На сумму -{" "}
          <span className={right("Text", { bold: true, theme })}>23 140</span>{" "}
          руб.
        </span>
      </section>
    );
  }
}

export default CatalogRightSection;
