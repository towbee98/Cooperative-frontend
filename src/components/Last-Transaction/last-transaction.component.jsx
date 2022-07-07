import React from "react";
import { connect } from "react-redux";
import "./last-transaction.styles.css";

const LastTransaction = ({ data }) => {
  // console.log(data);
  return (
    <div className="recent-transaction-container">
      <h5>Here's your latest transaction report</h5>
      <div className="recent-transaction-details">
        <h6>
          DATE: <em>{new Date(data.Date).toLocaleDateString()}</em>
        </h6>
        <div className="recent-data">
          <span>
            ATTENDANCE : <em>{data.Attendance}</em>
          </span>
          <span>
            LATENESS : <em>{data.Lateness}</em>
          </span>
          <span>
            ADMIN CHARGES : <em>{data["Admin Charges"]}</em>
          </span>
          <span>
            ABSENT : <em>{data.Absentee}</em>
          </span>
          <span>
            RENTAGE : <em>{data.Rentage}</em>
          </span>
          <span>
            SAVINGS : <em>{data.Savings}</em>
          </span>
          <span>
            SAVINGS TOTAL : <em>{data["Savings Total"]}</em>
          </span>
          <span>
            SHARES : <em>{data.Shares}</em>
          </span>
          <span>
            SHARES TOTAL : <em>{data["Shares Total"]}</em>
          </span>
          <span>
            BUILDING FUND : <em>{data["Building fund"]}</em>
          </span>
          <span>
            INVESTMENT : <em>{data.Investment}</em>
          </span>
          <span>
            LOAN : <em>{data.Loan}</em>
          </span>
          <span>
            LOAN BALANCE : <em>{data["Loan Balance"]}</em>
          </span>
          <span>
            LOAN INTEREST : <em>{data["Loan Interest"]}</em>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.mockData[0]
});
export default connect(mapStateToProps)(LastTransaction);
