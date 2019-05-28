export class Http {
    static fetchDataBikes(url){
        return fetch(url)
        .then(response => response.json())
        .then(data => data.Bikes)
        .catch(err => console.log(err));

    }
    static fetchDataInfo(url,bikeFullName){
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            let bicyle = data.Bikes.find(x => x.fullname === bikeFullName)
            console.log(bicyle);
            return bicyle
        })
        .catch(err => console.log(err));

    }

    static fetchUser(url, email, pass){
        return fetch(url)
        .then(data => data.json())
        .then(data => {
            
            let findUser;
            for (const user in data) {
                console.log("how many")
                console.log(user);
                console.log(user.email);
                
                  
              
                
            }
                   
        })
    }
}