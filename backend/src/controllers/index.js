const rescue = require("express-rescue");
const {
  createService,
  readByIdService,
  updateService,
  deleteService,
  readAllServices,
  readAllCustomersService,
  readPreviousSearchService,
} = require("../services");
const {
  STATUS_400_BAD_REQUEST,
  STATUS_201_CREATED,
  STATUS_409_CONFLICT,
  STATUS_422_UNPROCESSABLE_ENTITY,
  STATUS_200_OK,
  STATUS_404_NOT_FOUND,
} = require("../utils");

const create = rescue(async (req, res) => {
  try {
    const { body: search } = req;

    const createResult = await createService(search);
    
    if (createResult?.registered) {
      return res.status(STATUS_400_BAD_REQUEST).json({ message: "Search already performed before"});
    }
      
      console.log(createResult)

    return res.status(STATUS_201_CREATED).json(createResult);
  } catch (error) {
    console.error(error.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: "Invalid fields" });
  }
});

const read = rescue(async (_req, res) => {
  try {
    const result = await readAllServices();

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res
      .status(STATUS_404_NOT_FOUND)
      .json({ message: "Invalid fields" });
  }
});

const readPreviousSearch = rescue(async (req, res) => {
  try {
    const { web, category } = req.params;

    const result = await readPreviousSearchService(web, category);

    if (!result) {
      throw new Error();
    }

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(STATUS_404_NOT_FOUND).json({ message: "Invalid fields", results: false });
  }
});

const update = rescue(async (req, res) => {
});

const deleteUser = rescue(async (req, res) => {
});

module.exports = {
  create,
  read,
  update,
  deleteUser,
  readPreviousSearch,
};
