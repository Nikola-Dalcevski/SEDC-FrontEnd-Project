import $ from "jquery";

import * as text from './renderText/text';
import * as Elements from './elements/elements';
import * as SortHelper from './helpers/sortHelpter';
import * as sortElements from './elements/sortElements';
import * as logInElements from './elements/logInElements';
import { Http } from './http/http';
import { Bike } from './models/bikes';
import { clearBikeContextAndRenderText } from "./helpers/cssHelpers";
import { bikeInfo } from "./models/bikeInfo";
import { SizeCalculator } from './sizeClaculator/size'
import { RenderText } from "./renderText/RenderText";
import { User } from "./models/user";
var firebase = require('firebase/app');


require('firebase/auth');
require('firebase/database');
var firebaseConfig = {
    apiKey: "AIzaSyDHS_EjNWEykvMI8ZHruhQbZ161P3GonT4",
    authDomain: "frontend-project-with-firebase.firebaseapp.com",
    databaseURL: "https://frontend-project-with-firebase.firebaseio.com",
    projectId: "frontend-project-with-firebase",
    storageBucket: "frontend-project-with-firebase.appspot.com",
    messagingSenderId: "697608523280",
    appId: "1:697608523280:web:7a695e8837c36233"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
require('firebase/auth');
let firebaseUrl = "https://frontend-project-with-firebase.firebaseio.com/users.json";
console.log(Elements.navTypeButton);


    let userID;
    let text1 = new RenderText();

  //startPage
    clearBikeContextAndRenderText(text1.typesOfBikes);
    //render Type of Bikes
    Elements.navTypeButton.on("click", (e) => {
        clearBikeContextAndRenderText(text1.typesOfBikes);

    })
    //render features
    Elements.navFitcherButton.on("click", (e) => {
        clearBikeContextAndRenderText(text1.featuresOfBike);
    })


   //render calculator
    Elements.navSizeButton.on("click", (e) => {
        clearBikeContextAndRenderText(text1.sizeCalculator);

        let inseam = $("#selectInseam");
        let height = $("#selectHeight");
        let renderBikeSize = $("#renderSize");
        SizeCalculator.renderSelectOptions(height, 150, 192);
        SizeCalculator.renderSelectOptions(inseam, 61, 73);
        height.on("change", (e) => {
            inseam.text("");
            let range = SizeCalculator.calculateInseamRange(height.val());
            SizeCalculator.renderSelectOptions(inseam, range.min, range.max);

        })
        const calculatorButton = $("#calculate");
        calculatorButton.on("click", (e) => {
            e.preventDefault();
            let sizes = SizeCalculator.calculateSizeBike(height.val(), inseam.val());
            renderBikeSize.text("");

            SizeCalculator.renderSizeBike(sizes, renderBikeSize);
        });
    })


    //fetch bikes
    let url = "https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json";
    let allBikes = [];
    Elements.navBikesButton.on("click", (e) => {

        Http.fetchDataBikes(url)

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

                //bikeInfo must be selected after bike buttons are rendered with class bikeInfo
                //so can eventlistener be added to the buttons
                FetchAndEventBikeInfo(url);






            })
            .catch(err => console.log(err));
    })



    // SORT BICYCLES

    // not work for wheelsize problem in comparatin number whit string NOW WORKS
    function sortAllBikes(bikeList, type) {
        let sortList = [];
        let sortedBikes = [];
        console.log(sortElements);
        for (let item in sortElements) {

            console.log()
            if (sortElements[item].prop("checked") && sortElements[item].prop("name") === type) {

                sortList.push(sortElements[item].val());
            }
        }
        console.log(sortList);


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
        console.log(sortedByWheel.length);
        sortedByWheel.forEach(bike => {
            Elements.bikeContext.append(bike.renderBike());
        })
        Elements.filterManu.css("display", "block")
        FetchAndEventBikeInfo(url);
    })

    //SEARCH 

    sortElements.searchButton.on("click", (e) => {
        let listFullname = [];
        let searchBike = sortElements.search.val().toLowerCase();
        Elements.bikeContext.html("");

        allBikes.forEach(bike => listFullname.push(bike.fullname.toLowerCase()));

        listFullname.forEach(name => {
            if (name.includes(searchBike)) {
                let bike = allBikes.find(bike => bike.fullname.toLowerCase() === name);
                if (bike) {
                    Elements.bikeContext.append(bike.renderBike());
                }
            }
        })
        FetchAndEventBikeInfo(url)
        console.log("----");
        console.log
        if (Elements.bikeContext.html) {
            Elements.bikeContext.append("<p>nothing found</p>");
        }
    })

    //bikeInfo Function
    function FetchAndEventBikeInfo(url) {
        $(".bikeInfo").on("click", (e) => {
            let value = e.currentTarget.attributes.value.value;

            Http.fetchDataInfo(url, value)
                .then(data => {
                    let bike = new bikeInfo(data);
                    let showbike = bike.renderBikeInfo()
                    clearBikeContextAndRenderText(showbike);
                    $(".tumb").on("click", (e) => {
                        $("#main-img-bike").attr("src", `${e.currentTarget.attributes[1].value}`);
                    })
                    return data
                })
                .then(data => {
                    $("#addBtn").on("click", (e) => {
                        console.log(data);
                        if(userID){
                            firebase.database().ref(`users/${userID}/bikes`).set(data)
                        }
                    })
                })
                

        });
    }




    //USING FIREBASE

    // make reference to the firebase
    var firebaseRef = firebase.database().ref('users');



    // //fetch users from firebise
    // let emails = 
    // fetch("https://frontend-project-with-firebase.firebaseio.com/users/0RizcYPXWfg1ZQgIiEb3FW0ViMZ2.json")
    //     .then(data => data.json())
    //     .then(data => {
    //         Elements.bikeContext.addClass("col-lg-9");
    //         Elements.bikeContext.css("display", "flex");
    //         allBikes = [];
    //         for (const key in data) {
    //             key.renderBike()
    //         }
    //     })
    //     .catch(err => console.log(err));
       

 
    logInElements.register.on("click", (e) => {
        e.preventDefault();
        clearBikeContextAndRenderText(text1.registerForm);
        $("#registerForms").on("submit", (e) => {
                 e.preventDefault();
                takeRegisterValues(); 
    
             })
    })

   // register user -------
   function takeRegisterValues() {
    var registerFilds = logInElements.registerElements();
    const name = registerFilds.regFirstName.val();
    const lastName = registerFilds.regLastName.val();
    const email = registerFilds.regEmail.val();
    const pass1 = registerFilds.regPassword.val();
    console.log(pass1);
    const pass2 = registerFilds.regConfirm.val();
    
    const pass = passwordCheck(pass1,pass2);

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(user => {
        user.user.updateProfile({
            displayName:`${name} `,
        })
        let alertBox = $(".alertReg");
        alertBox.html("");
        alertBox.css("display","block");
        alertBox.append("You have been registered!");
    })
    .catch( (error) => {
        
       let alertBox = $(".alertReg");
       alertBox.html("");
       alertBox.css("display","block");
       alertBox.append(error.message);
       
       console.log(error);
     });

    
   }


    

    // sign in user

    logInElements.logInForm.on("submit", (e) => {
        e.preventDefault();
        let email = logInElements.logInEmail.val();
        let password = logInElements.logInPassword.val();
        console.log("works");
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user.user.displayName);
            Elements.logInText.css("display","none");
             Elements.showUser.append(RenderText.showUserManu(user.user.displayName));
             userID = user.user.uid;
            $("#logOut").on("click", (e) => {
                 e.preventDefault();
                 logOut();
                 Elements.showUser.html("");
                 Elements.logInText.css("display","block");
                 console.log(user.user.displayName);
            });
            $("#favBikes").on("click", (e) => {

        fetch("https://frontend-project-with-firebase.firebaseio.com/users/0RizcYPXWfg1ZQgIiEb3FW0ViMZ2.json")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            allBikes = [];
            for (const bike in data) {
               
                allBikes.push(new Bike(data[bike].Brand, data[bike].Model, data[bike].Type, data[bike].Spec.Tires.size, data[bike].fullname));
            }
            Elements.bikeContext.html("");
                allBikes.forEach(bike => {
                    Elements.bikeContext.append(bike.renderBike());
                })
                FetchAndEventBikeInfo(url)
                .catch(err => console.log(err));
        })
         .catch(err => console.log(err.message));
              
            })
            

        })
        .catch(err => console.log(err.code));
   
          
    })
  

    //logOut -----------
    function logOut(){
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
          }, function(error) {
            console.error('Sign Out Error', error);
          });
    }

   function passwordCheck(pass1,pass2){
           if(pass1.length >= 8 && pass1 === pass2){
               return pass1;
           }else{
            return "bb"
           }
           
   }









   
