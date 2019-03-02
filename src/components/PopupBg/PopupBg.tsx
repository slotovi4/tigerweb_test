import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./PopupBg.scss";

interface IProps {
  close: () => void;
}

class PopupBg extends React.Component<IProps> {
  public render() {
    const popup = cn("PopupBg");
    const { close } = this.props;

    return <div className={popup()} onClick={close} />;
  }
}

export default PopupBg;
