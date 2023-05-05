//function must be in capital letters (important)
function Reading({ value, onDelete }) {
  // props are coming from parent to this child  ok varuthu how we get that props ,simply write correct /same text in function paranthes({})
  // console.log(value);
  // console.log(onDelete)
  //runs whenever delete button was clicked...and fire the parent function
  const clickHandler = (ind) => {
    onDelete(ind);
  };
  return (
    <div>
      {value.map((word, index) => {
        //map returns array values from parent also button element
        //whenever map function we uses we need to mention key (word) on return jsx ...thats helps react to manipulate list of elements effeciently.
        return (
          <div key={index}>
            <div> {word}</div>

            <button onClick={()=>clickHandler(index)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Reading;
