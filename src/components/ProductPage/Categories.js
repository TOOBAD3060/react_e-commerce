import React from 'react'

const Categories = ({categories,filterItems,showSort,showHideSort}) => {
  return (
    <div  className= { `btn-container ${showSort && 'active'}`   }>
        {
            categories.map((category,index)=>{
                return <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => {
                  filterItems(category)
                  showHideSort()
                }}
              >
                {category}
              </button>
            })
        }
        
    </div>
  )
}

export default Categories