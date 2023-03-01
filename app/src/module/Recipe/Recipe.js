import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setModal } from "../actions";
import TextField from "@mui/material/TextField";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Recipe.css";
import { Button } from "@mui/material";
import ModalDisplay from "./ModalDisplay";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "20px",
  color: theme.palette.text.secondary,
}));

function searchFor(term) {
  return function (x) {
    return (
      x.strCategory.toLowerCase().includes(term.toLowerCase()) ||
      x.strCategoryDescription.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}

const Recipe = () => {
  const [term, setTerm] = useState("");
  const modal = useSelector((state) => state.modal);
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const OpenModal = () => {
    dispatch(setModal(true));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        id="recipe"
        type="text"
        label="Search"
        placeholder="Searcg Recipe..."
        style={{ marginTop: "20px" }}
        onChange={handleChange}
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {recipes.filter(searchFor(term)).map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.idCategory}>
            <Item>
              <img src={item.strCategoryThumb} className="recipeImage" />
              <p>{item.strCategory}</p>
              <p>{item.strCategoryDescription.slice(0, 10)}</p>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Button onClick={OpenModal}>Submit</Button>
      <ModalDisplay modal={modal} />
    </div>
  );
};

export default Recipe;

//spread operator
// var obj = {
//   A: 10,
//   B: 20
// }

//shallow copy
// var objTwo = obj;
// objTwo.A = 40;
// console.log(obj, objTwo);

// obj = {
// A: 10,
// B: 20
// }

// objTwo= {
// A: 40,
// B: 20
// }

//using spread opeartor(...) (object & arrays)
//deep copy
// let objOne = {
//   A: 20,
//   B: 60
// }

// let objtwo = {...objOne, Z: 10};
// objtwo.A = 30;
// console.log(objOne, objtwo);

//for arrays
// let arrOne  = [90, 20, 26, 25];
// let arrTwo = [96, 290, 100, 29];
// let third = [...arrOne, ...arrTwo, 20, 39]
// console.log(third);
