import { useState } from "react"

// component nothing but function(pure javascript function) we can use either normal function or arrow function
function Form({getValue}){
 
   const[text,setText]=useState("")
    
  // this function runs whenever user submit the form/click;
  const submitHandler=(e)=>{
    // console.log("form button has clicked");
     e.preventDefault()
     getValue(text)//here we call that function give a arugment so this piece of data will moves to parameter
     setText("")/// here we set the text as a empty string
  }
  //this function runs whenever user type in input tag
  const changeHandler=(e)=>{
    //  console.log("if you did changes in input bar i will run");
     setText(e.target.value)
  }
return(
  <>
   <form onSubmit={submitHandler}>
    <input type="text" value={text} onChange={changeHandler}/>
    <button>submit</button>
   </form>
  </>
)
}
//<input type="text"> this normal html have self closing tag , in react self closing tag writen like this <input/>
//<form></form> is the element use to wrap input fields///whenever user put some text (data)
/// all return logic must be inside in curly bracket only export default write outside
export default Form

// form tag has default behaviour is whenever user submit form is going submit the data to backend..so our page is re-rendering.we need to stop the default behaviour in react
// whenever we want to create input tag...100 percenta we want to write useState(because we need to track data changes/text changes)