import ListTipos from "./ListTipos";


const FetchOnlyTipos = () => {

    const [tiposAlojamiento, setTiposAlojamiento] = ListTipos();

  return tiposAlojamiento;
}

export default FetchOnlyTipos
