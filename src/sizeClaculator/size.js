

export class SizeCalculator {



    static renderSelectOptions(element, min, max) {
        let i = min;
        element.append(`<option value="${i}">${i}cm or smaller<option>`),
            i++
        for (i; i < max; i++) {
            element.append(`<option value="${i}">${i}cm<option>`)
        }

        element.append(`
        <option value="${max}">${max}cm or taller<option>
        `);
    }

    static calculateInseamRange(value = 150) {
        let min;
        let max;
        let err;
        switch (true) {
            case value <= 158:
                min = 61; max = 73;
                break;
            case value <= 168:
                min = 63, max = 76;
                break;
            case value <= 178:
                min = 66, max = 78;
                break;
            case value <= 185:
                min = 68, max = 81;
                break;
            case value <= 193:
                min = 71, max = 83;
                break;
            case value < 193:
                min = 73, max = 86;
                break;
            default:
                err = "Can't find right MountHibrid.size for yours mesurments";
        }

        return {
            min,
            max,
            err
        };
    }

    static calculateSizeBike(height, inseam) {
        let sizebike = {
            MountHibrid: {
                inches: "",
                size: ""
            },
            Road: {
                inches: "",
                size: "",
            }
        }
        switch (true) {
            case (height <= 158 && inseam <= 73):
                sizebike.MountHibrid.inches = '<14"';
                sizebike.MountHibrid.size = "XS";
                break;
            case (height <= 168 && inseam <= 76):
                sizebike.MountHibrid.inches = '15"/16"';
                sizebike.MountHibrid.size = "S";
                break;
            case (height <= 178 && inseam <= 78):
                sizebike.MountHibrid.inches = '16"/17"';
                sizebike.MountHibrid.size = "M";
                break;
            case (height <= 185 && inseam <= 81):
                sizebike.MountHibrid.inches = '17"/18"';
                sizebike.MountHibrid.size = "L";
                break;
            case (height <= 193 && inseam <= 83):
                sizebike.MountHibrid.inches = '18"/19"';
                sizebike.MountHibrid.size = "XL";
                break;
            case (height > 193 && inseam > 73):
                sizebike.MountHibrid.inches = '19"+';
                sizebike.MountHibrid.size = "XXL";
                break;
        }

        switch (true) {
            case height <= 152:
                sizebike.Road.inches = '18"';
                sizebike.Road.size = 'XXS';
                break;
            case height <= 160:
                sizebike.Road.inches = '19"';
                sizebike.Road.size = 'XS';
                break;
            case height <= 168:
                sizebike.Road.inches = '20"';
                sizebike.Road.size = 'S';
                break;
            case height <= 175:
                sizebike.Road.inches = '21"';
                sizebike.Road.size = 'M';
                break;
            case height <= 183:
                sizebike.Road.inches = '22"';
                sizebike.Road.size = 'L';
                break;
            case height <= 191:
                sizebike.Road.inches = '23"';
                sizebike.Road.size = 'XL';
                break;
            case height > 191:
                sizebike.Road.inches = '23"+';
                sizebike.Road.size = 'XXL';
                break;

        }

        return sizebike;
    }

  static renderSizeBike(sizebikes,element){
     console.log(sizebikes.MountHibrid);
     console.log(element);
     element.append(`
     <p>1 Your Mountain and Hibrit bike top tube size is: ${sizebikes.MountHibrid.inches} inches.</p>
     <p>Mountain and Hibrid  bike size: ${sizebikes.MountHibrid.size}</p> <br>
     
     <p>2 Your Road bike top tube size is: ${sizebikes.Road.inches} inches.</p>
     <p>  Road bike size: ${sizebikes.Road.size}</p> <br>
     
     `)
  }

}