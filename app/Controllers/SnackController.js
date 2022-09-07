import { appState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";




// NOTE functions on the outside of the class are PRIVATE, meaning the user cannot access them
function _drawSnacks() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(p => template += p.Template)
  document.getElementById('snacks').innerHTML = template
}


export class SnackController {
  // place calls you want to run on load in the controller constructor
  constructor() {
    // NOTE for demonstration purposed
    // new Player('Mick', 0)
    // new Player('Jeffe', -10)
    // this.drawPlayers()
    _drawSnacks()
  }


  buySnack(name) {
    console.log( 'Buying Snack:', name,);
    snackService.buySnack(name)
    _drawSnacks()
    // this.drawPlayers()
  }

  drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(p => {
      template += `
      <div class="col-md-6 text-center p-2 bg-light elevation-2">
        <h3>${p.name}</h3>
        <h3 class="text-warning">Price: ${p.price}</h3>
        <h3 class="text-warning">Quantity: ${p.quantity}</h3>
        <button class="btn btn-primary w-100" onclick="app.snackController.buySnack('${p.name}')">+</button>
      </div>
      `
    })
    document.getElementById('snacks').innerHTML = template
  }
}