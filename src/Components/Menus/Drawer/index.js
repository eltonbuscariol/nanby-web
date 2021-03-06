import React from "react";
import { MenuItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "../../../Services/auth";

//Ícones
import ChildCareIcon from "@material-ui/icons/ChildCare";
import LabelIcon from "@material-ui/icons/Label";
import BusinessIcon from "@material-ui/icons/Business";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import HomeIcon from "@material-ui/icons/Home";

const menus = {
  Home: "/app",
  Perfil: "/perfil",
  Filhos: "/filhos",
  Médicos: "/medicos",
  Hospital: "/hospital"
};

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "center"
  }
}));

function handleLogout() {
  logout();
}

function getIcon(text) {
  switch (text) {
    case "Home":
      return <HomeIcon />;
    case "Seus Dados":
      return <AssignmentIndIcon />;
    case "Filhos":
      return <ChildCareIcon />;
    case "Hospital":
      return <BusinessIcon />;
    case "Médicos":
      return <LocalHospitalIcon />;
    default:
      return <LabelIcon />;
  }
}

export default function MenuDrawer({ drawerToggle }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar}>
        <a href="/" onClick={handleLogout}>
          <ChildCareIcon fontSize="large" color="primary" />
        </a>
      </div>
      <Divider />
      <List>
        {Object.keys(menus).map(key => (
          <MenuItem
            button
            key={key}
            component={Link}
            to={menus[key]}
            onClick={() => drawerToggle()}
          >
            <ListItemIcon>{getIcon(key)}</ListItemIcon>
            <ListItemText primary={key} />
          </MenuItem>
        ))}
      </List>
    </div>
  );
}
