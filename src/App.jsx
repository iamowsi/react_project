import UserInfo from "./UserInfo";

function App() {
  const users =[
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

  return (
    <div>
      {users.map((user)=>(
        <UserInfo key={user.name} name={user.name} age={user.age} email={user.email}/>
      )

      )}
    </div>
  )

};
export default App;