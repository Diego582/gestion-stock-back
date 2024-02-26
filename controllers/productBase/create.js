import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let newProduct = await ProductBase.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Product created",
      response: newProduct,
    });
  } catch (error) {
    return next(error);
  }
};
