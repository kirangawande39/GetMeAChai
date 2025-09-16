import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Dashboard - GetMeAChai",
  description: "Access your Dashboard on GetMeAChai to manage your profile, track support, and see insights.",
};

export default async function Dashboard() {
  // Session check
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // agar login nahi hai to home pe bhej do
  }

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl mt-12 font-bold">
          Welcome to your Dashboard
        </h2>
      </div>
      <div className="flex justify-center mt-5">
        <form action="">
          <div className="mt-2 gap-y-2">
            <label className="mb-2" htmlFor="">Name</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              required
              type="text"
              defaultValue={session.user.name} // logged-in user ka naam
            />
          </div>
          <div className="mt-3">
            <label className="mb-2" htmlFor="">Email</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              required
              type="text"
              defaultValue={session.user.email}
            />
          </div>
          <div className="mt-3">
            <label className="mb-2" htmlFor="">Username</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              required
              type="text"
            />
          </div>
          <div className="mt-3">
            <label className="mb-2" htmlFor="">Profile Picture</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              type="text"
               defaultValue={session.user.image}
            />
          </div>
          <div className="mt-3">
            <label className="mb-2" htmlFor="">Cover Picture</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              type="text"
            />
          </div>
          <div className="mt-3">
            <label className="mb-2" htmlFor="">Razorpay Credentials</label>
            <br />
            <input
              className="bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]"
              required
              type="text"
            />
          </div>
          <div className="mt-4">
            <button className="bg-blue-900 px-2 rounded-sm w-[80vw] md:w-[40vw] cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
