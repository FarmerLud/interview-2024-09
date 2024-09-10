import { useState } from 'react'
import { users } from '../users'
import defaultUserImage from '../assets/defaultUser.jpg'

const Card = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCard, setSelectedCard] = useState(null)

  const searchWords = searchTerm
    .split(' ')
    .map(word => word.toLowerCase())
    .filter(Boolean)

  const filteredUsers = users.filter(user => {
    const nameLower = user.name.toLowerCase()
    return searchWords.every(word => nameLower.includes(word))
  })

  const handleCardClick = userId => {
    setSelectedCard(prev => (prev === userId ? null : userId))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      ></input>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4  md:justify-center md:items-center">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            onClick={() => handleCardClick(user.id)}
            className={`max-w-xs bg-black text-white border-4 rounded-lg p-4 flex items-center space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${
              selectedCard === user.id ? 'border-green-400' : ''
            }`}
          >
            <img
              src={user.image ? `/images/${user.image}` : defaultUserImage}
              alt={user.name}
              className="w-24 h-24 rounded-full mb-4 items-center justify-center"
            />
            <div>
              <h2 className="text-base font-bold uppercase">{user.name}</h2>
              <span className="text-gray-400 text-xs uppercase">
                {user.role ? user.role : 'Sin rol'}
              </span>

              <p className="text-gray-400 text-sm mt-2">
                {user.email ? user.email : 'Correo no disponible'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card

// id: '1',
// name: 'Emilia Clark',
// image: 'emilia clark.jpg',
// role: 'Administradora',
// email: 'emili.c@gmail.com'
