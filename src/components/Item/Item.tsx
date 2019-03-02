import * as React from "react";
import { cn } from "@bem-react/classname";

// style
import "./Item.scss";

class Item extends React.Component {
  public state = {
    sliderImage: "1"
  };

  public render() {
    const item = cn("Item");
    const { sliderImage } = this.state;

    return (
      <section className={item()}>
        <div className={item("Section", { type: "left" })}>
          <div className={item("SliderControlls")}>
            <button
              className={item("SliderControll", { type: "1", active: true })}
              onClick={this.setSliderImage}
              value={"1"}
            />
            <button
              className={item("SliderControll", { type: "2" })}
              onClick={this.setSliderImage}
              value={"2"}
            />
            <button
              className={item("SliderControll", { type: "3" })}
              onClick={this.setSliderImage}
              value={"3"}
            />
            <button
              className={item("SliderControll", { type: "4" })}
              onClick={this.setSliderImage}
              value={"4"}
            />
          </div>
          <div className={item("SliderImage", { type: sliderImage })}>
            <div className={item("SliderZoom")} />
          </div>
        </div>
        <article className={item("Section", { type: "right" })}>
          <header className={item("Header", { new: true, hit: true })}>
            <span className={item("Status")}>В наличии</span>
            <h1 className={item("Name")}>karcher ds 6.000 mediclean</h1>
          </header>
          <div className={item("RateSection")}>
            <form action="post" onSubmit={this.setRate}>
              <div className={item("StarSection")}>
                <button
                  className={item("Star")}
                  value="1"
                  type="submit"
                  onMouseOver={this.starHover}
                  onMouseLeave={this.starLeave}
                />
                <button
                  className={item("Star")}
                  value="2"
                  type="submit"
                  onMouseOver={this.starHover}
                  onMouseLeave={this.starLeave}
                />
                <button
                  className={item("Star")}
                  value="3"
                  type="submit"
                  onMouseOver={this.starHover}
                  onMouseLeave={this.starLeave}
                />
                <button
                  className={item("Star")}
                  value="4"
                  type="submit"
                  onMouseOver={this.starHover}
                  onMouseLeave={this.starLeave}
                />
                <button
                  className={item("Star")}
                  value="5"
                  type="submit"
                  onMouseOver={this.starHover}
                  onMouseLeave={this.starLeave}
                />
              </div>
              <span className={item("VoteAverage")}>(123)</span>

              <input className={item("Range")} type="range" min="1" max="5" />
            </form>
            <form action="">
              <span className={item("Comment")}>оставить отзыв</span>
            </form>
          </div>

          <div className={item("ContentSection")}>
            <div className={item("ContentHeader")}>
              <span className={item("Price")}>21 190 руб.</span>
              <div className={item("ButtonsSection")}>
                <span className={item("Button", { type: "favorit" })}>
                  в избранное
                </span>
                <span className={item("Button", { type: "compare" })}>
                  сравнить
                </span>
              </div>
            </div>
            <span className={item("Text")}>
              Подробные{" "}
              <a className={item("Link")} href="#">
                условия доставки
              </a>{" "}
              и{" "}
              <a className={item("Link")} href="#">
                оплаты.
              </a>
            </span>
            <a className={item("Link", { margin_bottom: true })} href="#">
              Гарантия на бытовую технику 5 лет!
            </a>
            <span className={item("Text")}>
              Качественная чистка полов, ковровых покрытий и мягкой мебели.
              Благодаря дополнительному фильтру HEPA 13 очищается воздух в
              помещении от мелких частиц пыли, спор и пыльцы, вызывающих
              аллергию, а система Perma Power увлажняет его. Легкий, удобный в
              эксплуатации. Рекомендован для использования в медицинских
              учреждениях.
            </span>
            <span className={item("Text", { dark: true })}>
              <b>Артикул</b>: 1.195-202.0
            </span>
          </div>
        </article>
      </section>
    );
  }

  // on clider controll click
  private setSliderImage = (e: any): void => {
    const sliderImage = e.target.value;
    const controlls = document.querySelectorAll(".Item-SliderControll");

    if (sliderImage !== this.state.sliderImage && controlls) {
      const length = controlls.length;

      // reset style
      for (let i = 0; i < length; i++) {
        controlls[i].classList.remove("Item-SliderControll_active");
      }

      // set current controll style
      e.target.classList.add("Item-SliderControll_active");

      // set slider image
      this.setState({ sliderImage });
    }
  };

  // submit
  private setRate = (e: any): void => {
    e.preventDefault();
  };

  // on star hover
  private starHover = (e: any): void => {
    const value = parseInt(e.target.value, 10);
    const stars = document.querySelectorAll(".Item-Star");

    if (stars) {
      const length = stars.length;

      for (let i = 0; i < length; i++) {
        if (i < value) {
          stars[i].classList.add("Item-Star_active");
        } else {
          stars[i].classList.remove("Item-Star_active");
        }
      }
    }
  };

  // on mouse star leave
  private starLeave = (): void => {
    const stars = document.querySelectorAll(".Item-Star");

    // reset active styles
    if (stars) {
      const length = stars.length;

      for (let i = 0; i < length; i++) {
        stars[i].classList.remove("Item-Star_active");
      }
    }
  };
}

export default Item;
