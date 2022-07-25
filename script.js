var json = [
    {
        "id" : "user1", 
        "favouriteAnime" : "Naruto",
        "favouriteGame" : "Rainbow six siege",
        "email": "abc@gmail.com"
    },
    {
        "id" : "user2", 
        "favouriteAnime"   : "Tokyo revengers",
        "favouriteGame" : "Valorant",
        "email": "xyz@gmail.com"
    }
];

//for loop
for(var i = 0; i < json.length; i++) {
    var object = json[i];

    console.log(object.id);
    console.log(object.favouriteAnime);
    console.log(object.favouriteGame);
    console.log(object.email);

}

//for Each
json.forEach(function(object) { console.log(object.favouriteGame); });

//for In
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        console.log(json[key].favouriteAnime);
    }
}

//for Of
let text = "";

for (let x of json[key].id) {
    text += x; 
}
    console.log(text);