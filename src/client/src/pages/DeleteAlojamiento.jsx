
const DeleteAlojamiento = ({id, onDelete}) => {

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(id); 
      } else {
        console.error('Error al eliminar el alojamiento.');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleDeleteClick}>Eliminar selección</button>
  );
};

export default DeleteAlojamiento;
