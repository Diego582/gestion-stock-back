import Agrupamiento from "../../models/Agrupamiento.js";

export default async (req, res, next) => {
  try {
    let newAgrupamiento = await Agrupamiento.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Client created",
      response: newAgrupamiento,
    });
  } catch (error) {
    return next(error);
  }
};
