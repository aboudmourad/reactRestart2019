import React from 'react'

const inputComp = (props) => {
    const { clickMe, changeHandeler, state:{name, family} } = props
    console.log(props)
  return (
    <form onSubmit={clickMe}>
        <input name="name" value={name}
        onChange={changeHandeler}/>
        <input name="family" value={family} 
        onChange={changeHandeler}/>
            <button type="submit">click me</button>
  </form>
  )
}

export default inputComp
