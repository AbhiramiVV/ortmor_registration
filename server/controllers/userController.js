import { sentMail } from "../helper/nodeMailer.js";
import Registration from "../models/Registration.js";

export async function userRegister(req, res) {
  try {
    const { fullName, mobile, email, companyName, workshop } = req.body;
    const count = await Registration.find({
      workshop: workshop,
    }).countDocuments();

    if (count < 40) {
      const registrationDetails = {
        fullName,
        mobile,
        email,
        companyName,
        workshop,
        timestamp: new Date().toISOString().split('T'),
      };

      sentMail(email, registrationDetails);

      const newRegistration = await Registration.create(registrationDetails);
      res.status(200).json({
        success: true,
        message: "Registration Successful",
        registration: newRegistration,
      });
    } else {
      res
        .status(200)
        .json({
          success: false,
          message: "Registration Failed Limit exceeded",
        });
    }
  } catch (error) {
    console.error("Registration failed:", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Registration failed Server Error",
        error: error.message,
      });
  }
}
export async function departData(req, res) {
  try {
    const departmentCount = await Registration.aggregate([
      { $group: { _id: "$workshop", count: { $sum: 1 } } },
    ]);

    res.status(200).json({ departmentCount });
  } catch (error) {}
}
