import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import { Link } from "react-router-dom";

import {
  CaretDown,
  CaretUp,
  HouseSimple,
  Ticket,
  Package,
  UserCircle,
} from "@phosphor-icons/react";

import { useState } from "react";

interface NavItemProps {
  text: string;
  icon?: React.ReactElement;
  path?: string;
  children?: Array<INavLink>;
  isOpen?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  text,
  icon,
  path = "#",
  children = null,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  if (children && children.length > 0) {
    return (
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text}></ListItemText>
          {open ? <CaretUp /> : <CaretDown />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children.map((navlink) => {
            return (
              <List component="div" disablePadding>
                <ListItemButton component={Link} to={navlink.path}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={navlink.text} />
                </ListItemButton>
              </List>
            );
          })}
        </Collapse>
      </ListItem>
    );
  }
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton component={Link} to={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
