import { Paper, Typography, List, Avatar, Box } from "@mui/material";

import {
  HouseSimple,
  Ticket,
  Package,
  UserCircle,
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
    text: "Profile",
    icon: <UserCircle size={24} />,
    path: "/profile",
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
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          p: 2,
        }}
      >
        ACRONYME
      </Typography>
      <List
        sx={{
          width: "100%",
        }}
      >
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
      </List>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
        }}
      >
        <Avatar src="https://randomuser.me/api/portraits/men/62.jpg"></Avatar>
        <Box>
          <Typography>James Ward</Typography>
          <Typography>james.ward@orbain.com</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
