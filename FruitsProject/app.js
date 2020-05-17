const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",  { useNewUrlParser: true,  useUnifiedTopology: true } )

const fruitschema= new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});  // structure of collection
// Fruit has to follow thae fruitschema rule
const Fruit=mongoose.model("Fruit", fruitschema);

const fruit=new Fruit({
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