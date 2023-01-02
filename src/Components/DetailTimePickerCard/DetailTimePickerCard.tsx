// React
import React from "react";
// React
// CSS
import "./DetailTimePickerCard.css";
// CSS
// Models
import { I_sendTime } from "../../Models/interfaces";
// Models

type DetailTimePickerCardProps = {
  data: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
  currentSendTime: I_sendTime;
};

const DetailTimePickerCard: React.FunctionComponent<
  DetailTimePickerCardProps
> = ({ data: { end, price, start }, currentSendTime, setCurrentSendTime }) => {
  return (
    <div
      className="flex flex-row-reverse mt-6 first-of-type:mt-4 cursor-pointer"
      onClick={() => {
        setCurrentSendTime({
          start,
          end,
          price,
        });
      }}
    >
      <input
        type="radio"
        onChange={() => {}}
        checked={
          JSON.stringify(currentSendTime) ===
          JSON.stringify({
            start,
            end,
            price,
          })
        }
      />
      <span className="mr-4">
        {start} - {end}
      </span>
      <span className="mr-3">
        {price !== 0 && price}
        {price === 0 && "رایگان"}
      </span>
    </div>
  );
};

export default DetailTimePickerCard;
