
const AddFormItem = ({onAdded}) => {

   let iconStyle = {
      fontSize:"150%",
      color: "#3d4a8f"
   };     

   const createItem = (event) => {
      event.preventDefault();
      const taskText = event.target.taskText.value.trim();
      if (taskText !== '') onAdded(taskText);
   };

   return (
      <form onSubmit={createItem}>
      <div className="input-group mt-2 align-items-center">
            <input type="text"
            name="taskText"
            className="form-control mr-2"
            placeholder=" New task" />
            <button type="submit"
            className="btn fa-3x">
               <i style={iconStyle} className="bi bi-plus-circle-fill"></i>
            </button>
      </div>
      </form>
   );
};

export default AddFormItem;