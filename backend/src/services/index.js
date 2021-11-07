const {
  createModel,
  updateModel,
  deleteModel,
} = require("../models");

const { messageError } = require("../utils");

const createService = async (search) => {
  try {
    const createResult = await createModel(search);
    return createResult;
  } catch (error) {
    throw Error(messageError(error.message, "register search"));
  }
};

const readByIdService = async (id) => {};

const updateService = async (id) => {
};

const deleteService = async (id) => {
};

module.exports = {
  createService,
  readByIdService,
  updateService,
  deleteService,
};
