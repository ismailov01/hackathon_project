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
import MyCarousel from '../components/Carousel/Carousel';

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
    <MyCarousel/>
    <div className="home-page">
      <div className="sidebar" >
        <FormControl component="fieldset">
          <FormLabel component="legend">Категория</FormLabel>
          <RadioGroup
            aria-label="gender"
            value={brandValue}
            name="radio-buttons-group"
            onChange={(e) => filterProducts("category", e.target.value)}
          >
                          <FormControlLabel

                              value="Завтраки"
                              control={<Radio />}
                              label="Завтраки"
                          /> <img width='100px' src=""  />
                          <FormControlLabel
                              value="Супы"
                              control={<Radio />}
                              label="Супы"
                          />
                          <FormControlLabel
                              value="Салаты"
                              control={<Radio />}
                              label="Салаты"
                          />
                          <FormControlLabel
                              value="Вторые блюда"
                              control={<Radio />}
                              label="Вторые блюда"
                          />
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
                          <FormControlLabel
                              value="Шаурма"
                              control={<Radio />}
                              label="Шаурма"
                          />
                          <FormControlLabel
                              value="Гамбургер"
                              control={<Radio />}
                              label="Гамбургер"
                          />
                          <FormControlLabel
                              value="Хот Дог"
                              control={<Radio />}
                              label="Хот Дог"
                          />
                          <FormControlLabel
                              value="Гарниры"
                              control={<Radio />}
                              label="Гарниры"
                          />
                          <FormControlLabel
                              value="Стейки"
                              control={<Radio />}
                              label="Стейки"
                          />
                          <FormControlLabel
                              value="Паста"
                              control={<Radio />}
                              label="Паста"
                          />
                          <FormControlLabel
                              value="Боул"
                              control={<Radio />}
                              label="Боул"
                          />
                          <FormControlLabel
                              value="Горячие напитки"
                              control={<Radio />}
                              label="Горячие напитки"
                          />
                          <FormControlLabel
                              value="Холодные напитки"
                              control={<Radio />}
                              label="Холодные напитки"
                          />
                  
                          <FormControlLabel
                              value="Дессерты"
                              control={<Radio />}
                              label="Дессерты"
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
