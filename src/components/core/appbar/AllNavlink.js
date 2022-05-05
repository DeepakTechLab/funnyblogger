import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Typography, MenuItem, Button } from "@mui/material";
import { isAuthenticate, signout } from "../../auth/helper";

const AllNavlink = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginLeft: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MenuItem>
        <Typography textAlign="center">
          <NavLink
            to={"/"}
            className={"navLink"}
            style={({ isActive }) => {
              return {
                color: isActive && "#406882",
              };
            }}
          >
            Home
          </NavLink>
        </Typography>
      </MenuItem>
      {isAuthenticate() && (
        <>
          <MenuItem>
            <Typography textAlign="center">
              <NavLink
                to={"/post"}
                className={"navLink"}
                style={({ isActive }) => {
                  return {
                    color: isActive && "#406882",
                  };
                }}
              >
                Post
              </NavLink>
            </Typography>
          </MenuItem>

          <MenuItem>
            <Typography textAlign="center">
              <NavLink
                to={"/profile"}
                className={"navLink"}
                style={({ isActive }) => {
                  return {
                    color: isActive && "#406882",
                  };
                }}
              >
                Profile
              </NavLink>
            </Typography>
          </MenuItem>
        </>
      )}
      {!isAuthenticate() && (
        <>
          <Box flexGrow={1} />
          <MenuItem>
            <Typography textAlign="center">
              <NavLink to={"/signin"} className={"navLink"}>
                <Button variant="outlined">Sign in</Button>
              </NavLink>
            </Typography>
          </MenuItem>
        </>
      )}
      {isAuthenticate() && (
        <>
          <Box flexGrow={1} />
          <MenuItem>
            <Typography textAlign="center">
              <Button
                variant="outlined"
                onClick={() => {
                  signout(() => {
                    navigate("/");
                  });
                }}
              >
                Sign out
              </Button>
            </Typography>
          </MenuItem>
        </>
      )}
    </Box>
  );
};

export default AllNavlink;
