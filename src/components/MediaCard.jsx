import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { clientContext } from '../contexts/ClientContext';
import DetailModal from './DetailModal';
import ReactCardFlip from 'react-card-flip';


const MediaCard = (props) => {
  const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInFavorites, checkFavoriteInFavorites, getProducts} = useContext(clientContext)
  const [modalShow, setModalShow] = React.useState(false);
    console.log(props);

    // const [isFlipped, setIsFlipped] = useState(false)
    // const handleClick = (() => {
    //   setIsFlipped(!isFlipped)
    // })

    // useEffect(() => {
    //   getProducts()
    // },[])
    return (
      // <ReactCardFlip isFlipped={isFlipped}>
        <Card sx={{ maxWidth: 300, margin: '10px'}} 
        className='cartochka'>
      <CardMedia
        component="img"
        height="140"
        style={{objectFit: 'contain'}}
        image={props.product.image}
        alt="product"
        className='cartochka'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontSize: "20px"}}>
          {props.product.price} сом
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addAndDeleteProductInCart(props.product)} >
            <ShoppingCartIcon color={checkProductInCart(props.product.id) ? 'error' : 'primary'} />
        </Button>
          <Button size="small" onClick={() => addAndDeleteProductInFavorites(props.product)}>
            <FavoriteIcon color={checkFavoriteInFavorites(props.product.id) ? 'error' : 'primary'} />
        </Button>
        {/* <Link to={`/product/${props.product.id}`}> */}
        <Button size="small"
        variant="contained" onClick={()=> setModalShow(true)}>Подробнее</Button>
        {/* </Link> */}
        <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        products = {props.product}
      />
      </CardActions>
    </Card>
      // </ReactCardFlip>
    );
};

export default MediaCard;


