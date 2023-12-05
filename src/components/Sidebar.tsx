import {
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import { useState } from "react";
interface INavLink {
  text: string;
  children?: Array<{ text: string }>;
}

const navlinks: Array<INavLink> = [
  {
    text: "Home",
  },
  {
    text: "Service",
    children: [
      {
        text: "Ticket Overview",
      },
      {
        text: "Create Ticket",
      },
    ],
  },
  {
    text: "Parts",
    children: [
      {
        text: "Ticket Overview",
      },
      {
        text: "Create Ticket",
      },
      {
        text: "History and Tracking",
      },
    ],
  },
  {
    text: "Profile",
  },
];

interface NavItemProps {
  text: string;
  children?: Array<INavLink>;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  children = null,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  if (children && children.length > 0) {
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children.map((navlink) => {
            return (
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={navlink.text} />
                </ListItemButton>
              </List>
            );
          })}
        </Collapse>
      </>
    );
  }
  return (
    <ListItemButton>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary={text}></ListItemText>
    </ListItemButton>
  );
};

export const Sidebar = () => {
  return (
    <Paper>
      <Typography variant="h1">ACRONYME</Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {navlinks.map((navlink) => {
          return <NavItem text={navlink.text} children={navlink.children} />;
        })}
      </List>
    </Paper>
  );
};
