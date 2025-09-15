"use client"
import React, { useState } from "react"
import Image from "next/image"
import PaymentPage from "@/components/PaymentPage"

const Username = ({ params }) => {
  const [supporters, setSupporters] = useState(false)
  const { username } = params ;

  return (
    <div>
      <div className='cover w-full'>
        <Image
          className='bg-cover w-full h-[40vh]'
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=q31uRnt35F_Pdc60K_I3zrUrxG_xPh4kfmL4R1h0Nlk%3D&token-time=1759536000"
          alt="Cover"
          width={1200}
          height={480}
          unoptimized
        />
        <div className='flex justify-center -mt-10'>
          <Image
            className='h-20 w-20 bg-black text-black rounded-full p-3'
            src="/user-profile.gif"
            alt="Profile"
            width={80}
            height={80}
          />
        </div>
      </div>

      <div className='text-center mt-5 gap-y-3'>
        <h2 className='font-bold'>@{username}</h2>
        <h3 className='text-gray-300'>
          let&apos;s help {username} to get a cup of tea
        </h3>
      </div>

      <div className='text-center text-gray-600 gap-x-2'>
        <span>0 supporters</span>
        <span> ₹0 raised</span>
      </div>

      <div className='flex flex-col lg:flex-row justify-center mt-10 gap-8 px-4'>
        <div className="supporters bg-slate-950 opacity-75 rounded-lg h-[60vh] w-full lg:w-[40vw] p-8">
          <h2 className='font-bold'>Supporters</h2>
          <div className='mt-5 text-center'>
            {supporters ? <div>1. Kiran Gawande</div> : <div>No supporters yet ☹</div>}
          </div>
        </div>

        <div className="make-payment bg-slate-950 opacity-75 rounded-lg h-[60vh] w-full lg:w-[40vw] p-8">
          <h2 className='font-bold'>Make a Payment</h2>

          <form className='gap-5 mt-5'>
            <input
              type="text"
              name='name'
              placeholder='Name'
              className='bg-gray-800 rounded-lg w-full p-1.5 mt-5'
              required
            />
            <input
              type="text"
              name='message'
              placeholder='Message'
              className='bg-gray-800 rounded-lg w-full p-1.5 mt-5'
              required
            />
            <input
              type="number"
              name='amount'
              placeholder='Amount'
              className='bg-gray-800 rounded-lg w-full p-1.5 mt-5'
              required
            />
            <button
              className='w-full mt-5 cursor-pointer font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg text-sm px-5 py-2.5'
            >
              Support
            </button>
          </form>

          <div className='mt-5 flex flex-wrap gap-2 cursor-pointer'>
            <PaymentPage username={username} amount={1} />
            <PaymentPage username={username} amount={20} />
            <PaymentPage username={username} amount={30} />
            <PaymentPage username={username} amount={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Username
