import React from 'react'

const ProfileInformation = () => {
  
    return (
    <div className='flex flex-col bg-gray-500 max-w-lg p-8 m-1'>
        <span className='font-bold text-4xl mb-3'>Name</span>
        <p className='mb-3'>Description</p>
        <div className='flex flex-row items-center'>
            <div className='mr-2'>
                <span>0 drops</span>
            </div>
            <div className='mx-2'>
                <span>0 friends</span>
            </div>
            <div className='ml-2'>
                <button className=' border-2 py-1 px-3 border-black rounded-2xl'>ADD FRIEND</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileInformation