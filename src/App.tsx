import { Navigate, Route, Routes } from "react-router-dom"
import Usuarios from "./pages/Usuarios"
import { useState } from "react"
import { users } from "./users";
import { UserInterface } from "./interfaces/User";

const App = () => {

  const [userData, setUsersData] = useState(users);
  const [inputText, setInputText] = useState("")

  const onChangeInput = (event: any): void => {
    setInputText(event.target.value)
  };

  const search = (event): void => {
    event.preventDefault();

    if (inputText.trim() == "") {
      setUsersData(users);
      console.log('sss')
      return;
    }

    const usuariosFiltrados: UserInterface[] = [];
    // const usuariosFiltrados = [];

    userData.map(item => {
      console.log(item.name);

      if (item.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) {
        usuariosFiltrados.push(item)
        setUsersData(usuariosFiltrados);
      }
    })

  };

  return (
    <div className="py-8 space-y-4">
      <h2 className="text-4xl font-bold text-center">Usuarios</h2>
      <form onSubmit={search}>
        <div className="w-[60%] mx-auto">
          <input value={inputText} onChange={(event) => onChangeInput(event)} type="text" name="" id="" className="py-2 w-full border border-slate-300 rounded-md text-sm outline-none px-2" placeholder="Buscar un usuario" />
        </div>
      </form>

      <div className="grid lg:grid-cols-2 w-[60%] mx-auto gap-4 mt-8 grid-cols-1 md:justify-center place-items-center">

        {
          userData.map(item => (
            <div key={item.id} className="w-[320px] border border-slate-200 rounded-md flex justify-center gap-x-4 px-4 py-2 shadow-lg">
              <figure className="rounded-full w-[100px] h-[100px]">
                {

                  item.image ? (
                    <img src={` /images/${item.image}`} className=" rounded-full h-full object-cover object-center" alt="image-not-found" />
                  ) : (
                    <img src={` /images/default.jpg`} className=" rounded-full h-full object-cover object-center border border-slate-300" alt="image-not-found" />
                  )
                }

              </figure>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-medium text-xl">{item.name}</p>
                  <p className="font-medium">{item.role}</p>
                </div>
                <p className="font-medium self-end">{item.email ? item.email : 'No tiene email'}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App