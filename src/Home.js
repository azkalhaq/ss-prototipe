import React, { Component } from "react";
import ProductCardList from "./ProductCardList";
import ProductServices from './services/ProductServices';
 
class Home extends Component {
  render() {
    return (
        <div className="timeline-container">
            <div className="timeline">
                <ProductCardList
                    onLoadMore={ProductServices.getProducts}
                />
            </div>
        </div>
    );
  }
}
 
export default Home;