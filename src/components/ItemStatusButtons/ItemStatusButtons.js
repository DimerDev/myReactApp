
const ItemStatusButtons = () => {

   const buttons = [ 
      {name: 'all', text: 'All'},
      {name: 'active', text: 'Active'},
      {name: 'done', text: 'Done'}
   ];

   const buttonGroup = buttons.map(item => 
      <button 
      type="button"
      className="btn btn-outline-primary"
      key={item.name}
      >{item.text}
         <span className="badge bg-secondary ms-1"></span>
      </button>
   );

   return (
      
         <div className="btn-group">
         {buttonGroup}
         </div>
      
   );
};

export default ItemStatusButtons;