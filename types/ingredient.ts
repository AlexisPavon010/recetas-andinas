interface Ingredient {
  id: number;
  name: string;
  rating: number;
  isCooking: boolean;
  ingredients: string[];
  preparation: string;
}

export default Ingredient;