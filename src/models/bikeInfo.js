export class bikeInfo {
    constructor(data) {
        this.type = data.Type;
        this.brand = data.Brand;
        this.model = data.Model;
        this.fullName = data.fullname;
        this.brakes = data.Spec.Brakes;
        this.cassate = data.Spec.Cassate;
        this.chain = data.Spec.Chain;
        this.frame = data.Spec.Frame;
        this.forntHub = data.Spec.FrontHub;
        this.handlebar = data.Spec.Handlebar;
        this.rearDeraillerur = data.Spec.RearDeraillerur;
        this.rearHub = data.Spec.RearHub;
        this.seat = data.Spec.Seat;
        this.tireSize = data.Spec.Tires.size;
        this.tiresInfo = data.Spec.Tires.info;
        this.weight = data.Spec.Weight;
        this.crankset = data.Spec.crankset;
        this.fork = data.Spec.fork;
    }

    renderBikeInfo() {
        return `
    <div class="col-lg-6">
                  <img src="Images/image1.jpg" alt="bike image" width="440px">
              </div>
              <div class="col-lg-6">
                  <div>
                      <h1>${this.brand}</h1>
                      <h2>-${this.model}</h2>
                  </div>
                  <ul>
                      <li> <span class="infoHeader">Frame</span><p>-${this.frame}</p> </li>
                      <li> <span>Fork</span><p>-${this.fork}</p> </li>
                      <li> <span>Handlebar</span><p>-${this.handlebar}</p> </li>
                      <li> <span>Front hub</span><p>-${this.FrontHub}</p> </li>
                      <li> <span>Rear hub</span><p>-${this.rearHub}</p> </li>
                      <li> <span>Rear deraillerur</span><p>${this.rearDeraillerur}</p> </li>
                      <li> <span>Crankset</span><p>-${this.crankset}</p> </li>
                      <li> <span>Cassate</span><p>${this.cassate}</p> </li>
                      <li> <span>Chain</span><p>-${this.chain}</p> </li>
                      <li> <span>Brakes</span><p>-${this.brakes}</p> </li>
                      <li> <span>Seat</span><p>-${this.seat}</p> </li>
                      <li> <span>Tires</span><p>-${this.tiresInfo} size: ${this.tireSize}</p> </li>  
                      <li> <span>Weight</span><p>-${this.weight}</p> </li>
                
                      
                  </ul>
              </div>
    `
    }
}