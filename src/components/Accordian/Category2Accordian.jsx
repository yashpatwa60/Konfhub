import React, {useState} from 'react'
import Category2Tickets from './Category2Tickets.jsx'

const Category2Accordian = () => {

    const [hide, setHide ] = useState(true)

    const handleHide = () => {
        setHide((prev) => !prev)
    }
  return (
    
<div id="accordion-open" data-accordion="open">
  <h2 id="accordion-open-heading-1">
    <button onClick={handleHide} type="button" className="border-2 border-black-600 flex ml-20 justify-between w-[800px] p-5 font-medium rtl:text-right text-black-700   gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>This is also a category. </span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" className={hide ? "hidden" : "inline"} aria-labelledby="accordion-open-heading-1">
    <div className="p-5 ml-20">
      <p className="mb-2 text-black-700">This is category description. This category collapse by default.
      </p>
        <Category2Tickets />
    </div>
  </div>
</div>

  )
}

export default Category2Accordian
