import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./ItemHeader.scss";

class ItemHeader extends React.Component {
  public render() {
    const header = cn("ItemHeader");

    return (
      <section className={header()}>
        <div className={header("Container")}>
          <h1 className={header("Title")}>пылесос с водяным фильтром</h1>
          <span className={header("Text")}>
            Высочайшая сила всасывания и многоступенчатая система фильтрации,
            реализованная в пылесосе DS 6000 Mediclean, делают воздух в
            помещении до 99,99% чище. Аллергики могут вздохнуть спокойно!
            Пылесос с аквафильтром DS 6.000 Mediclean рекомендован Российской
            Ассоциацией Аллергологов и Клинических иммунологов (РААКИ).
          </span>
        </div>
      </section>
    );
  }
}

export default ItemHeader;
