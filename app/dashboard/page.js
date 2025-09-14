import React from 'react'

const Dashboard = () => {
    return (
        <div className=''>
            <div>
                <h2 className='text-center text-2xl mt-12 font-bold'>
                    Welcome to your Dashboard
                </h2>
            </div>
            <div className='flex justify-center mt-5'>
                <form action="" >
                    <div className='mt-2 gap-y-2'>
                        <label className='mb-2' htmlFor="">Name</label>
                        <br />
                        <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]' required type="text"  />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Email</label>
                        <br />
                       <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw] ' required type="text"  />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Username</label>
                        <br />
                       <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]' required type="text"  />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Profile Picture</label>
                        <br />
                       <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]' type="text"  />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Cover Picture</label>
                        <br />
                        <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]' type="text"  />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Razorpay Credentails</label>
                        <br />
                      <input className='bg-gray-600 px-2 rounded-sm w-[80vw] md:w-[40vw]' required type="text"  />
                    </div>
                    <div className='mt-4'>
                     <button className='bg-blue-900 px-2 rounded-sm w-[80vw] md:w-[40vw] cursor-pointer'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dashboard
