import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { connect } from 'react-redux';
import Badge from "react-bootstrap/Badge";
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"
import alertify from "alertifyjs"

class CartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten çıkarildi")
}
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepet Boş</NavLink>
      </NavItem>
    )
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(cartItem=>(
              <DropdownItem key={cartItem.product.id}>
                <Badge bg="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>
             { cartItem.product.productName}
             <Badge bg="success">{cartItem.quantity}</Badge>
            </DropdownItem>
            ))
          }
          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummary():this.renderEmpty()
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:{
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
