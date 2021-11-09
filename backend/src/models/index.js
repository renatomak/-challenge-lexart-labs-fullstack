const { ObjectId } = require("mongodb");
const { connection } = require("../config/conn");

const COLLECTION_NAME = "searches";

const createModel = async (search) =>
  connection().then(async (db) => {
    await db.collection(COLLECTION_NAME).insertOne(search);
    return search;
  });

const findSearchByWebAndCategory = async (web, category) => {
  const result = await connection().then((db) =>
    db.collection(COLLECTION_NAME).findOne({ web, category })
  );
  console.log("result em motel: ", result);
  return result;
};

const findAllSearch = async () => {
  
  const result = connection().then(db =>
    db.collection(COLLECTION_NAME).find().toArray())
    console.log("result em motel: ", result)
  return result;
};

const updateModel = async (customer) => {
};

const deleteModel = async (id) => {
};

module.exports = {
  createModel,
  findSearchByWebAndCategory,
  updateModel,
  deleteModel,
  findAllSearch,
};
