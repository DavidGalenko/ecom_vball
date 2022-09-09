import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, Star, StarBorder} from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
            </div>
            <Typography variant="h5">
                    {product.price.formatted_with_symbol}
            </Typography>
            <Typography className={classes.review}>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <StarBorder/>
                <Typography style={{marginLeft: '3px'}}>(31)</Typography>
            </Typography>
            {/*<Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"></Typography>*/}
        </CardContent>
        <CardActions disableSpacing className = {classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;