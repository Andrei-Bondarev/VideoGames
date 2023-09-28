import React from "react";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
                style: {
                    borderRadius: "20px"
                },
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        ></TextField>
    );
};

export {SearchBar};
