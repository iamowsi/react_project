import { useState } from "react";
import UserInfo from "./UserInfo";
  const initialUsers =[
    {
      name : "mustafabaqeri",age:"22",email:"mowsibg@gmail.com"
    },
    {
      name : "ashkandejageh",age:"32",email:"dejag23456@gmail.com"      
    },
    {
    name : "baqeri",age:"12",email:"wsibg@gmail.com"
    }
  ]
function App() {
  const [users,setuser] = useState(initialUsers);
  const handleDelete = (name)=>{
    const  newUser=users.filter((user)=>user.name !== name);
    setuser(newUser);
  }
  return (
    <div>
      {users.map((user)=>(
        <UserInfo key={user.name}{...user} handleDelete={handleDelete}/>
      ) 

      )}
    </div>
  )

};
export default App;