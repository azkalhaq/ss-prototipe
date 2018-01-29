import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
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
    value: 'Home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="Bottom-Nav"
      >
        <BottomNavigationAction value="Home" label="Beranda" icon={<HomeIcon />} />
        <BottomNavigationAction value="PageFavorite" label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction value="Cart" label="Cart" icon={<CartIcon />} />
        <BottomNavigationAction value="Sista" label="Sista" icon={<FaceIcon />} />
        <BottomNavigationAction value="Menu" label="Menu" icon={<MenuIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNav);