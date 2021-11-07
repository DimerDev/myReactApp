
const AddFormItem = ({onAdded}) => {

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
            className="btn fa-2x">
               <i className="fas fa-plus-circle"></i>
            </button>
      </div>
      </form>
   );
};

export default AddFormItem;