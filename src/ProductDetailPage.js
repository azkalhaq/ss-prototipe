import React from 'react';
import ProductServices from './services/ProductServices';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip/Chip';
import Button from 'material-ui/Button/Button';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ProductDetailPage = ({ match }) => {
  const products = ProductServices.getProducts();
  const product = products.filter(
    product => product.id === match.params.productId
  );

  return (
    <div className="card card-product">
      <Card>
        <img className="product-media-detail" src={product[0].image} alt={product[0].name} />
      <CardHeader
          title={
              <Typography type="subheading" onClick={this.handleExpandClick}>
                  {product[0].name}
              </Typography>
          }
          subheader={
              <div>
                  <Typography type="subheading">
                      <b>{product[0].price}</b>
                      <Chip label={product[0].size} className="chip" />
                  </Typography>
                  <Typography type="caption">
                      {product[0].naksir} sista naksir
                  </Typography>
              </div>
          }
      />
      <CardContent>
      <Typography paragraph>
          {product[0].description}
      </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
          <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
              <ShareIcon />
          </IconButton>
          <Button color="primary" raised>
                Beli
          </Button>
      </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
