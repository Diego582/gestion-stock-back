import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {
    let oneCheck = await Check.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "Check found",
      response: oneCheck,
    });
  } catch (error) {
    next(error);
  }
};
