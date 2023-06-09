import React from "react";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { removeAll } from "../store/cartSlice";
// import { updateTotalPrice} from './totalPriceSlice';
// import { removeItemPrice} from './totalPriceSlice';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



const Cart = () => {
  const products = useSelector((state) => state.cart);
  // const totalPrice = useSelector(state => state.totalPrice);

  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(updateTotalPrice(products));
  // }, []);



  const removeToCart = (id, itemPrice) => {
    dispatch(remove(id));
  // dispatch(removeItemPrice(itemPrice))
  };

  const handleRemoveAll = ()=>{
    dispatch(removeAll())
  }
 





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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  //  const cardResume =  <Card className='col-md-3 position-fixed'>
  //  <Card.Header>Total Price</Card.Header>
  //  <Card.Body>
  //    <Card.Text>
  //      With supporting text below as a natural lead-in to additional content.
  //    </Card.Text>
  //    <Button variant="Danger">Remove All</Button>
  //  </Card.Body>
  // </Card>

  return (
    <>
      <div className="container-fluid" style={{display:"flex", justifyContent:"space-evenly"}}>
        <div className="col">{cards}</div>
        <div
          className="col w-25 p-3 h-25 d-inline-block"
        >
          <h4 className="totalPrice">Total 780$</h4>
          <div className="buttonGroup">
            <button className="btn btn-success d-inline p-2 border-2 mx-1">
              Confirm
            </button>
            <button className="btn btn-danger d-inline p-2 border-2" onClick={handleRemoveAll}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
