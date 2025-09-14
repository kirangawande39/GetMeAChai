
import Razorpay from "razorpay"

export async function POST(req) {
  const { amount, receipt } = await req.json()  // frontend se amount & optional receipt

  const razorpay = new Razorpay({
    key_id:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,       
    key_secret: process.env.RAZORPAY_KEY_SECRET 
  })

  const options = {
    amount: amount * 100,  // paise me convert
    currency: "INR",
    receipt: receipt || "receipt_" + Date.now(),
    payment_capture: 1
  }

  try {
    const order = await razorpay.orders.create(options)
    return new Response(JSON.stringify(order), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
