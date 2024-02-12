import Customer from "../../models/Customer.js";

export default async (req, res, next) => {
  try {
    let newCustomer = await Customer.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Customer created",
      response: newCustomer._id,
    });
  } catch (error) {
    next(error);
  }
};
