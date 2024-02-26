import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp(req.query.codigoBarras, "i");
    }
    const allProductBase = await ProductBase.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("");

    return res.status(200).json({
      success: true,
      message: "ProductBases found",
      response: allProductBase,
    });
  } catch (error) {
    next(error);
  }
};
