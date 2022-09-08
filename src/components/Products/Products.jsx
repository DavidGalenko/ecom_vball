import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {HeroBanner} from '../../components'
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return(
    <main className={classes.content}>
        <HeroBanner heroBanner={products}/>
        <Typography variant='h2' color='textSecondary' style={{textAlign: 'center'}}>Products</Typography>
        <div className={classes.toolbar} />
        <Grid container justifyContent= "center" spacing = {4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;