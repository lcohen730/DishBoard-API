const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    // rid stands for recipe id, similar to uid in the user model
    rid: { type: String, required: true, unique: true },

    recipeName: { type: String, required: true },

    courseType: {
      type: String,
      required: true,
      enum: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Appetizer",
        "Side-Dish",
      ],
    },

    cuisineType: {
      type: String,
      required: true,
      enum: ["American", "Mexican", "Italian", "Asian", "Other"],
    },

    difficultyLevel: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },

    estimatedTime: { type: Number, required: true }, // In minutes

    servingSize: { type: Number, required: true },

    ingredientsList: [
      {
        name: { type: String, required: true }, // Ingredient name
        quantity: { type: Number, required: true }, // Amount
        unit: { type: String, required: true }, // unit (cup, tbps, tsp, grams, etc)
      },
    ],

    instructions: [{ type: String, required: true }], // Step by step instruction

    image: { type: String, required: true },

    tags: [{ type: String, default: [] }], // vegetarian/gluten free

    createdBy: { type: String, ref: "User", required: true }, // Link to user model
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
