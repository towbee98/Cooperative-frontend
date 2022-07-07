import React from "react";
import { connect } from "react-redux";
import "./summary.styles.css";
import TransactionCard from "../transcation-card/transaction-card.component";
const Summary = ({ data }) => {
  console.log(data);
  return (
    <div className="summary-container">
      <h2>Welcome,{"Tobi"}</h2>
      <div className="summary-transactions-container">
        <h4>Overview</h4>
        <div className="summary-transactions">
          <div className="summary-holder">
            <TransactionCard
              type={"total-share"}
              name={"TOTAL SHARES"}
              amount={data["Shares Total"]}
            />
            <TransactionCard type={"loan"} name={"LOAN"} amount={data.Loan} />
            <TransactionCard
              type={"loan-balance"}
              name={"LOAN BALANCE"}
              amount={data["Loan Balance"]}
            />
            <TransactionCard
              type={"loan-interest"}
              name={"LOAN INTEREST"}
              amount={data["Loan Interest"]}
            />
          </div>
          <div className="total-savings-graph">
            <TransactionCard
              type={"total-savings"}
              name={"TOTAL SAVINGS"}
              amount={data["Savings Total"]}
            />
            <div className="graph"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.data.mockData[0]
});

export default connect(mapStateToProps)(Summary);
