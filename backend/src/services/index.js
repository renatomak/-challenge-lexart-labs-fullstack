const {
  createModel,
  updateModel,
  deleteModel,
  findSearchByWebAndCategory,
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

const readByWebAndCategory = async (web, category) => {


};

const updateService = async (id) => {
};

const deleteService = async (id) => {
};

module.exports = {
  createService,
  readByWebAndCategory,
  updateService,
  deleteService,
};
