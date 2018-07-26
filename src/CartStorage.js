class CartStorage {
    constructor(config) {
        this._name = config.name; 
        localStorage.setItem(config.name, JSON.stringify([]));
    }
    
    addItem(newItem) {
        let cart = JSON.parse(localStorage.getItem(this._name));
        
        let found = cart.findIndex((item) => item.id === newItem.id);
        
        if (found === -1) {
            cart.push(newItem);
        } else {
            cart[found].quantity += newItem.quantity; 
        }
        
        localStorage.setItem(this._name, JSON.stringify(cart)); 
    }
    
    removeItem(id) {
        let cart = JSON.parse(localStorage.getItem(this._name)); // Array version of the cart 
        
        let newCart = cart.filter((item) => parseInt(item.id, 10) !== parseInt(id, 10)); 
        
        localStorage.setItem(this._name, JSON.stringify(newCart)); 
    }
    
    updateItem(newItem) {
        let cart = JSON.parse(localStorage.getItem(this._name)); 
        
        let found = cart.findIndex((item) => item.id === newItem.id);
        
        if (found !== -1) {
            cart[found] = {...newItem}; 
        }
        
        localStorage.setItem(this._name, JSON.stringify(cart)); 
    }
    
    uniqueCount() {
        return JSON.parse(localStorage.getItem(this._name)).length; 
    }
    
    count() {
        let totalQuantity = JSON.parse(localStorage.getItem(this._name)).reduce((accumulator, currentItem) => {
            return accumulator + currentItem.quantity; 
        }, 0);
        
        return totalQuantity; 
    }
}


export default CartStorage; 