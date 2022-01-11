import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, NavItem, NavLink, } from 'reactstrap';

export default class CartSummary extends Component {
    
        renderSummary(){
            return(
            <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Your Cart - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>

                                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Button>
                                &nbsp;
                                {cartItem.product.productName}
                                &nbsp;
                                &nbsp;
                                <Button color="success" >{cartItem.quantity}</Button>
                            </DropdownItem>
                        ))}
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="cart">Go To Cart</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                );
        }
        renderEmptyCart(){
            return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
            );
        }
        render() {
        return( <div>
            
                {this.props.cart.length>0?this.renderSummary(): this.renderEmptyCart()}</div>
      );
    }
}
