
const ItemStatusButtons = ({onToggle, todos: {filterItems, todoItems}}) => {

   const buttons = [ 
      {name: 'all', text: 'All'},
      {name: 'active', text: 'Active'},
      {name: 'done', text: 'Done'}
   ];

   const className = 'btn btn-outline-primary';
   const activeItem = ' active';
      
   const itemsCount = (buttonName) => {
      const allItem =  todoItems.length; 
      const doneItem = todoItems.filter((item)=> item.done).length;
      const activeItem = allItem - doneItem;
      switch (buttonName) {
         case 'all':
            return allItem;
         case 'active':
            return activeItem;
         case 'done':
            return doneItem;
         default:
            return 0
      }

   };
  
   const handleClick = (event) => {
      return onToggle(event.target.name)
   };

   const buttonGroup = buttons.map(item => {
      return (
      <button 
      type="button"
      className={(item.name === filterItems) ? className + activeItem : className }
      name={item.name}
      key={item.name}
      onClick={handleClick}
      >{item.text}
         <span className="badge bg-secondary ms-1">{itemsCount(item.name)}</span>
      </button>
      );
   });

   return (
      
         <div className="btn-group">
         {buttonGroup}
         </div>
      
   );
};

export default ItemStatusButtons;