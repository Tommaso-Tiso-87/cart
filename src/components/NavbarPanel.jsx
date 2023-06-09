import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarPanel.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavbarPanel = () => {

  const navigate = useNavigate()
  const cartProducts = useSelector(state=>state.cart)

  
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={()=>navigate('/')}>Boostrap App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=>navigate('/')}>Products</Nav.Link>
          </Nav>
          <Nav.Link className='cart__group'onClick={()=>navigate('/cart')}><AiOutlineShoppingCart size="25px"/><span className='cart__badge'>{cartProducts.length}</span></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPanel