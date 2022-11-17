import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// displaying the meals
export default function AvailableMeals() {
  // using useState hook to assign the meals ecery time the component is re-evaluated
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // getting data from the "backend"
  useEffect(() => {
    // using an async function to fetch data
    const fetchMeals = async () => {
      setIsLoading(true);
      // getting the response
      const response = await fetch(
        "https://react-http-7a4bf-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      // added a custom error if the fetch didnt succeded
      if (!response.ok) {
        throw new Error("Something went wronk!!");
      }

      // transforming the response into data
      const responseData = await response.json();

      // using a helper array to assign all the fetched elements with the proprietes
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    // dealing with the error
    // received a error from a function that returns a promise
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // added a loaded state in order to display a certain message until the data is loaded
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    // passing the props down to the MealItem component and displaying it for every meal in the list
    <MealItem
      key={meal.id}
      id={meal.id}
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
}
