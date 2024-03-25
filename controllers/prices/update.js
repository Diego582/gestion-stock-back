import Price from "../../models/Price.js";

export default async (req, res, next) => {
  try {
    let updatePrice = await Price.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatePrice) {
      return res.status(200).json({
        success: true,
        message: "Price updated",
        response: updatePrice,
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
