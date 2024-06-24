
const DeleteServicios = ({id, onDelete}) => {

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                onDelete(id);
            } else {
                console.error('Error al eliminar el servicio');
            }

        } catch (error) {
            console.log("Error", error);
        }
};

return (
    <button onClick = {handleDelete}>Eliminar</button>
);
};
export default DeleteServicios;