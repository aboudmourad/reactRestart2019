import React from "react";

const List = (props)=>{
    const { list } = props;
    const item = list && list.map((value, index)=>{
        return (
            <div key={index}>
            <h5>{value.title}</h5><br/>
            <h5>{value.description}</h5><br/>
            <img src={value.urlToImage} width={300} height={300} alt="logo"/>
            </div>
        )
    })
    
    return item
}

export default List