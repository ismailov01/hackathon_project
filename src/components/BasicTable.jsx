import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { adminContext } from "../contexts/AdminContext";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { API } from "../helpers/const";

export default function BasicTable() {
  const { getProducts, products, deleteProduct } = React.useContext(adminContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Photo</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">#</TableCell>
                <TableCell align="right">#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((phone) => (
                <TableRow
                  key={phone.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {phone.name}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title={phone.description}>
                      <p>{phone.description.slice(0, 30)}...</p>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <img width="50" src={phone.image} alt="phone" />
                  </TableCell>
                  <TableCell align="right">{phone.price}</TableCell>
                  <TableCell align="right">{phone.color}</TableCell>
                  <TableCell align="right">{phone.brand}</TableCell>
                  <TableCell align="right">{phone.model}</TableCell>
                  <TableCell align="right">
                    <Link to={`/admin/edit/${phone.id}`}>
                      <Button color="warning" variant="outlined">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => deleteProduct(phone.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
