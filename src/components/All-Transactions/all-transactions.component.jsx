import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@mui/material";
import { Columns } from "../../assets/columns";
import "./all-transactions.styles.css";

const AllTransactions = (props) => {
  // console.log(props);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  return (
    <Paper className={"all-transaction-container"} elevation3={"true"}>
      <TableContainer className={"all-transactions"}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bolder" }}
                colSpan={15}
                children={"All Transactions"}
              />
            </TableRow>
            <TableRow>
              {Columns.map((el, index) => {
                return (
                  <TableCell
                    sx={{ fontWeight: "bolder", padding: 1, fontSize: 11 }}
                    align="center"
                    key={index}
                    children={el}
                  />
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {Columns.map((el, colIndex) => {
                    const value = row[el];
                    return (
                      <TableCell
                        key={colIndex}
                        align="center"
                        sx={{ fontSize: "0.75rem" }}>
                        {el === "Date"
                          ? new Date(value).toLocaleDateString()
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={props.data.length}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        page={page}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.mockData,
  page: state.data.defaultPage
});
export default connect(mapStateToProps)(AllTransactions);
