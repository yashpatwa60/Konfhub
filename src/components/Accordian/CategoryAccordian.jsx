import React, {useState} from 'react'
import CategoryTickets from './CategoryTickets'

const CategoryAccordian = () => {

    const [hide, setHide ] = useState(true)

    const handleHide = () => {
        setHide((prev) => !prev)
    }
  return (
    
<div id="accordion-open" data-accordion="open">
  <h2 id="accordion-open-heading-1">
    <button onClick={handleHide} type="button" class="flex ml-20 border-2 border-black-600 border-b-1 justify-between w-[800px] p-5 font-medium rtl:text-right text-black-700   gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>This is also a category. But with a little longer name. Also note, this category expanded by default. </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" class={hide ? "hidden" : "inline"} aria-labelledby="accordion-open-heading-1">
    <div class="p-5 ml-20">
      <p class="mb-2 text-black-700 text-left">This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer</p>
        <CategoryTickets />
    </div>
  </div>
</div>

  )
}

export default CategoryAccordian
