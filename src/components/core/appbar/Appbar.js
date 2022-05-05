import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AllNavlink from "./AllNavlink";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#000", cursor: "pointer" }}
          >
            <NavLink to={"/"} className={"navLink"}>
              Blogger
            </NavLink>
          </Typography>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {matches ? (
              <AllNavlink />
            ) : (
              <>
                <Box
                  style={{
                    flexGrow: 1,
                  }}
                />
                <Drawer />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
