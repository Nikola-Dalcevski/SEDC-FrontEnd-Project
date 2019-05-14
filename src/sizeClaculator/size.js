import { get } from "http";

class SizeCalculator {
   
    constuctor(inseam, height, typeBike){
        this._inseam = inseam;
        this._height = height
        this.typeBike = typeBike;
        this.mountainMultiplayer = 0.66;
        this.cityMultiplayer = 0.685;
        this.roadMultiplayer = 0.7;
       
    }

    get inseam(){
        return this._height;
    }
    set inseam(value){
        if(value < 61) this._inseam = 61;
        else if(value > 86) this._inseam = 86;
    }


    get height(){
        return this._height
    }

    set height(value){
        if(value < 148 )  this.height = 148;
        else if(value > 198) this._height = 198;
    }

    calculateSizeInseam(multiplayer){
      
        let meserment;
        if(multiplayer === "road") meserment = Math.round(this.inseam * roadMultiplayer / 2.54)
        else if( multiplayer === "mount") meserment = Math.round(this.inseam * mountainMultiplayer / 2.54) 
        else meserment = Math.round( this.inseam * cityMultiplayer / 2.54);

        
        
        let size;
        switch(this.height){
            case (this.height > -Infinity && this.height <= 158):
            size = "XS";
            break;
            case this.height > 158 && this.height <= 168:
            size = "S";
            break;
            case this.height > 168 && this.height <= 178:
            size = "M";
            break;
            case this.height > 178 && this.height < 185:
            size = "L";
            break;
            case this.height > 185 && this.height < 193:
            size = "XL";
            break;
            case this.height > 193 && this.height < +Infinity:
            size = "XXL";
            break;
            default:
            size ="you entered invalid height";

            return resultSize = {
                inches : meserment,
                textual: size
            };

        }

    //   renderSizes(sizes){
          
    //   }

    }


    
}