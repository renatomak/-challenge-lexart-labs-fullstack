import React, { useEffect, useState } from "react";
import { addUserSearch, getProductsByCategoriesAndQuery } from "../request";
import SearchProductsContext from "./context";

export const GELADEIRA = { categoryId: "MLB5726", category: "geladeira" };
export const TV = { categoryId: "MLB1000", category: "TV" };
export const CELULAR = { categoryId: "MLB1051", category: "celular" };

const initialState = { categoryId: "", category: "" };

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(initialState);

  const getListProducts = async (categories, query) => {
    const results = await getProductsByCategoriesAndQuery(categories, query);
    setProducts(results);
  };
  useEffect(() => {
    getListProducts(selectCategory);
  }, []);

  useEffect(() => {
    addUserSearch("MBL", selectCategory.categoryId, products);
  }, [products])

  const contextValues = {
    products,
    setProducts,
    selectCategory,
    setSelectCategory,
    getListProducts,
  };

  return (
    <SearchProductsContext.Provider value={contextValues}>
      {children}
    </SearchProductsContext.Provider>
  );
};

export { Provider, SearchProductsContext as Context };
