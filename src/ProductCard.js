import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
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
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const styles = theme => ({
  card: {
    marginTop: 10,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  buy:{
    marginLeft: 'auto',
    marginRight: 10,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ProductCard extends React.Component {
    state = { 
        expanded: false,
    };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;

        return (
        <div>
            <Card className={classes.card}>
            <Link to={'/product/' + this.props.id}>
                <CardMedia
                    className="product-media"
                    image={this.props.image}
                    title={this.props.name}
                />
            </Link>
            <CardHeader
                title={
                    <Typography type="subheading" onClick={this.handleExpandClick}>
                        {this.props.name}
                        <IconButton
                            className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Typography>
                }
                subheader={
                    <div>
                        <Typography type="subheading">
                            <b>{this.props.price}</b>
                            <Chip label={this.props.size} className="chip" />
                        </Typography>
                        <Typography type="caption">
                            {this.props.naksir} sista naksir
                        </Typography>
                    </div>
                }
            />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    {this.props.description}
                </Typography>
                </CardContent>
            </Collapse>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <Button className={classes.buy} color="primary" raised>
                    Beli
                </Button>
            </CardActions>
            </Card>

            <Route path={'/product/' + this.props.id} component={ProductCard} />
        </div>
        );
    }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  naksir: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProductCard);