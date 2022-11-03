// @ts-check

import CatRepository from "./cats.repository.js";

export const findCats = async () => {
  const cats = await CatRepository.find({});
  return cats;
};

export const findCatById = async (id) => {
  const cat = await CatRepository.findById(id);
  return cat;
};

export const createCat = async (name, age, breed) => {
  const cat = await CatRepository.create({ name, age, breed });
  return cat;
};

export const updateCatById = async (id, dto) => {
  return await CatRepository.findOneAndUpdate({ _id: id }, dto);
};
