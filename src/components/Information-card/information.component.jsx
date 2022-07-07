import React from "react";
import { Card, CardContent, Typography, Icon } from "@mui/material";
import {
  FaUserFriends,
  FaUsersSlash,
  FaHandHoldingUsd,
  FaReceipt
} from "react-icons/fa";
import { SiBookmeter } from "react-icons/si";

const InfoCard = ({ information, data, logo, height = "125px" }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: { height },
        m: 2
      }}>
      <CardContent sx={{ flex: "1 0 auto", padding: "4px", textAlign: "left" }}>
        <Typography component="div" variant="h6">
          {information}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 0,
          marginBottom: 0,
          justifyContent: "space-between",
          flex: "1 0 auto"
        }}>
        {logo === "people" ? (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<FaUserFriends size={"35px"} />}
          </Icon>
        ) : logo === "inactive" ? (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<FaUsersSlash size={"35px"} />}
          </Icon>
        ) : logo === "loan" ? (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<FaHandHoldingUsd size={"35px"} />}
          </Icon>
        ) : logo === "revenue" ? (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<SiBookmeter size={"35px"} />}
          </Icon>
        ) : logo === "expense" ? (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<FaReceipt size={"35px"} />}
          </Icon>
        ) : (
          <Icon sx={{ width: "auto", height: "auto" }}>
            {<FaUserFriends size={"35px"} />}
          </Icon>
        )}
        <Typography component="span" variant="h5">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
