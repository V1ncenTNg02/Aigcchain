import React from "react";
import styles from "./DropDown.module.css";

const Testnet = [
  { name: "Mint", href: "/" },
  { name: "My NFTs", href: "/" },
];

const Community = [
  { name: "Twitter", href: "/" },
  { name: "Discord", href: "/" },
  { name: "Telegram", href: "/" },
];

interface Props {
  name: string;
}

const DropDown: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.dropDown}>
      {name === "Testnet"
        ? Testnet.map((link) => <div className={styles.link}>{link.name}</div>)
        : Community.map((link) => (
            <div className={styles.link}>{link.name}</div>
          ))}
    </div>
  );
};

export default DropDown;
