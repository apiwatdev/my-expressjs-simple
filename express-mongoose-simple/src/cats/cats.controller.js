// @ts-check

import * as catsService from "./cats.service.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
export const findCats = async (req, res, next) => {
  let result = await catsService.findCats();
  return res.send(result);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
export const findCatById = async (req, res, next) => {
  const id = req.params?.id;
  let result = await catsService.findCatById(id);
  return res.send(result);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
export const createCat = async (req, res, next) => {
  const name = req.body?.name;
  const age = req.body?.age;
  const breed = req.body?.breed;

  const cat = await catsService.createCat(name, age, breed);
  return res.send(cat);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
export const updateCatById = async (req, res, next) => {
  const dto = req.body;
  const id = req.params?.id;
  const result = await catsService.updateCatById(id,dto);
  return res.send(result);
};
