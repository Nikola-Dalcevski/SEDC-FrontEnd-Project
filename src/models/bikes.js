export class Bike {
    constructor(brand, model, type, tireSize, fullname) {
        this.brand = brand;
        this.model = model
        this.fullname = fullname;
        this.type = type;
        this.tireSize = tireSize;
        //this.img = img;
    }


    renderBike() {
        return `<div  class='col-sm-12 col-lg-4 bikes-render'  >
        <button type='button' class='bikeInfo'value='${this.fullname}'  >
        <img src="Images/download.jpg" alt="">
        <p>Brand: ${this.brand}</p>
        <p>Model: ${this.model}</p>
        <p>Type :${this.type}</p>
        </button>
        </div>`
    }
}
