import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import PaymentPage from "@/components/PaymentPage";
import { connectDB } from "@/app/lib/DB";
import Payment from "@/app/models/Payment";

export default async function Username({ params }) {
  const session = await getServerSession(authOptions);

  // agar login nahi hai to redirect
  if (!session) {
    redirect("/");
  }
  await connectDB()

  const supporters = await Payment.find({ status: "success" })
    .populate("user", "name")
    .sort({ createdAt: -1 });

  console.log("paymentDetails:", supporters);

  const total_amount=supporters.reduce((acc,curr)=>acc.amount + curr.amount);

  console.log("Total_Amount::",total_amount)

  

  const { username } = params;

  return (
    <div>
      <div className="cover w-full">
        <Image
          className="bg-cover w-full h-[40vh]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=q31uRnt35F_Pdc60K_I3zrUrxG_xPh4kfmL4R1h0Nlk%3D&token-time=1759536000"
          alt="Cover"
          width={1200}
          height={480}
          unoptimized
        />
        <div className="flex justify-center -mt-10">
          <Image
            className="h-20 w-20 bg-black text-black rounded-full p-3"
            src="/user-profile.gif"
            alt="Profile"
            width={80}
            height={80}
          />
        </div>
      </div>

      <div className="text-center mt-5 gap-y-3">
        <h2 className="font-bold">@{username}</h2>
        <h3 className="text-gray-300">
          let&apos;s help {username} to get a cup of tea
        </h3>
      </div>

      <div className="text-center text-gray-600 gap-x-2">
        <span><b className="text-green-400">{supporters.length}</b> supporters</span>
        <span> <b className="text-green-400">₹{total_amount}</b> raised</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-10 gap-8 px-4">
       
          <div className="supporters opacity-75 bg-slate-950  rounded-lg h-[60vh] w-full lg:w-[40vw] p-6 flex flex-col">
            <h2 className="font-bold text-xl mb-4 text-center border-b border-gray-700 pb-2">
              Supporters
            </h2>

            <div className="mt-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {supporters.length > 0 ? (
                supporters.map((s, index) => (
                  <div
                    key={index}
                    className="mb-3 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
                  >
                    <span className="font-semibold">{s.user.name}</span> supported{" "}
                    <span className="text-green-400 font-bold">₹{s.amount}</span> on{" "}
                    <span className="text-gray-400">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center mt-10">No supporters yet ☹</div>
              )}
            </div>
          </div>



          <div className="make-payment bg-slate-950 opacity-75 rounded-lg h-auto w-full lg:w-[40vw] p-8">
            <h2 className="font-bold">Make a Payment</h2>

            <form className="gap-5 mt-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-gray-800 rounded-lg w-full p-1.5 mt-5"
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="bg-gray-800 rounded-lg w-full p-1.5 mt-5"
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                className="bg-gray-800 rounded-lg w-full p-1.5 mt-5"
                required
              />
              <button className="w-full mt-5 cursor-pointer font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg text-sm px-5 py-2.5">
                Support
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2 cursor-pointer">
              <PaymentPage username={username} amount={1} />
              <PaymentPage username={username} amount={20} />
              <PaymentPage username={username} amount={30} />
              <PaymentPage username={username} amount={40} />
            </div>
          </div>
        </div>
      </div>
      );
}
