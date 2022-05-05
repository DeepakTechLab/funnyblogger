import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//Icon
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";
import { isAuthenticate, signout } from "../../auth/helper";

const Drawers = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <HomeIcon sx={{ marginRight: "10px" }} />
            <NavLink
              onClick={() => setOpen(false)}
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
          </ListItemButton>
          {isAuthenticate() && (
            <>
              <ListItemButton>
                <PostAddIcon sx={{ marginRight: "10px" }} />
                <NavLink
                  onClick={() => setOpen(false)}
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
              </ListItemButton>
              <ListItemButton>
                <PersonIcon sx={{ marginRight: "10px" }} />
                <NavLink
                  onClick={() => setOpen(false)}
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
              </ListItemButton>
            </>
          )}

          {!isAuthenticate() && (
            <ListItemButton>
              <NavLink
                onClick={() => setOpen(false)}
                to={"/signin"}
                className={"navLink"}
                style={({ isActive }) => {
                  return {
                    color: isActive && "#406882",
                  };
                }}
              >
                <Button variant="outlined">Sign in</Button>
              </NavLink>
            </ListItemButton>
          )}
          {isAuthenticate() && (
            <ListItemButton>
              <Button
                variant="outlined"
                onClick={() => {
                  signout(() => {
                    setOpen(false);
                    navigate("/");
                  });
                }}
              >
                Sign out
              </Button>
            </ListItemButton>
          )}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Drawers;
