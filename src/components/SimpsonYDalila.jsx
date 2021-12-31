import React from "react";
import NegroBlancoVerde from "../video/homero-re-perdido.mp4";
import styles from "./SimpsonYDalila.module.scss";

export const SimpsonYDalila = () => {
  return (
    <div className={styles.wrapper}>
      <video src={NegroBlancoVerde} controls autoPlay></video>
    </div>
  );
};
