
const ItemStatusButtons = ({onToggle}) => {

   const buttons = [ 
      {name: 'all', text: 'All', className: "btn btn-outline-primary"},
      {name: 'active', text: 'Active', className: "btn btn-outline-primary"},
      {name: 'done', text: 'Done', className: "btn btn-outline-primary"}
   ];

   
   const handleClick = (event) => {
      onToggle(event.target.name);
   }

   const buttonGroup = buttons.map(item => 
      <button 
      type="button"
      className={item.className}
      name={item.name}
      key={item.name}
      onClick={handleClick}
      >{item.text}
         <span className="badge bg-secondary ms-1">{}</span>
      </button>
   );

   return (
      
         <div className="btn-group">
         {buttonGroup}
         </div>
      
   );
};

export default ItemStatusButtons;