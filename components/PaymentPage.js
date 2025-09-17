"use client"
import React from "react"
import { toast } from "react-toastify"
import { useSession } from "next-auth/react"
const PaymentPage = ({ username, amount }) => {
const {data:session}=useSession()

const userId=session?.user?.id;

// console.log("userId",userId)

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async (amount) => {
    const isLoaded = await loadRazorpayScript()
    if (!isLoaded) {
      toast.error("Razorpay SDK failed to load!")
      return
    }

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, userId })
      })
      const data = await res.json()
      if (!data.id) {
        toast.error("Order creation failed!")
        return
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: username,
        order_id: data.id,
        handler: async (response) => {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({response,userId})
          })
          const verifyData = await verifyRes.json()
          if (verifyData.status === "success") toast.success("Payment Recived")
          else toast.error("Payment verification failed!")
        },
        theme: { color: "#3399cc" }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error("Payment error:", err)
      toast.error("Something went wrong!")
    }
  }

  return (
    <button
      onClick={() => handlePayment(amount)}
      className="bg-blue-600 text-white p-2 cursor-pointer rounded-lg"
    >
      Pay ₹{amount}
    </button>
  )
}

export default PaymentPage
