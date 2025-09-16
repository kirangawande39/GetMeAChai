
import Razorpay from "razorpay"
import { connectDB } from "@/app/lib/DB"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"

export async function POST(req) {

  const { amount, userId, receipt } = await req.json()  // frontend se amount & optional receipt


  // console.log("UserId:", userId)


  // const user = await User.findById(userId)

  // console.log("User:", user)

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  })

  const options = {
    amount: amount * 100,  // paise me convert
    currency: "INR",
    receipt: receipt || "receipt_" + Date.now(),
    payment_capture: 1
  }

  try {
    await connectDB();

    const order = await razorpay.orders.create(options)

    await Payment.create({
      user:userId,
      orderId:order.id,
      amount:amount,
      currency:"INR",
      receipt: options.receipt,
      status: "pending",
    })


    return new Response(JSON.stringify(order), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
