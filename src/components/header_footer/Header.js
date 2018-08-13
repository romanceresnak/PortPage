import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
class Header extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value,
      headerShow: false
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.screenY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShados: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton>
            <MenuIcon
              aria-label="Menu"
              color="inherit"
              onClick={value => this.toggleDrawer(value)}
            />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
