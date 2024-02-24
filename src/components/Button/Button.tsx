import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
