// @ts-check
import mongoose from "mongoose";
import CatSchema, { ICat } from "../schemas/cat.schema.js";

class CatRepository {
  constructor(name, schema) {
    this.entityModel = mongoose.model(name, schema);
  }

  /**
   *
   * @param {import("mongoose").FilterQuery<ICat>}  filterQuery
   * @param {number} limit
   * @param {number} offset
   * @param {import("mongoose").FilterQuery<ICat>} sort
   * @returns
   */
  async find(filterQuery, limit = 100, offset = 0, sort = {}) {
    return this.entityModel
      .find(filterQuery)
      .select({ __v: 0 })
      .limit(limit)
      .skip(offset)
      .sort(sort);
  }

  async findOne(filterQuery) {
    return this.entityModel.findOne(filterQuery).select({ __v: 0 });
  }

  async findById(id) {
    return this.entityModel.findById(id).select({ __v: 0 });
  }

  async create(createEntityData) {
    const entity = new this.entityModel(createEntityData);
    const newRecord = await entity.save();
    delete newRecord.__v;
    return newRecord;
  }

  /**
   *
   * @param {import("mongoose").FilterQuery<ICat>} filterQuery
   * @param {import("mongoose").UpdateQuery<unknown>} updateEntityData
   */
  async findOneAndUpdate(filterQuery, updateEntityData) {
    return this.entityModel
      .findOneAndUpdate(filterQuery, updateEntityData, {
        new: true,
      })
      .select({
        __v: 0,
      });
  }
}

export default new CatRepository("cats", CatSchema);
