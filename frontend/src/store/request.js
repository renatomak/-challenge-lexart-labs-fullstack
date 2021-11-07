const generateEndpoint = (category, categoryId, query) => {
  let endpoint = "https://api.mercadolibre.com/sites/MLB/search?category=";

  if (!category && !categoryId && !query) {
    return "";
  }

  if (query) {
    endpoint += `${categoryId}&q=${query}`;
    return endpoint;
  }
  endpoint += `${categoryId}&q=${category}`;
  return endpoint;
};

const getProductsByCategoriesAndQuery = (selectCategory, query) => {
  console.log("TESTE OBJ: ", selectCategory);

  const categoryId = selectCategory?.categoryId;
  const category = selectCategory?.category;

  const endpoint = generateEndpoint(category, categoryId, query);

  console.log("ENDPOINT: ", endpoint);

  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      return results;
    });
};

export { getProductsByCategoriesAndQuery };
