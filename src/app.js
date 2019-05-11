import $ from "jquery";
import * as text from './renderText/text';
import * as Elements from './elements/elements';
import * as SortHelper from './helpers/sortHelpter'

import * as sortElements from './elements/sortElements';
import { Http } from './http/http';
import { Bike } from './models/bikes';
import { clearBikeContextAndRenderText } from "./helpers/cssHelpers";
//import { sortByType } from "./helpers/sortHelpter";
console.log(Elements.navTypeButton);
clearBikeContextAndRenderText(text.typeText);
Elements.navTypeButton.on("click", (e) => {
    clearBikeContextAndRenderText(text.typeText);

})
Elements.navFitcherButton.on("click", (e) => {
    clearBikeContextAndRenderText(text.featuresText);
})

Elements.navSizeButton.on("click", (e) => {
    clearBikeContextAndRenderText(text.calculatorText);
})

let allBikes = [];
Elements.navBikesButton.on("click", (e) => {

    Http.fetchData("https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json")

        .then(data => {
            Elements.bikeContext.addClass("col-lg-9");
            Elements.bikeContext.css("display", "flex");
            Elements.bikeContext.append("<h1>Loading....</h1>");
            allBikes = [];
            console.log(data);
            data.forEach(bike => {
                allBikes.push(new Bike(bike.Brand, bike.Model, bike.Type, bike.Spec.Tires.size, bike.fullname));
            });

            Elements.bikeContext.html("");
            allBikes.forEach(bike => {
                Elements.bikeContext.append(bike.renderBike());
            })
            Elements.asideNav.css("display", "block");
            Elements.filterManu.css("display", "block");
            console.log(allBikes);
        });
})




// SORT BICYCLES

// not work for wheelsize problem in comparatin number whit string
function sortAllBikes(bikeList, type) {
    let sortList = [];
    let sortedBikes = [];
    for (let item in sortElements) {
        if (sortElements[item].prop("checked") && sortElements[item].prop("name") === type) {
            sortList.push(sortElements[item].val());
        }
    }

    if (sortList.length !== 0) {
        sortedBikes = SortHelper.sortTypeBrandWheel(sortList, bikeList, type);
    } else {
        sortedBikes = bikeList;
    }

    return sortedBikes;
}
Elements.sortButton.on("click", (e) => {
    e.preventDefault();
    let Type = {
        type: "type",
        brand: "brand",
        tireSize: "tireSize"
    };
    let sortedByType = sortAllBikes(allBikes, Type.type);
    let sortedByBrand = sortAllBikes(sortedByType, Type.brand);
    let sortedByWheel = sortAllBikes(sortedByBrand, Type.tireSize);

    Elements.bikeContext.html("");
    sortedByWheel.forEach(bike => {
        Elements.bikeContext.append(bike.renderBike());
    })
    Elements.filterManu.css("display", "block")
})

//SEARCH 

sortElements.searchButton.on("click", (e) => {

    let listFullname = [];
    let searchBike = sortElements.search.val();
    Elements.bikeContext.html("");

    allBikes.forEach(bike => listFullname.push(bike.fullname));

    listFullname.forEach(name => {
        if (name.includes(searchBike)) {
            let bike = allBikes.find(bike => bike.fullname === name);
            if (bike) {
                Elements.bikeContext.append(bike.renderBike());
            }
        }
    })

    if (Elements.bikeContext.html) {
        Elements.bikeContext.append("<p>nothing found</p>");
    }
})



