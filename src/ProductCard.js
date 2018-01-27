import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import AddIcon from 'material-ui-icons/AddShoppingCart';
import Chip from 'material-ui/Chip/Chip';
import Button from 'material-ui/Button/Button';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Divider from 'material-ui/Divider/Divider';

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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
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
            <CardMedia
                className="product-media"
                image="https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/d2e39f39a0ec2ff3a09914b320a211a7.jpg"
                title="Contemplative Reptile"
            />
            <CardHeader
                title={
                    <Typography type="subheading">
                        Aynocca Lace Simple Mini Dress Minon
                    </Typography>
                }
                subheader={
                    <div>
                        <Typography type="subheading">
                            <b>Rp 125.000</b>
                            <Chip label="S, M, L, XL" className="chip" />
                        </Typography>
                        <Typography type="caption">
                            2000 Sistam Naksis Ini
                        </Typography>
                    </div>
                }
            />
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="Add">
                    <AddIcon />
                </IconButton>
                <IconButton
                className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    Warna Broken White, Dusty Pink, Maroon, dan Navy (kiri ke kanan)
                    Size S:
                    Lingkar dada 88 cm, Lebar bahu 35 cm, Panjang lengan 35 cm, Lingkar lengan 40 cm, Panjang 90 cm, Lingkar pinggang 84 cm, Lingkar pinggul 90 cm
                    Size M :
                    Lingkar dada 92 cm, Lebar bahu 36 cm, Panjang lengan 35 cm, Lingkar lengan 42 cm, Panjang 90 cm, Lingkar pinggang 86 cm, Lingkar pinggul 92 cm
                    Size L :
                    Lingkar dada 96 cm, Lebar bahu 37 cm, Panjang lengan 36 cm, Lingkar lengan 44 cm, Panjang 92 cm, Lingkar pinggang 88 cm, Lingkar pinggul 94 cm
                    Size XL :
                    Lingkar dada 100 cm, Lebar bahu 38 cm, Panjang lengan 37 cm, Lingkar lengan 46 cm, Panjang 94 cm, Lingkar pinggang 90 cm, Lingkar pinggul 98 cm
                    Bahan Brukat Lapis Furing
                    1 Resleting belakang 
                    Model Menggunakan Size M & Warna Navy
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </div>
        );
    }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);