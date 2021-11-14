import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router";

const AddPage = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(3, "minimal 3 symbol")
      .max(30, "Maximal 30 symbol ")
      .required("Поле обязательно для заполнения"),
    description: yup
      .string()
      .min(10, "minimal 10 symbol")
      .max(255, "Maximal 255 symbol ")
      .required("Поле обязательно для заполнения"),
    image: yup
      .string()
      // .min(3, "minimal 3 symbol")
      // .max(30, 'Maximal 30 symbol ')
      .required("Поле обязательно для заполнения"),
    price: yup
      .number()
      .min(3, "minimal 3 symbol")
      // .max(30, 'Maximal 30 symbol ')
      .required("Поле обязательно для заполнения"),
    color: yup
      .string()
      // .min(3, "minimal 3 symbol")
      // .max(30, 'Maximal 30 symbol ')
      .required("Поле обязательно для заполнения"),
    brand: yup
      .string()
      // .min(3, "minimal 3 symbol")
      // .max(30, 'Maximal 30 symbol ')
      .required("Поле обязательно для заполнения"),
    model: yup
      .string()
      .min(1, "minimal 1 symbol")
      .max(30, "Maximal 30 symbol ")
      .required("Поле обязательно для заполнения"),
  });

  const { addProduct } = useContext(adminContext)
  const navigate = useNavigate()
  const handleSubmit = (product) => {
      addProduct(product)
      navigate("/admin")
  }
  return (  
    <div className="add-page">
      <h2>Add phone</h2>
      <Formik 
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
            name: '',
            description: '',
            image: '',
            price: '',
            color: '',
            brand: '',
            model: ''
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Phone name"
              type="text"
              variant="standard"
              name="name"
              value={values.name}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone description"
              type="text"
              variant="standard"
              name="description"
              value={values.description}
              error={!!errors.description && touched.description}
              helperText={touched.description ? errors.description : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone image"
              type="text"
              variant="standard"
              name="image"
              value={values.image}
              error={!!errors.image && touched.image}
              helperText={touched.image ? errors.image : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone price"
              type="number"
              variant="standard"
              name="price"
              value={values.price}
              error={!!errors.price && touched.price}
              helperText={touched.price ? errors.price : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone color"
              type="text"
              variant="standard"
              name="color"
              value={values.color}
              error={!!errors.color && touched.color}
              helperText={touched.color ? errors.color : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone brand"
              type="text"
              variant="standard"
              name="brand"
              value={values.brand}
              error={!!errors.brand && touched.brand}
              helperText={touched.brand ? errors.brand : ''}
              onChange={handleChange}
            />
            <TextField
              label="Phone model"
              type="text"
              variant="standard"
              name="model"
              value={values.model}
              error={!!errors.model && touched.model}
              helperText={touched.model ? errors.model : ''}
              onChange={handleChange}
            />
            <Button 
            variant="contained" 
            color="primary" 
            type="submit">
            Add phone
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPage;
