// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios'
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       email:"",
//       password:"",
//       name:"",
//       list :[]
//           }
//   }

//   // componentDidMount =()=>{
//   //   axios.get(`https://www.reddit.com/search.json?q=${this.state.name}`)
//   // .then( (response)=> {
//   //   const data = response.data.data
//   //   this.setState({list : data})
//   // })
//   // .catch( (error)=> {
//   //   console.log(error);
//   // });
//   // }
  

//   clickMe=(event)=>{
//     this.setState({name:this.state.email})
//     axios.get(`https://www.reddit.com/search.json?q=${this.state.name}`)
//     .then( (response)=> {
//       const data = response.data.data
//       this.setState({list : data})
//     })
//     .catch( (error)=> {
//       console.log(error);
//     });
//   }

//   changeHandaller=(event)=>{
//     this.setState({[event.target.name]:event.target.value})
 
//   }


//   render() {
   
//     return (
//       <div className="App">
//       {this.state.name === ""? <h1>Type Me </h1> :<h1>{this.state.name}</h1>}<br/>
     
//       <label>name</label>
//       <input name="name" onChange={this.changeHandaller}value={this.state.name}/><br/>
//         <button onClick={this.clickMe}>click me</button>

//         {this.state.list && this.state.list.children && this.state.list.children.map((value, i)=>{
//           const values = value.data
//           console.log(values)
//           return (
//             <div key={i}>
//               <h1>{values.author_fullname}</h1>
//               <h1>{values.subreddit}</h1>
//               <hr/>
//            </div>
//           )
//         })}
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react'
import InputComp from './comp/inputComp';
import List from './comp/List';

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    name:"",
    family:""
  }
}

changeHandeler=(event)=>{
  this.setState({ [event.target.name]:event.target.value})
}

clickMe=(event)=>{
  event.preventDefault();
console.log(this.state)
}

  render() {
    const { name, family } = this.state
    
    return (
     
        <center>
         <InputComp clickMe={this.clickMe} 
         changeHandeler={this.changeHandeler}
         state={this.state}/>

          <List listProps={listAPI}/>       
        </center>
     
    )
  }
}

const listAPI = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: "Node",
    url: "https://github.com/nodejs/node",
    author: "Ryan Dahl",
    num_comments: 11,
    points: 5,
    objectID: 2
  },
  {
    title: "MongoDB",
    url: "https://github.com/mongodb/mongo",
    author: "Eliot Horowitz",
    num_comments: 7,
    points: 4,
    objectID: 3
  },
  {
    title: "Express",
    url: "https://github.com/expressjs/express",
    author: "TJ Holowaychuk",
    num_comments: 4,
    points: 5,
    objectID: 4
  }
];