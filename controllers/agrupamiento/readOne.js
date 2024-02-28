import Agrupamiento from "../../models/Agrupamiento.js";



export default async (req, res, next) => {
  try {
    let oneAgrupamiento = await Agrupamiento.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "Agrupamiento found",
      response: oneAgrupamiento,
    });
  } catch (error) {
    next(error);
  }
};
