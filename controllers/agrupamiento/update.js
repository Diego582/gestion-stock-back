import Agrupamiento from "../../models/Agrupamiento.js";

export default async (req, res, next) => {
  try {
    let updatedAgrupamiento = await Agrupamiento.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedAgrupamiento) {
      return res.status(200).json({
        success: true,
        message: "Agrupamiento updated",
        response: updatedAgrupamiento,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not updated",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
