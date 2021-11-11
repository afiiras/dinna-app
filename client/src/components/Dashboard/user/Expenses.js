import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function Expenses() {
  const data = [
    {
      alt: "amazon",
      name: "Amazon",
      price: "-$5K",
    },
    {
      name: "Spotify",
      price: "-$50",
    },
    {
      name: "Microsoft",
      price: "-$200",
    },
    {
      name: "Adobe",
      price: "-$20K",
    },
    {
      name: "Apple",
      price: "-$30K",
    },
    {
      name: "Airbnb",
      price: "-$7K",
    },
    {
      name: "Google",
      price: "-$70",
    },
  ];
  return (
    <div className="expenses">
      <div className="expenses__info">
        <h4>Expenses</h4>
        <BsThreeDots />
      </div>
      <div className="expenses__container">
        {data.map((expense) => {
          return (
            <div className="expense">
              <img src={expense.logo} alt="" />
              <h4 className="expense__title">{expense.name}</h4>
              <h6 className="expense__price">{expense.price}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
