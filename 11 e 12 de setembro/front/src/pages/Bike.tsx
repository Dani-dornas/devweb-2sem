import { useEffect, useState } from "react";
import { BikeProps } from "../types";
import service from "../services/BikeService";

function Bike() {
  const [color, setColor] = useState("");
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [gender, setGender] = useState("");
  const [speedkit, setSpeedkit] = useState("");
  const [rim, setRim] = useState("");
  const [suspension, setSuspension] = useState("");
  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //disparado ao carregar o componente
  useEffect(() => {
    (async () => {
      load();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    const res: BikeProps[] = await service.get();
    setBikes(res);
  };

  const save = async (e: any) => {
    //evita o evento natural que é o submit do formulário
    e.preventDefault();
    if (
    color && color.trim() !== "" && 
    size && size.trim() !== "" && 
    material && material.trim() !== "" &&
    gender && gender.trim() !== "" &&
    speedkit && speedkit.trim() !== "" &&
    rim && rim.trim() !== "" &&
    suspension && suspension.trim() !== "" &&
    description && description.trim() !== "" &&
    hourlyvalue && hourlyvalue.trim() !== "" &&
    dailyvalue && dailyvalue.trim() !== "" &&
    latitude && latitude.trim() !== "" &&
    longitude && longitude.trim() !== ""
    ) {
      const res: any = await service.post({
        color:color.trim(),
        size:size.trim(),
        material:material.trim(),
        gender:gender.trim(),
        speedkit:speedkit.trim(),
        rim:rim.trim(),
        suspension:suspension.trim(),
        description:description.trim(),
        hourlyvalue:hourlyvalue.trim(),
        dailyvalue:dailyvalue.trim(),
        latitude:latitude.trim(),
        longitude:longitude.trim()
      });
      if (res.error) {
        alert(res.error);
      } 
      else{
        load();
      }
    }
  };

  const reset = (e:any) => {
    e.preventDefault();
    setColor("");
    setSize("");
    setMaterial("");
    setGender("");
    setSpeedkit("");
    setRim("");
    setSuspension("");
    setDescription("");
    setHourlyvalue("");
    setDailyvalue("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <>
      <h3>Bicicleta</h3>
      <form>
        <div>
          <label>Cor</label>
          <input value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label>Tamanho</label>
          <input value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <div>
          <label>Material</label>
          <input value={material} onChange={(e) => setMaterial(e.target.value)} />
        </div>
        <div>
          <label>Gênero</label>
          <input value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div>
          <label>Marcha</label>
          <input value={speedkit} onChange={(e) => setSpeedkit(e.target.value)} />
        </div>
        <div>
          <label>Aro</label>
          <input value={rim} onChange={(e) => setRim(e.target.value)} />
        </div>
        <div>
          <label>Suspensão</label>
          <input value={suspension} onChange={(e) => setSuspension(e.target.value)} />
        </div>
        <div>
          <label>Descrição</label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Valor da hora</label>
          <input value={hourlyvalue} onChange={(e) => setHourlyvalue(e.target.value)} />
        </div>
        <div>
          <label>Valor do dia</label>
          <input value={dailyvalue} onChange={(e) => setDailyvalue(e.target.value)} />
        </div>
        <div>
          <label>Latitude</label>
          <input value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div>
          <label>Longitude</label>
          <input value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>
        <div>
          <button onClick={save}>Salvar</button>
          <button onClick={reset}>Limpar</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Codinome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.color}</td>
              <td>{item.size}</td>
              <td>{item.material}</td>
              <td>{item.gender}</td>
              <td>{item.speedkit}</td>
              <td>{item.rim}</td>
              <td>{item.suspension}</td>
              <td>{item.description}</td>
              <td>{item.hourlyvalue}</td>
              <td>{item.dailyvalue}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Bike;