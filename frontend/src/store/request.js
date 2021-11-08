const headers = { "Content-type": "application/json" };

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
  const categoryId = selectCategory?.categoryId;
  const category = selectCategory?.category;

  const endpoint = generateEndpoint(category, categoryId, query);

  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      const newData = results.map(
        ({ permalink, price, thumbnail, title, id }) => {
          const product = { permalink, price, thumbnail, title, id };
          return product;
        }
      );
      return newData;
    });
};

const getProductsInPreviousSearch = (typeSearch, category) => {
  const endpoint = `http://localhost:3001/searches/${typeSearch}/${category}`;

   return fetch(endpoint)
     .then((response) => response.json())
     .then((data) => data);

}

const addUserSearch = (web, category, results) => {
  const endpoint = "http://localhost:3001/searches/";
  return fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ web, category, results }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export {
  getProductsByCategoriesAndQuery,
  addUserSearch,
  getProductsInPreviousSearch,
};
