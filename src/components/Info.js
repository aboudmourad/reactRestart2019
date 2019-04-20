import React from 'react'


const Info=(props)=> {
   const { userInfo } = props;
   return(
           <div>
               <div className='img'>
                   <a href={userInfo && userInfo.html_url} ><img src={userInfo && userInfo.avatar_url} alt='profile pec.' width={400} height={350} /></a>
               </div>
               <div className='info'>
                   <p><b>Fullname:</b> {userInfo && userInfo.name}</p>
                   <hr />
                   <p><b>Username:</b> {userInfo && userInfo.login}</p>
                   <hr />
                   <p><b>Location:</b> {userInfo && userInfo.location}</p>
                   <hr />
                   <p><b>Email Adress:</b> {userInfo && userInfo.email}</p>
               </div>
           </div>
       );
   }
export default Info