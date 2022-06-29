var nd = require("needle")
// var url = "https://jsonplaceholder.typicode.com/todos/1"
// nd.get(url, (err,response,body) => {
//     if(err)
//         console.log(err)
//     else    
//         console.log(body)
// })

// for(i=1; i<=499 ; i++){
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=495d56f80359aa6f05a8995fb8b63287&language=en-US&page="+i
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err) 
//     else
//         var results = body.results
//         for(ele in results)
//             console.log(results[ele].title)
// })}


for(i=1; i<=499 ; i++){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=495d56f80359aa6f05a8995fb8b63287&language=en-US&page="+i
    nd.get(url,(err,response,body)=>{
        if(err)
            console.log(err) 
        else
            var results = body.results
            for(ele in results)
                if(body.results[ele].original_language == 'te')
                    console.log(results[ele].title)
    })}

// for(i=1; i<=499 ; i++){
//     var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=495d56f80359aa6f05a8995fb8b63287&language=en-US&page="+i
//     nd.get(url,(err,response,body)=>{
//         if(err)
//             console.log(err) 
//         else
//             var results = body.results
//             for(ele in results)
//                 if(body.results[ele].original_language == 'hi')
//                     console.log(results[ele].title)
//     })}

// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/bhimavaram.json?access_token=pk.eyJ1Ijoic293bXlhc3JpIiwiYSI6ImNsM28wb25tMDAzNGUzZHAxY3V6Y2g2M24ifQ.lB5PCktgiysItP72SE-msw"
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(JSON.parse(body))
// })

// var url = "http://api.weatherstack.com/current?access_key=a1bb9408aa5314f3e8c6381a99ee8d52&query=bhimavaram"
// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(body.current.temperature)
//         console.log(body.location.lac)
//         console.log(body.location.lon)
//         var desc = body.current.weather_descriptions
//         for(ele in desc)
//             console.log(desc[ele])
// })
