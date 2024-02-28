import Agrupamiento from "../../models/Agrupamiento.js";

export default async (req, res, next) => {
  try {
    let deletedAgrupamiento = await Agrupamiento.findByIdAndDelete(
      req.params.id
    );

    if (deletedAgrupamiento) {
      return res.status(200).json({
        success: true,
        message: "Agrupamiento deleted",
        response: deletedAgrupamiento._id,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not deleted",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
