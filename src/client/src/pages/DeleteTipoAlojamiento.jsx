
const DeleteTipoAlojamiento = ({ id, onDelete }) => {

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(id); 
      } else {
        console.error('Error al eliminar el tipo de alojamiento.');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleDeleteClick}>Eliminar</button>
  );
};

export default DeleteTipoAlojamiento;
