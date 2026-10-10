import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid';

const Logo = () => {
  return (
    <div className="flex flex-row items-center text-white leading:none">
      <SparklesIcon className="w-12 h-12" />
      <p className="text-[2]"	>Litloop</p>    
    </div>
  )
}

export default Logo;
