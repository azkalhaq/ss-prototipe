import React, { Component } from "react";
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";
import InfiniteScroll from "react-infinite-scroller";
import Chance from "chance";

const chance = new Chance();

class ProductCardList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
          hasMoreItems: true
        };
    
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.renderInfiniteScroll = this.renderInfiniteScroll.bind(this);
    }

    handleLoadMore() {
        this.setState({
            products: this.state.products.concat(this.props.onLoadMore())
        });
    }

    loaderElement() {
        return <div key={chance.guid()}>Loading ...</div>;
    }

    renderProductsList(data) {
        return data.map(item => {
          return (
            <div key={chance.guid()}>
                <ProductCard 
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    size={item.size}
                    naksir={item.naksir}
                    description={item.description}
                />
            </div>
          );
        });
      }

    renderInfiniteScroll() {
        return (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.handleLoadMore}
            hasMore={this.state.hasMoreItems}
            loader={this.loaderElement()}
            initialLoad={true}
          >
            <div className="product-list">
              {this.renderProductsList(this.state.products)}
            </div>
          </InfiniteScroll>
        );
    }

    render() {
        return (this.renderInfiniteScroll());
      }
}

ProductCardList.propTypes = {
    onLoadMore: PropTypes.func.isRequired
};
  
export default ProductCardList;