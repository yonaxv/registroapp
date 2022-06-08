/* eslint-disable no-undef */
import image from "../assets/image/avatar/avatar.png";


export default function UserRow({
  _id,
  ci,
  name,
  lastname,
  city,
  number,
  gender,
  Fnc,
}) {
  const handleDelete = (id) =>{
    const requestInit = {
      method: 'DELETE'
    }
    fetch('http://localhost:5000/api/user/deleteuser/' + id,requestInit)
    .then(res=> res.json())
    .then(res=> {
      console.log(res)
    })
  }
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{ci}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 mask">
              <img src={image} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {name} {lastname}
            </div>
            <div className="text-sm opacity-50">{city}</div>
          </div>
        </div>
      </td>
      <td>{number}</td>
      <td>{gender}</td>
      <td>
        { moment(Fnc).utc().format('DD/MM/YY') }
        <span className="badge badge-ghost badge-sm">{moment(moment(Fnc).utc().format('DD/MM/YY'), "MM/DD/YYYY").month(0).from(moment().month(0))}</span>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">Detalles</button>
      </th>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-xs">eliminar</button>
      </th>
    </tr>
  );
}
