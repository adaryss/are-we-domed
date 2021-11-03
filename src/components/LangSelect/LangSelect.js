import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { selectLang } from "../../selectors/lang";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    color: "#cecece",
    "&::before": {
      borderColor: "#cecece",
    },
    "& svg": {
      color: "#cecece",
    },
  },
});

export const LangSelect = ({ handleLanguageChange }) => {
  const appLanguage = useSelector(selectLang);
  const classes = useStyles();
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLang(appLanguage);
  }, []);

  const handleChange = (event) => {
    setLang(event.target.value);
    handleLanguageChange(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        right: "0",
        margin: "12px 12px 0 0",
      }}
    >
      <FormControl>
        <Select
          variant="standard"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={lang}
          label="Lang"
          onChange={handleChange}
          className={classes.root}
        >
          <MenuItem value="cs">CZ</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
