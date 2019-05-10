export class Http {
    static fetchData(url){
        return fetch(url)
        .then(response => response.json())
        .then(data => data.Bikes)
        .catch(err => console.log(err));

    }
   
}