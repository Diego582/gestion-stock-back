import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    const allProduct = await Product.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("");

    return res.status(200).json({
      success: true,
      message: "Products found",
      response: allProduct,
    });
  } catch (error) {
    next(error);
  }
};
