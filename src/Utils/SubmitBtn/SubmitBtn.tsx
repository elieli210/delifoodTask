// React
import React from "react";
// React
// CSS
import styles from "./SubmitBtn.module.css";
// CSS

type SubmitBtnProps = {
  sendPrice: number;
  cartItemPrice: number;
};

const SubmitBtn: React.FunctionComponent<SubmitBtnProps> = ({
  cartItemPrice,
  sendPrice,
}) => {
  return (
    <button
      className={`${styles.submitBtn} text-white text-lg font-bold flex items-center justify-center py-8 my-5 rounded-xl cursor-pointer w-full`}
    >
      <span>تومان</span>
      <span className="mx-2">{`(${sendPrice + cartItemPrice})`}</span>
      <span>ادامه</span>
    </button>
  );
};

export default SubmitBtn;
