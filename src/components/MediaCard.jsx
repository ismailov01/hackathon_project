import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { clientContext } from '../contexts/ClientContext';
import DetailModal from './DetailModal';


const MediaCard = (props) => {
  const {addAndDeleteProductInCart, checkProductInCart} = useContext(clientContext)
  const [modalShow, setModalShow] = React.useState(false);
    console.log(props);
    return (
        <Card sx={{ maxWidth: 300, margin: '10px'}}>
      <CardMedia
        component="img"
        height="140"
        style={{objectFit: 'contain'}}
        image={props.product.image}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.composition}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addAndDeleteProductInCart(props.product)} >
            <ShoppingCartIcon color={checkProductInCart(props.product.id) ? 'error' : 'primary'} />
        </Button>
        <Link to={`/product/${props.product.id}`}>
        <Button size="small"
        variant="contained">Подробнее</Button>
        </Link>
        {/* <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      </CardActions>
    </Card>
    );
};

export default MediaCard;


