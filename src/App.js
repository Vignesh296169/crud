//APP  is the parent of all components(child)
import { useState } from "react";
import Form from "./Form";
import Reading from "./Reading";
function App() {
  //All jsx element should be wrapped by parent element,example div or fragment(<></>).
  const [persons, setPersons] = useState([]);
  //this persons default value has empty array..so we need get piece of from child to parent...so we need use call back method
  
  //this function is used to receive data from child
  const valueHandler=(paramter)=>{//call back logic
    //this are we write parameter
     // here we need to update initial empty arrya using setpersons () function
     setPersons([...persons,paramter])//push pandra area//whenever data or text corresponding to previous text or data we need to use this
  }
  //delete logic.....................................................
  const delteHandler=(ind)=>{
    // console.log(ind)
    //  console.log("delte button clicked")
   let response= persons.filter((names,index)=>{
       return index !==ind
    })
    // console.log(response)
    setPersons(response)
    /////////////////////////////////
  }
  console.log(persons)//periya array 
  return (
    <>
      <h1>hiiii</h1>

      <Form getValue={valueHandler}/>
      
      <Reading value={persons} onDelete={delteHandler}  />
      {/* props is used to communication or transfer something or everything from parent to child */}
      {/* how we create props in child like html attributes */}
    </>
  );
}
// jsx means combination of java-script plus Html element..inside of html element write{} bracket write some javascript expression
// all logic should placed inside the curly bracket
export default App;
//here we are going perform crud operation .crud  operation impeletation is more important in website..because it gives nice user Experience
