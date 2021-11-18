import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { clientContext } from '../contexts/ClientContext';
import { Button } from "@mui/material";


const DetailPage = () => {
    const {getDetails, productDetails} = useContext(clientContext)
    const params = useParams()
    useEffect(() => {
      getDetails(params.id)
    }, [])
    
    return (
        <div style={{color: 'white'}}>
            {productDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img src={productDetails.image} alt="phone" />
          </div>
          <div>
          <h2>{productDetails.name}</h2>
          <p>{productDetails.composition}</p>
          <Button variant="contained" color="primary">
                Добавить в корзину
          </Button>
          <div>
            <h4>Описание:</h4>
            <ul className="character">
              <li>
                <strong>Цена:</strong>
                <span>{productDetails.price}сом</span>
              </li>
              <li>
                <strong>Порция:</strong>
                <span>{productDetails.gram}</span>
              </li>
              <li>
                <strong>Категория:</strong>
                <span>{productDetails.category}</span>
              </li>
              
            </ul>
          </div>
          </div>
          
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
        </div>
    );
};

export default DetailPage;