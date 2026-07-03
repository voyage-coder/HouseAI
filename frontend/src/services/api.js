import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
});



export async function getModels() {
  const response = await API.get("/models");
  return response.data.models;
}


export async function predictPrice(model, features) {
  const response = await API.post("/predict", {
    model,
    features,
  });

  return response.data;
}



export async function compareModels(features) {
  const response = await API.post("/compare", {
    features,
  });

  return response.data;
}


export async function getRecommendation() {
  const response = await API.get("/recommend");

  return response.data;
}

export default API;