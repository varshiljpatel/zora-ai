import React from 'react'

const Suggestion = (props: {text: string, key: number}) => {
  return (
    <div key={props.key} className='min-h-20 justify-center text-center flex items-center text-[16px] font-mono rounded-2xl border-2 border-black sm:p-8 sm:py-4 p-4 py-2 w-full bg-[#efefef]'>
      <p key={props.key}>{props.text}</p>
    </div>
  )
}

export default Suggestion
