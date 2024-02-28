import Agrupamiento from "../../models/Agrupamiento.js";




export default async (req, res, next) => {
  try {
    let queries = {};
    /* if (req.query.lastName) {
      queries.lastName = new RegExp(req.query.lastName, "i");
    } */
    const allAgrupamiento = await Agrupamiento.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("");

    return res.status(200).json({
      success: true,
      message: "Agrupamientos found",
      response: allAgrupamiento,
    });
  } catch (error) {
    next(error);
  }
};
