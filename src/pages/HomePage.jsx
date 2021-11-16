import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";
import MediaCard from "../components/MediaCard";
import { clientContext } from "../contexts/ClientContext";
import Pagination from "../components/Pagination";
// import MyCarousel from '../components/Carousel';

const HomePage = () => {
  const { getProducts, products, currentPosts } = useContext(clientContext);
  const navigate = useNavigate()
  const [brandValue, setBrandValue] = useState('')

    let object = new URLSearchParams(window.location.search)
    function filterProducts(key, value) {
        object.set(key, value)
        let newUrl = `${window.location.pathname}?${object.toString()}`;
        navigate(newUrl)
        getProducts()
        setBrandValue(value) 
    }

    useEffect(() => {
        setBrandValue(object.get('category'))
    }, [object])

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <>
    <div className="home-page">
      <div className="sidebar">
        <FormControl component="fieldset">
          <FormLabel component="legend">Категория</FormLabel>
          <RadioGroup
            aria-label="gender"
            value={brandValue}
            name="radio-buttons-group"
            onChange={(e) => filterProducts("category", e.target.value)}
          >
           <FormControlLabel
                value="Пицца"
                control={<Radio />}
                label="Пицца"
              />
              <FormControlLabel
                value="Суши"
                control={<Radio />}
                label="Суши"
              />
              <FormControlLabel
                value="Роллы"
                control={<Radio />}
                label="Роллы"
              />
              <FormControlLabel
                value="Комбо"
                control={<Radio />}
                label="Комбо"
              />
          </RadioGroup>
        </FormControl>
      </div>
      {products ? (
        <>
          <div className="products">
            {currentPosts.map((product) => (
              <MediaCard product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>

    <div>
      <Pagination />
    </div>  
  </>
  );
};

export default HomePage;
