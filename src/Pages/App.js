import React from "react";
import { Header } from "../Components/Layouts";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChildCareIcon from "@material-ui/icons/ChildCare";

export default function App() {
  return (
    <>
      <Header />
      <Drawer variant="permanent">
        <List>
          <ListItem buttom>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem buttom>
            <ListItemIcon>
              <ChildCareIcon />
            </ListItemIcon>
            <ListItemText primary="Filhos" />
          </ListItem>
        </List>
      </Drawer>
      <main>
        <div className="root" />
        <footer>
          <p>Copyright @2020</p>
        </footer>
      </main>
    </>
  );
}
