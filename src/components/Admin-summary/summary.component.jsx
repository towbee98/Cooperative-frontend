import React from "react";
import { Paper, Grid } from "@mui/material";
import InfoCard from "../Information-card/information.component";
import "./summary.styles.css";

const AdminSummary = () => {
  return (
    <Paper className={"admin-summary-container"} elevation={0}>
      <Paper elevation={4}>
        <h3 alignitems={"left"} sx={{ padding: "4px" }}>
          Dashboard
        </h3>

        <Grid
          // className={"summary-grid-cards"}
          container
          sx={{
            padding: 2,
            margin: 0,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard information="Active Members" data={500} logo={"people"} />
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard information="Loan Total" data={4500500} logo={"loan"} />
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard information="Expenses" data={170000} logo={"expense"} />
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard
              information="Inactive Members"
              data={50}
              logo={"inactive"}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard information="Revenue" data={305000} logo={"revenue"} />
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard information="Borrowers" data={80} logo={"people"} />
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={4}
        sx={{ width: "100%", marginTop: 5, marginBottom: 5 }}>
        <Grid
          container
          sx={{
            padding: 2,
            margin: 0,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Grid item md={6} sm={12} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard
              information="Graph"
              data={80}
              logo={""}
              height={"250px"}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ paddingTop: 0 }}>
            <InfoCard
              information="Top Contributors"
              data={80}
              logo={""}
              height={"250px"}
            />
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default AdminSummary;
