import SingleItem from './SingleItem';

const Items = ({ items, removeItem, toggleItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleItem={toggleItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
