import crypto from "crypto"
import Payment from "@/app/models/Payment";
export async function POST(req) {
  const { response, userId } = await req.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

  // const p_details = await Payment.findOne({ orderId: razorpay_order_id })
  // console.log("P_Details", p_details)


  // console.log("call verify route ::",razorpay_signature)
  // console.log("userId form verify payment:", userId)
  const secret = process.env.RAZORPAY_KEY_SECRET

  // Step 1: Create expected signature
  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex")

  // Step 2: Compare signatures
  if (generated_signature === razorpay_signature) {

    await Payment.findOneAndUpdate(
      { orderId: razorpay_order_id },   // is order ko find karo
      {
        $set: {
          status: "success",
          paymentId: razorpay_payment_id,
        },
      },
      { new: true }   // updated document return karega
    );

    return new Response(JSON.stringify({ status: "success" }), { status: 200 })
  } else {
    return new Response(JSON.stringify({ status: "failed" }), { status: 400 })
  }
}
