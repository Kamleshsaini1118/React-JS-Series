import React, { useEffect, useState } from 'react'
import { useLoaderData  } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState( [] )
    // useEffect( () => {
    //     fetch('http://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className=' flex flex-col justify-center  items-center text-center  m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className="w-3/4 max-w-xs mt-4 border border-r-2"  src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubinfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/kamleshsaini1118')
    return response.json()
}
