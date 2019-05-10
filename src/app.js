import $ from "jquery";
import * as text from './renderText/text';
import * as Elements from './elements/elements';
import * as SortHelper from './helpers/sortHelpter'
import * as sortElements from './elements/sortElements';
import { Http } from './http/http';
import { Bike } from './models/bikes';
//import { sortByType } from "./helpers/sortHelpter";
console.log(Elements.navTypeButton);

Elements.navTypeButton.on("click", (e) => {
   
    Elements.bikeContext.html("");
    Elements.asideNav.css("display", "none");
    Elements.bikeContext.removeClass("col-lg-9");
    Elements.bikeContext.append(text.typeText);
})
Elements.navFitcherButton.on("click", (e) => {
    Elements.asideNav.css("display", "none");
    Elements.bikeContext.removeClass("col-lg-9");
    Elements.bikeContext.html("");
    Elements.bikeContext.append(text.featuresText);
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
                allBikes.push(new Bike(bike.Brand, bike.Model, bike.Type, bike.Spec.Tires.size,bike.fullname));
            });

            Elements.bikeContext.html("");
            allBikes.forEach(bike => {
                Elements.bikeContext.append(bike.renderBike());
            })
            Elements.asideNav.css("display","block");
            Elements.filterManu.css("display", "block");
            console.log(allBikes);
        });
})




// SORT BICYCLES

Elements.sortButton.on("click", (e) => {
    e.preventDefault();
    let sort = [];
    let sortedByType =[];

    //keep the vlues of checkbox TYPE
    for (let item in sortElements) {
        if (sortElements[item].prop("checked") && sortElements[item].prop("name") === "type") {
            sort.push(sortElements[item].val());
        }
    }
    //check if something is selected TYPE
    if (sort.length !== 0) {
        sortedByType = SortHelper.sortByType(sort[0], sort[1], sort[2], allBikes);
        console.log(sortedByType);
    }else {
        sortedByType = allBikes;
    }
    

    sort = [];
    //keep values of checkboc BRAND
    for (let item in sortElements) {
        if (sortElements[item].prop("checked") && sortElements[item].prop("name") === "brand") {
            sort.push(sortElements[item].val());
        }
    }
    let sortedByBrand = [];
     //check if something is selected Brand
     if (sort.length !== 0) {
        sortedByBrand = SortHelper.sortByBrand(sort[0], sort[1], sort[2],sort[3], sortedByType);
       
    }else {
        sortedByBrand = sortedByType;
    }
    console.log(sortedByBrand);
  sort =[]
    //keep values of checkbox WHEEL
    for (let item in sortElements) {
        if (sortElements[item].prop("checked") && sortElements[item].prop("name") === "wheel") {
            sort.push(sortElements[item].val());
        }
    }
    let sortedByWheel = [];
     //check if something is selected Wheel
    if (sort.length !== 0) {
        sortedByWheel = SortHelper.sortByWheelSize(sort[0], sort[1], sort[2], sort[3], sortedByBrand);
        
    }else {
        sortedByWheel = sortedByBrand;
    }
    console.log(sortedByWheel);
    
    Elements.bikeContext.html("");
    sortedByWheel.forEach(bike => {
        Elements.bikeContext.append(bike.renderBike());
    })
    Elements.filterManu.css("display", "block")
    console.log(allBikes);
})

//SEARCH 

sortElements.searchButton.on("click", (e) => {

    let listFullname =[];
    let searchBike = sortElements.search.val();
    Elements.bikeContext.html("");

    allBikes.forEach(bike => listFullname.push(bike.fullname));

    listFullname.forEach(name => {
        if(name.includes(searchBike)){
            let bike = allBikes.find(bike => bike.fullname === name);
            if(bike){
                Elements.bikeContext.append(bike.renderBike());
            }
        }
       
    })

    if(Elements.bikeContext.html){
        Elements.bikeContext.append("<p>nothing found</p>");
    }
})



