import React, { Component } from 'react'
import axios from 'axios'
import List from "./List";
import Input from "./Input";
export default class NewsAPI extends Component {
    constructor(props){
        super(props);
        this.state={
          name:"",
          list :[],
          date:""
              }
      }

      changeHendler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
      }
      
      sendForm=(event)=>{
        event.preventDefault();
        const key ="e08e5d6b0c6940a79ec03ca8c69aa96c"
        const { name, date } = this.state
        axios
        .get(`https://newsapi.org/v2/everything?q=${name}&from=${date}&sortBy=publishedAt&apiKey=${key}`)
            .then( (response)=> {
                const data = response.data.articles
               this.setState({list : data})
            })
            .catch( (error)=> {
                console.log(error);
  });
      }

  render() {
      const comp = (
        <div>
            <Input name={this.state.name} date={this.state.date} changeHendler={this.changeHendler} 
            sendForm={this.sendForm}/>
            
            <List list={this.state.list} />
        </div>
      )
    return comp
  }
}


