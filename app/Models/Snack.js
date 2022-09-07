
export class Snack {
  // better not to hard code values
  // name = 'mick'
  // score = 0
  // 
  // let values be created on Player Creation
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  buySnack() {
    this.quantity++
    console.log(this.name, 'bought for', this.price)
  }

  get Template() {
    return `
    <div class="col-md-6 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">Price: ${this.price}</h3>
      <h3 class="text-warning">Quantity: ${this.quantity}</h3>
      <button class="btn btn-primary w-100" onclick="app.snackController.buySnack('${this.name}')">+</button>
    </div>
    `
  }

}