import React from 'react'

const Contact = () => {
  return (
    <div className='ml-6'>
      <h1 className='text-2xl font-[700] '>Contact Me</h1>
      <hr className='h-[4px] mt-1 bg-[#eeb140] w-[40px]'/>
      <div className='flex justify-center  w-full gap-x-8'>
       <div><h1 className='text-5xl pt-[130px] pr-14 font-[700]'>Get in touch</h1></div>
        <form className=''>
            <div className='w-[50%]'>
              <h3 className='pt-5 pb-2 text-lg font-[500]'>Full Name</h3>
              <input type="text" className='text-[#eeb140] h-10 focus:border-[#eeb140] border-zinc-600 py-2 outline-none rounded-lg bg-transparent border-2 pl-2 w-[300px]'/><br />
              <h3 className='pt-5 pb-2 text-lg font-[500]'>Email</h3>
              <input type='email' className='h-10 text-[#eeb140] focus:border-[#eeb140] py-2 rounded-lg bg-transparent outline-none border-zinc-600 border-2 pl-2 w-[300px]'/><br />
              <h3 className='pt-5 pb-2 text-lg font-[500]'>Message</h3>
              <textarea type="text" className=' h-[150px] text-[#eeb140] focus:border-[#eeb140] p-2 rounded-lg outline-none bg-transparent border-zinc-600 border-2 pl-2 w-[300px]'/>
            </div>
        </form>
      </div>

    </div>
  )
}

export default Contact
