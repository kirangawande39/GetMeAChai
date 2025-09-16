import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: String, // Razorpay order_id
      required: true,
      unique:true,
    },
    paymentId: {
      type: String, // Razorpay payment_id
    },
    signature: {
      type: String, // Razorpay signature (for verification)
    },
    amount: {
      type: Number, // in paise
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    method: {
      type: String, // card, upi, netbanking, wallet
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    receipt: {
      type: String, // optional
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);
