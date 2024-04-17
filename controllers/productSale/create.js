import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {

    let newProductSale = await ProductSale.create(req.body)


    return res.status(201).json({
      success: true,
      message: "ProductSale created",
      response: newProductSale,
    });
  } catch (error) {

    return next(error);
  }
};
