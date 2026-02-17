import { useState } from 'react';

const SingleItem = ({ item, removeItem, toggleItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleEdit = () => {
    if (isEditing) {
      editItem(item.id, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => toggleItem(item.id)}
      />
      {isEditing ? (
        <input
          type='text'
          className='form-input'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ height: '1.5rem', alignSelf: 'center' }}
        />
      ) : (
        <p
          style={{
            textDecoration: item.completed && 'line-through',
          }}
        >
          {item.name}
        </p>
      )}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className='btn edit-btn'
          type='button'
          onClick={handleEdit}
        >
          {isEditing ? 'save' : 'edit'}
        </button>
        <button
          className='btn remove-btn'
          type='button'
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
