import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Milk chocolate",
    description: "Delicate and melts in your mouth",
    price: 15.99,
  },
  {
    id: "m2",
    name: "White chocolate",
    description:
      "Amazing sweet taste without cloying, which you fall in love with the first time and forever",
    price: 25.89,
  },
  {
    id: "m3",
    name: "Dark chocolate",
    description:
      "Invigorating and energizing chocolate with elite cocoa from Nicaragua",
    price: 20.59,
  },
  {
    id: "m4",
    name: "Bitter chocolate",
    description:
      "Finest cocoa beans, signature silky smooth texture, unique roasting and grinding process, filigree decoration and elegant packaging.",
    price: 31.19,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
