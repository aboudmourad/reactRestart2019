import React, { Component } from 'react';

import axios from 'axios'

import Info from './Info';
import UserRepositories from './UserRepositories';

class File1 extends Component {
 constructor(props){
   super(props);
   this.state={
     userName:'ted1618',
     userInfo:null,
     userRepositories:[]
   }
 }

 componentDidMount(){
   const clientId = 'ea5751dbba5f49728c15';
   const clientSecret = '1bbbbd34b0b23e44285722a36314090f1dc64d09'
   axios
   .get(`https://api.github.com/users/${this.state.userName}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
   .then((response)=> {
     const info = response.data;
     this.setState({ userInfo : info})
   })
   .catch((error)=> {
     console.log(error);
   });

   axios
   .get(`https://api.github.com/users/${this.state.userName}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
   .then((response)=> {
     const repositories = response.data;
     this.setState({ userRepositories : repositories })
   })
   .catch((error)=> {
     console.log(error);
   });

 }

 render() {
   return (
     <div>
       <div>
           <h3>User Repositorie</h3>
         <UserRepositories userRepositories={this.state.userRepositories} />
       </div>
       <hr />
       <div>
         <h3>User Info</h3>
         <Info userInfo={this.state.userInfo} />
       </div>
     </div>
   );
 }
}

export default File1;