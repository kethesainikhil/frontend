import React from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
const Home = () => {

console.log(process.env.backendurl);
  return (
    <div className='flex  flex-col justify-center my-40 items-center text-center'>
      <h1 className='my-10 hover:bg-green-500 border-4 p-10'><Link href="/firstpage">Add data</Link></h1>
      <h1 className='my-7 hover:bg-green-500 border-4 p-10'><Link href="/secondpage">Display Data</Link></h1>
    </div>
  )
}

export default Home