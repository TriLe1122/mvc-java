
export class Snack {
  // NOTE takes in the info we want, and puts it into a way we can build arrays or but into text interpolation
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }
  // NOTE this just inreases the amount of snacks we have added to the cart
  buySnack() {
    this.quantity++
    console.log(this.name, 'bought for', this.price)
  }



  // NOTE VVVV this is the template being used whenever we make a new snack in our appstate.js
  get Template() {
    return `
    <div class="col-md-4 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">Price: ${this.price}</h3>
      <h3 class="text-warning">Quantity: ${this.quantity}</h3>
      <button class="btn btn-primary w-100" onclick="app.snackController.buySnack('${this.name}')">Buy this item</button>
    </div>
    `
  }

  // NOTE this is the template being used whenever we hit the buy item to the cart

  get cartTemplate() {
    return `
    <div class=" bg-info elevated-2 text-light rounded p-2 my-2 border border-light ">
  <p class="card-title">${this.name}</p>
  
  <span class="text-light d-flex"<p>$${this.price * this.quantity}</p><span >x${this.quantity}</span></span>
</div>
    `

  }

}