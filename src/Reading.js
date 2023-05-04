

  //function must be in capital letters (important)
function Reading({value}){
  // props are coming from parent to this child  ok varuthu how we get that props ,simply write correct /same text in function paranthes({})
    // console.log(value);
  return(
    <div>
     {value.map((word)=>{
       return <div>{word}</div>
     })}
    </div>
  )
}
export default Reading