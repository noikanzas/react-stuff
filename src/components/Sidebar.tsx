import {
  Paper,
  Typography,
  List,
  Avatar,
  IconButton,
  Divider,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import { Link } from "react-router-dom";
import {
  HouseSimple,
  Ticket,
  Package,
  SignOut,
  DropHalf,
  Folders,
  Gear,
} from "@phosphor-icons/react";

import { NavItem } from "./NavItem";

const navlinks: Array<INavLink> = [
  {
    text: "Home",
    path: "/",
    icon: <HouseSimple size={24} />,
  },
  {
    text: "Service",
    icon: <Ticket size={24} />,
    children: [
      {
        text: "Ticket Overview",
        path: "/service",
      },
      {
        text: "Create Ticket",
        path: "/service/create",
      },
    ],
  },
  {
    text: "Parts",
    icon: <Package size={24} />,
    children: [
      {
        text: "Ticket Overview",
        path: "/parts",
      },
      {
        text: "Create Ticket",
        path: "/parts/create",
      },
      {
        text: "History and Tracking",
        path: "/parts/history",
      },
    ],
  },
  {
    text: "Documents",
    icon: <Folders size={24} />,
    path: "/documents",
  },
  {
    text: "Administration",
    icon: <Gear size={24} />,
    children: [
      {
        text: "Company Details",
        path: "/administration",
      },
      {
        text: "Address Book",
        path: "/administration/addressbook",
      },
      {
        text: "User Management",
        path: "/administration/users",
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "20%",
        minWidth: 220,
        maxWidth: 360,
      }}
    >
      <List
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        disablePadding
      >
        <ListItem>
          <ListItemIcon>
            <DropHalf size={32} weight="light" color="black" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h1">ACRONYME</Typography>}
          />
        </ListItem>
        <Divider />
        {navlinks.map((navlink) => {
          return (
            <NavItem
              text={navlink.text}
              path={navlink.path}
              children={navlink.children}
              icon={navlink.icon}
            />
          );
        })}
        <ListItem
          sx={{
            marginTop: "auto",
          }}
        >
          <ListItemText secondary="&copy; 2023 Noah Vögelin" />
        </ListItem>
        <Divider />

        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" onClick={() => window.alert("Signed Out")}>
              <SignOut />
            </IconButton>
          }
        >
          <ListItemButton disableRipple component={Link} to={`/profile`}>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/62.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="James Ward"
              secondary="james.ward@orbain.com"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};
