import { Router } from "express";
import multer from "multer";

import createCategoryController from "../useCases/createCategory";
import importCategoryController from "../useCases/importCategory";
import listCategoriesController from "../useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", async (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  async (request, response) => {
    return importCategoryController().handle(request, response);
  }
);

export { categoriesRoutes };
