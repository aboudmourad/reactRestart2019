import React from 'react'

const List = (props) => {
    const item = props.listProps.map((value,index)=>{
        return (
          <div key={index}>
          {value.title}<br/>
          {value.url}
          </div>
        )
      })
  return item
}

export default List

