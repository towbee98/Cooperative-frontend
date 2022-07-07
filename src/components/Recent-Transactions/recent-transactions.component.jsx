import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { Columns } from "../../assets/columns";
import "./recent-transactions.styles.css";

const RecentTransactions = ({ data }) => {
  return (
    <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 5 }}>
      <Table stickyHeader sx={{ minWidth: 200 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{ fontWeight: "bolder" }}
              colSpan={15}
              children={"Recent Transactions"}></TableCell>
          </TableRow>
          <TableRow>
            {Columns.map((el, index) => {
              return (
                <TableCell
                  sx={{ fontWeight: "bolder", padding: 1, fontSize: "0.7rem" }}
                  align="center"
                  key={index}
                  children={el}
                />
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return index < 5 ? (
              <TableRow key={index}>
                {Columns.map((el, colIndex) => {
                  const value = row[el];
                  return (
                    <TableCell
                      key={colIndex}
                      align="center"
                      sx={{ fontSize: "0.7rem" }}>
                      {el === "Date"
                        ? new Date(value).toLocaleDateString()
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ) : null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.mockData
});

export default connect(mapStateToProps)(RecentTransactions);
