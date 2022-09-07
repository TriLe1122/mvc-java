import { appState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

// NOTE when the user pushes a button or something that makes the page change or something


function _drawTotal() {
  let total = 0
  let totalDOM = document.getElementById('cartTotal')
  let snacks = appState.snacks
  snacks.forEach(snack => {
    total += snack.price * snack.quantity
  })
  totalDOM.innerText = total
}



// NOTE functions on the outside of the class are PRIVATE, meaning the user cannot access them
// NOTE VVV this is grabbing the information from appstate.js and then turning it into a template from our snack.js
// for  each snack we have, its nice, price, and amount
function _drawSnacks() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(p => template += p.Template)
  document.getElementById('snacks').innerHTML = template
}


// NOTE this is grabbing the template from the snack.js and adding to the cart everytime we hit the add item to the cart
function _drawCart() {
  let cartSnacks = appState.snacks;
  let template = '';
  cartSnacks.forEach((p) => {

    template += p.cartTemplate

  });
  // cartSnacks.forEach(s => template += s.cartTemplate)
  document.getElementById('cart').innerHTML = template;
}


// NOTE this is what starts up and runs automatically. 
// its using the drawsnacks function ^^^^ line 20
export class SnackController {
  // place calls you want to run on load in the controller constructor
  constructor() {
    _drawSnacks()
  }


  buySnack(name) {
    console.log('Buying Snack:', name,);
    snackService.buySnack(name)
    _drawSnacks()
    _drawCart()
    _drawTotal()
    // this.drawPlayers()
  }


}