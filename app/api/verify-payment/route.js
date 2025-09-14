import crypto from "crypto"

export async function POST(req) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json()

  // console.log("call verify route ::",razorpay_signature)
  // Secret key server pe hi rakhi hai
  const secret = process.env.RAZORPAY_KEY_SECRET

  // Step 1: Create expected signature
  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex")

  // Step 2: Compare signatures
  if (generated_signature === razorpay_signature) {
    return new Response(JSON.stringify({ status: "success" }), { status: 200 })
  } else {
    return new Response(JSON.stringify({ status: "failed" }), { status: 400 })
  }
}
