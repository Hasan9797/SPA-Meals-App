import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import Loader from "../Companents/Loader";
import MealList from "../Companents/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return <div>{!meals.length ? <Loader /> : <MealList meals={meals} />}</div>;
}

export default Category;
