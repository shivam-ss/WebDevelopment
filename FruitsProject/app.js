const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",  { useNewUrlParser: true,  useUnifiedTopology: true } )

const fruitschema= new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});  // structure of collection
// Fruit has to follow thae fruitschema rule
const Fruit=mongoose.model("Fruit", fruitschema); // means Fruit schema will follow above structure, uses low dashing to pluralize Fruit collection to Fruits

const fruit=new Fruit({       //inserting new record on a schema whose structure follows the Fruit const aboce
    name: "Apple",
    rating: 10,
    review: "Very good"
});

fruit.save().then(()=>console.log("Saved apple"));


const personschema=new mongoose.Schema({
    name: String,
    age: Number
});

const Person=mongoose.model("Person",personschema);

const person= new Person({
    name: "Shivam",
    age: 22
})

person.save().then(()=>console.log("saved shivam"))
// create just many objects and call fruit.insertMany([a,b,c])

//like: 
/* fruits.insertMany([apple,orange,banana],function(err){
    console.log(err);
})

*/

// to show records:
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        console.log(fruits);
    }

    
}
);


//using for each loop to get only name of fruits
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }

    
}
);
