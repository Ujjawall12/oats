import slugify from "slugify";
import { catchAsyncError } from "../../utils/catchAsyncError.js";
import { AppError } from "../../utils/AppError.js";
import { deleteOne } from "../../handlers/factor.js";
import { productModel } from "./../../../Database/models/product.model.js";
import { ApiFeatures } from "../../utils/ApiFeatures.js";

const addProduct = catchAsyncError(async (req, res, next) => {
  // Handle file uploads if present
  if (req.files && req.files.imgCover) {
    req.body.imgCover = req.files.imgCover[0].filename;
  }
  if (req.files && req.files.images) {
    req.body.images = req.files.images.map((ele) => ele.filename);
  }

  // Support both description and descripton (old typo)
  if (req.body.descripton && !req.body.description) {
    req.body.description = req.body.descripton;
  }

  req.body.slug = slugify(req.body.title);
  const addProduct = new productModel(req.body);
  await addProduct.save();

  res.status(201).json({ message: "success", addProduct });
});

const getAllProducts = catchAsyncError(async (req, res, next) => {
  let apiFeature = new ApiFeatures(productModel.find(), req.query)
    .pagination()
    .fields()
    .filteration()
    .search()
    .sort();
  const PAGE_NUMBER = apiFeature.queryString.page * 1 || 1;
  const getAllProducts = await apiFeature.mongooseQuery;

  res
    .status(200)
    .json({ page: PAGE_NUMBER, message: "success", products: getAllProducts, total: getAllProducts.length });
});
const getSpecificProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const getSpecificProduct = await productModel.findById(id);
  if (!getSpecificProduct) {
    return next(new AppError("Product was not found", 404));
  }
  res.status(200).json({ message: "success", product: getSpecificProduct });
});

const updateProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  const updateProduct = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  updateProduct && res.status(201).json({ message: "success", updateProduct });

  !updateProduct && next(new AppError("Product was not found", 404));
});

const deleteProduct = deleteOne(productModel, "Product");
export {
  addProduct,
  getAllProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
