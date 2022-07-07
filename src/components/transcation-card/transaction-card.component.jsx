import React from "react";
import "./transaction-card.styles.css";

const TransactionCard = ({ type, name, amount }) => {
  return (
    <div className={`transaction-card ${type}-card`}>
      <div className={type}>{amount}</div>
      <div className="description">{name}</div>
    </div>
  );
};

export default TransactionCard;
