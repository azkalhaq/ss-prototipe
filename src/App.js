import './App.css';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import red from 'material-ui/colors/red';
import MenuAppBar from './MenuAppBar';
import ProductCardList from './ProductCardList';
import ProductServices from './services/ProductServices';


injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
      primary: red,
      error: {
        main: red[500],
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            drawerOpened: false
        };
    };

    _toggleDrawer(){
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <MenuAppBar />
                    <div className="timeline-container">
                        <div className="timeline">
                            <ProductCardList
                                onLoadMore={ProductServices.getProducts}
                            />
                        </div>
                    </div>
                </div>
            </ MuiThemeProvider>
        );
    }
}

export default App;
