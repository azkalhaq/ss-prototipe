import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
import FolderIcon from 'material-ui-icons/Folder';
import FaceIcon from "material-ui-icons/Face";
import CartIcon from "material-ui-icons/ShoppingCart";
import MenuIcon from "material-ui-icons/MoreHoriz";

const styles = {
  root: {
    width: 500,
  },
};

class BottomNav extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="Bottom-Nav"
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Cart" icon={<CartIcon />} />
        <BottomNavigationAction label="Sista" icon={<FaceIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);