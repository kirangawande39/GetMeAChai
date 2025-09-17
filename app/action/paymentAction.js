"use server"
import Payment from "@/app/models/Payment"
import { connectDB } from "@/app/lib/DB"


export async function createPayment(formData) {
    await connectDB();

    const name=formData.get("name");
    const message=formData.get("message");
    const amount=formData.get("amount");

    console.log("name::",name)
    console.log("message::",message)
    console.log("amount::",amount)

    // const payment = new Payment({
    //     name,
    //     message,
    //     amount,
    //     status: "success",
    // });


    // await payment.save();

    return {success:"true", message:"Payment Done!"}


}