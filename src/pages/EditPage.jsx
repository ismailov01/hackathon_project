import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const schema = yup.object({
    name: yup.string().min(3).max(30).required("Required"),
    description: yup.string().min(10).max(255).required("Required"),
    image: yup.string().required("Required"),
    price: yup.number().min(3).required("Required"),
    color: yup.string().required("Required"),
    brand: yup.string().required("Required"),
    model: yup.string().min(1).max(30).required("Required"),
  });

  const params = useParams()

  const {getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
  useEffect(() => {
    getProductToEdit(params.id)
  }, [])
  const navigate = useNavigate()


  return (
    <div className="edit-page">
      <h2>Change phone</h2>
      {
          productToEdit ? (
            <Formik
            validationSchema={schema}
            onSubmit={(editedProduct) => {
                saveEditedProduct(editedProduct)
                navigate('/admin')

            }}
            initialValues={productToEdit}
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
                  helperText={touched.name ? errors.name : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone description"
                  type="text"
                  variant="standard"
                  name="description"
                  value={values.description}
                  error={!!errors.description && touched.description}
                  helperText={touched.description ? errors.description : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone image"
                  type="text"
                  variant="standard"
                  name="image"
                  value={values.image}
                  error={!!errors.image && touched.image}
                  helperText={touched.image ? errors.image : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone price"
                  type="number"
                  variant="standard"
                  name="price"
                  value={values.price}
                  error={!!errors.price && touched.price}
                  helperText={touched.price ? errors.price : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone color"
                  type="text"
                  variant="standard"
                  name="color"
                  value={values.color}
                  error={!!errors.color && touched.color}
                  helperText={touched.color ? errors.color : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone brand"
                  type="text"
                  variant="standard"
                  name="brand"
                  value={values.brand}
                  error={!!errors.brand && touched.brand}
                  helperText={touched.brand ? errors.brand : ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone model"
                  type="text"
                  variant="standard"
                  name="model"
                  value={values.model}
                  error={!!errors.model && touched.model}
                  helperText={touched.model ? errors.model : ""}
                  onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                  Save changes
                </Button>
              </form>
            )}
          </Formik>
          ) : (
              <h2>Loading</h2>
          )
      }
      
    </div>
  );
};

export default EditPage;
