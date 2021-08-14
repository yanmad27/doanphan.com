import React from "react";
import styles from "styles/Homepage/Information.module.scss";
import {Image} from "antd";

const Information = () => {
  return (
    <div className={styles.information}>
      <Image className={styles.information__bg} src="/bg-homepage-1.png"/>
      <div className={styles.information__info}>
        <div className={styles.information__name}>Doan Phan</div>
        <div className={styles.information__position}>Fullstack developer</div>
        <div className={styles.information__dream}>{"//My dream: \n" +
        "while (sleeping) {\n" +
        "\tmoney++\n" +
        "}\n"}</div>
        <div className={styles.information__channel}>📫 How to reach me: <a href="mailto:yanmad27@gmail.com?[doanphan.com]subject=I see your website ">yanmad27@gmail.com</a></div>
        <div className={styles.information__channel}>📫 Github: <a href="https://github.com/yanmad27/" target={"_blank"} rel={"noreferrer"}>github.com/yanmad27</a></div>
        <div className={styles.information__channel}>📫 About me: <a href="https://doanphan.com/" target={"_blank"} rel={"noreferrer"}>doanphan.com</a></div>
        <div className={styles.information__channel}>📫 Youtube Channel: <a href="https://www.youtube.com/channel/UC1V_v2SDR-eGUQwtRt2LnzQ" target={"_blank"} rel={"noreferrer"}>youtube.com/channel</a>
        </div>
      </div>
    </div>
  );
};

export default Information;
