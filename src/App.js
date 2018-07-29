import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import CartStorage from './CartStorage';
import CartItems from './CartItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.cartName = 'cart';
    this.localCartStorage = new CartStorage(this.cartName);
    
    this.removeCartItemAt = this.removeCartItemAt.bind(this);
    this.incrementQuantityAt = this.incrementQuantityAt.bind(this);
    this.decrementQuantityAt = this.decrementQuantityAt.bind(this);
    this.updateQuantityAt = this.updateQuantityAt.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      mockApi: [
      {
        "id": "5b5a294fbf63ef80275f2fa3",
        "picture": "http://placehold.it/32x32",
        "name": "Comvex",
        "alt": "Ezent",
        "price": 11.8
      },
      {
        "id": "5b5a294f29824c3215be744f",
        "picture": "http://placehold.it/32x32",
        "name": "Infotrips",
        "alt": "Eventex",
        "price": 9.05
      },
      {
        "id": "5b5a294f6aeb53462f4a2052",
        "picture": "http://placehold.it/32x32",
        "name": "Zytrex",
        "alt": "Pulze",
        "price": 4.04
      },
      {
        "id": "5b5a294ff9843844b196a127",
        "picture": "http://placehold.it/32x32",
        "name": "Eventage",
        "alt": "Andryx",
        "price": 18.13
      },
      {
        "id": "5b5a294fcc486b36b7c55d06",
        "picture": "http://placehold.it/32x32",
        "name": "Unisure",
        "alt": "Papricut",
        "price": 13.91
      },
      {
        "id": "5b5a294fde05d454472d3d4c",
        "picture": "http://placehold.it/32x32",
        "name": "Digique",
        "alt": "Fleetmix",
        "price": 1.59
      }
    ]
    }); 
    
    this.hydrateStateWithLocalStorage();
    window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
  }
  
  componentWillUnMount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }
  
  saveStateToLocalStorage() {
    localStorage.setItem(this.cartName, JSON.stringify(this.state.cart));
  }
  
  hydrateStateWithLocalStorage() {
    let cartName = this.cartName; 
    if(localStorage.hasOwnProperty(cartName)) {
      let cartItems = JSON.parse(localStorage.getItem(cartName)); 
      
      this.setState({
        [cartName]: cartItems
      });
    }
  }
  
  getCartItems() {
    let cartItems = this.state.cart.map((item) => {
      return {
        ...item, 
        ...this.getMockApi(item.id)
      };
    });
    
    return cartItems || [];
  }
  
  // For mock purposes
  addTwoItemsToCartStorage() {
    this.localCartStorage.addItem({id: '5b5a294fde05d454472d3d4c', quantity: 3});
    this.localCartStorage.addItem({id: '5b5a294fcc486b36b7c55d06', quantity: 2});
  }
  
  getItem(id) {
    return this.state.cart.find((cartItem) => cartItem.id == id);
  }
  
  getMockApi(id) {
    return this.state.mockApi.find((item) => item.id === id);
  }
  removeCartItemAt(id) {
    let cart = this.state.cart.filter((item) => item.id !== id); 
    
    this.setState({
      [this.cartName]: cart
    });
  }
  
  incrementQuantityAt(id) {
    let cartItems = this.state.cart.map((item) => {
      if (item.id == id) {
        item.quantity += 1;
      }
      return item;
    });
    
    this.setState({
      cart: cartItems    
    });
  } 

  decrementQuantityAt(id) {
    let cartItems = this.state.cart.map((item) => {
      if (item.id == id) {
        item.quantity -= 1;
      }
      return item;
    });
    
    this.setState({
      cart: cartItems    
    });
  } 
  
  updateQuantityAt(id, value) {
    let cart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.quantity = value; 
      }  
    });
    
    this.setState({
      cart: cart
    });
  }
  
  render() {
    let cartItems = this.getCartItems();
    return (
      <div className="App">
        <CartItems 
          cartItems={cartItems}
          onClickingIncrementButton={this.incrementQuantityAt}
          onClickingDecrementButton={this.decrementQuantityAt}
          onClickingRemoveButton={this.removeCartItemAt}
          onChangingQuantity={this.updateQuantityAt}
        /> 
      </div>
    );
  }
}

export default App;
