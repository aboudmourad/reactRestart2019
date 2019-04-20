import React from 'react'

const UserRepositories = (props) => {
    const { userRepositories } = props;
   const posts = userRepositories && userRepositories.map((val, index)=>{
       return (
               <div key={index} className='repositories'>
                   <p>
                       <a href={val.html_url} ><b> {val.name} : </b></a>
                        {val.description}
                   </p>
               </div>
         );
   })
  return (
    <div>
      {posts}
    </div>
  )
}

export default UserRepositories
