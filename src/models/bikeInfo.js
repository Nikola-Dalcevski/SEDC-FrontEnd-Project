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
        <div class="col-lg-6 ">
        <div class="row">
            <img id="main-img-bike" class="col-lg-12" src="Images/image1.jpg" alt="bike image" width="440px" height="400">
            <div class="col-lg-12  ">
                <div class="row no-gutters tumbs">
                    <img class="col-lg-3 tumb" src="Images/image2.jpg" alt="" >
                    <img class="col-lg-3 tumb" src="Images/image3.jpg" alt="">
                    <img class="col-lg-3 tumb" src="Images/image4.jpg" alt="">
                    <img class="col-lg-3 tumb" src="Images/image5.jpg" alt="">
                </div>

            </div>
            <button id="addBtn" class="btn-success customAdd">add in Favorites</button>
        </div>



    </div>

    <div class="col-lg-6">
        <div>
            <h1>${this.brand}</h1>
            <h2>${this.model}</h2>
        </div>
        <ul>
            <li> <span class="infoFeatures">Frame</span>
                <p>-${this.frame}</p>
            </li>
            <li> <span class="infoFeatures">Fork</span>
                <p>-${this.fork}</p>
            </li>
            <li> <span class="infoFeatures">Handlebar</span>
                <p>-${this.handlebar}</p>
            </li>
            <li> <span class="infoFeatures">Front hub</span>
                <p>-${this.FrontHub}</p>
            </li>
            <li> <span class="infoFeatures">Rear hub</span>
                <p>-${this.rearHub}</p>
            </li>
            <li> <span class="infoFeatures">Rear deraillerur</span>
                <p>${this.rearDeraillerur}</p>
            </li>
            <li> <span class="infoFeatures">Crankset</span>
                <p>-${this.crankset}</p>
            </li>
            <li> <span class="infoFeatures">Cassate</span>
                <p>${this.cassate}</p>
            </li>
            <li> <span class="infoFeatures">Chain</span>
                <p>-${this.chain}</p>
            </li>
            <li> <span class="infoFeatures">Brakes</span>
                <p>-${this.brakes}</p>
            </li>
            <li> <span class="infoFeatures">Seat</span>
                <p>-${this.seat}</p>
            </li>
            <li> <span class="infoFeatures">Tires</span>
                <p>-${this.tiresInfo} size: ${this.tireSize}</p>
            </li>
            <li> <span class="infoFeatures">Weight</span>
                <p>-${this.weight}</p>
            </li>


        </ul>
    </div>
    `
    }
}

