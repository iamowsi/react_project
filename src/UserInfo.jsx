 import React from "react";
 
 function UserInfo({name,age,email,handleDelete}) {
  // const handlechange =(e)=>{
  //   console.log(e.target.value);
  // }

  return (
    <div>
      <ul>
        <li>name:{name}</li>
        <li>age:{age}</li>
        <li>email:{email}</li>
        <li>
          <button onClick={()=> handleDelete(name)}>Delete</button>
          {/* <input type="text" onChange={handlechange} /> */}
        </li>
      </ul>
    </div>
  )

};
export default UserInfo;