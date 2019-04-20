import React from 'react'

const Input = (props) => {
    const { name, date, sendForm, changeHendler } = props
    const inputValue = (
        (
            <center>
                <h1>Search News API</h1>
                <form onSubmit={sendForm}>
                    <label>Search Me:</label><br/>
                    <input name="name" type="text" 
                        value={name} 
                            onChange={changeHendler}
                                placeholder="Type Here"/>
                    <input type="date" 
                        name="date"
                                value={date} 
                                    onChange={changeHendler} />
                    <br/>
                    <button type="submit">Search</button>
                </form>
            </center>
          )
    )
    
  return inputValue
}

export default Input
