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
}