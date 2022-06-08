import { useState, useEffect } from "react";
import LastUserRegister from "../components/LastUserRegister";

const saveUser = async (user) => {
  // console.log(">>>", user);
  const response = await globalThis.fetch(
    "http://localhost:5000/api/user/createuser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return response.json();
};

function AddUser() {
  const initialState = {
    name: "",
    number: "",
    Fnc: "",
    ci: "",
    lastname: "",
    city: "Seleccione una ciudad",
    gender: "Seleccione genero",
  };
  
  const [user, setUser] = useState({ ...initialState });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    if (isSubmitted) {
      saveUser(user).then((res) => console.log(res));
      setUser({
        ...initialState,
      });
      const lastUser = JSON.parse(localStorage.getItem("lastUser"));
      setLastUser(lastUser);

      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("lastUser", JSON.stringify(user));
    setIsSubmitted(true);
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-10 min-h-fit item-center bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="flex-shrink-0 px-10 pb-10 shadow-2xl"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Documento de Identidad</span>
          </label>
          <input
            type="Number"
            onChange={handleChange}
            name="ci"
            value={user?.ci}
            placeholder="Documento de Identidad"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          <section className="flex flex-col flex-wrap gap-2">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={user?.name}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </section>
          <section className="flex flex-col flex-wrap gap-2">
            <label className="label">
              <span className="label-text">Apellido</span>
            </label>
            <input
              type="text"
              placeholder="Apellido"
              name="lastname"
              value={user?.lastname}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </section>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          <section className="flex flex-col flex-wrap gap-2">
            <label className="label">
              <span className="label-text">Numero</span>
            </label>
            <input
              type="number"
              placeholder="Numero"
              name="number"
              value={user?.number}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </section>

          <section className="flex flex-col flex-wrap w-48 gap-2">
            <label className="label">
              <span className="label-text">ciudad</span>
            </label>
            <select
              className="input input-bordered"
              name="city"
              value={user?.city}
              onChange={handleChange}
              required
            >
              <option hidden>{user.city}</option>
              <option>Santa Cruz</option>
              <option>La Paz</option>
              <option>Cochabamba</option>
            </select>
          </section>

          <section className="flex flex-col flex-wrap w-48 gap-2">
            <label className="label">
              <span className="label-text">Genero</span>
            </label>
            <select
              className="input input-bordered"
              name="gender"
              value={user?.gender}
              onChange={handleChange}
              required
            >
              <option hidden>{user.gender}</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
          </section>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fecha Nacimiento</span>
          </label>
          <input
            value={user?.Fnc}
            name="Fnc"
            datepicker="true"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            onChange={handleChange}
            format="yyyy-MM-dd"
            required
          />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Registrar</button>
        </div>
      </form>

      <LastUserRegister user={lastUser} />
    </div>
  );
}

export default AddUser;
