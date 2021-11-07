const { ObjectId } = require("mongodb");
const { connection } = require("../config/conn");

const COLLECTION_NAME = "userSearch";

const createModel = async (search) =>
  connection().then(async (db) => {
    await db.collection(COLLECTION_NAME).insertOne(search);
    return search;
  });

const findSearchById = async (id) => {
};

const updateModel = async (customer) => {
};

const deleteModel = async (id) => {
};

module.exports = {
  createModel,
  findSearchById,
  updateModel,
  deleteModel,
};
