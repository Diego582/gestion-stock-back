import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {

    if (req.isValidProduct) {
      return res.status(409).json({
        success: false,
        message: "duplicate product - " + req.body.codigoBarras,
        response: null,
      });
    }



    let newProduct = await Product.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Client created",
      response: newProduct,
    });
  } catch (error) {
    return next(error);
  }
};
