import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div className="loading_div">
      <CircularProgress className="loading" />
    </div>
  );
};
