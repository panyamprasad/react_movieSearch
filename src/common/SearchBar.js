import { InputBase } from "@mui/material";
import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <InputBase
      className="input_Base"
      placeholder="Enter a Movie Name"
      onChange={onChange}
    ></InputBase>
  );
};

export default SearchBar;
