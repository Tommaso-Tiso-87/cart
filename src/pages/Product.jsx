import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import statusCode from "../utils/statusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    // .then((data) => data.json())
    // .then((result) => setProducts(result));
    dispatch(getProducts());
  }, []);

  if (status === statusCode.LOADING) {
    return <h3 className="text-center">Loading...</h3>;
  }
  if (status === statusCode.ERROR) {
    return <Alert key="danger" variant="danger" className="text-center text-uppercase font-weight-bold">
   Something was Wrong, please try again later
  </Alert>;
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3 mb-3 mt-3">
      <Card
        key={product.id}
        className="h-100 border border-dark mx-auto text-center"
        style={{ width: "18rem" }}
      >
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold">{product.title}</Card.Title>
          <Card.Text className="fw-semibold">{product.price} $</Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-center"
          style={{ backgroundColor: "#fff" }}
        >
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center m-3">Products Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
