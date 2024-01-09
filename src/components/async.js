import axios from "axios";

export const getAnimals = async (dispatch) => {
  const res = await axios.get("/animals").catch((err) => {
    console.log(err);
    return 
  });

  dispatch({type: "UPDATE_ANIMALS", payload: res.data});
}