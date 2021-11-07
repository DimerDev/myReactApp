
const AddFormItem = () => {

   return (
      <div className="input-group mt-2 align-items-center">
            <input type="text" className="form-control mr-2" placeholder=" New task" />
            <button type="button" className="btn fa-2x" >
               <i className="fas fa-plus-circle"></i>
            </button>
      </div>
   );
};

export default AddFormItem;