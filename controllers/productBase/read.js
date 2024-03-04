import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp(req.query.codigoBarras, "i");
    }
    const allProductBase = await ProductBase.findOne({
      codigoBarras: req.query.codigoBarras,
    }).select("");

    return res.status(200).json({
      success: true,
      message: "ProductBases found",
      response: allProductBase,
    });
  } catch (error) {
    next(error);
  }
};
