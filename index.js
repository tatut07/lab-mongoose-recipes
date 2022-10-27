const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose;
async function connectToDataBase() {
  try {
    await mongoose.connect(MONGODB_URI);

    // Iteration 2//
    // const recipe1 = {
    //   title: "Mac Donalds Fries",
    //   level: "Easy Peasy",
    //   ingredients: ["Potatoes", "Oil", "Salt"],
    //   cuisine: "Classical French",
    //   dishType: "other",
    //   image: "https://images.media-allrecipes.com/images/75131.jpg",
    //   duration: 20,
    //   creator: "Chef Ronald",
    // };
    // const newRecipe = Recipe.create(recipe1);
    // console.log(recipe1.title);

    //Iteration 3//
    // const newRecipes = Recipe.insertMany(data);
    // console.log(newRecipes.title);

    //Iteration4//
    await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    );
    // console.log("Success!");

    await Recipe.deleteOne({ title: "Carrot Cake" });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}
connectToDataBase();

mongoose
  .disconnect()
  .then(() => {
    console.log("You are disconnected");
  })
  .catch((err) => {
    console.log(err);
  });
