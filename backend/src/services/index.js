const {
  createModel,
  updateModel,
  deleteModel,
  findSearchByWebAndCategory,
  findAllSearch,
} = require("../models");

const { messageError } = require("../utils");

const createService = async (search) => {
  try {
    const { web, category } = search;
    const isRegistered = await findSearchByWebAndCategory(web, category);

    if (isRegistered) {
      return { registered: true };
    }
    const createResult = await createModel(search);
    return createResult;
  } catch (error) {
    throw Error(messageError(error.message, "register search"));
  }
};

const readAllServices = async () => {
  try {
    const result = await findAllSearch();
    return result;
  } catch (error) {
    throw Error(messageError(error.message, "read searches"));
  }
};

const readPreviousSearchService = async (web, category) => {
  try {
    const result = await findSearchByWebAndCategory(web, category);
    return result;
  } catch (error) {
    throw Error(messageError(error.message, "read searches"));
  }
};

const updateService = async (id) => {
};

const deleteService = async (id) => {
};

module.exports = {
  createService,
  readAllServices,
  updateService,
  deleteService,
  readPreviousSearchService,
};
