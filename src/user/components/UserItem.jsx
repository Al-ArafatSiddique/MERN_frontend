import React from 'react'
import './userItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'
import { Link } from 'react-router-dom'
export default function UserItem({id, name, image, placeCount}) {
  return (
    <React.Fragment>
      <li className='user-item'>
       <Card className="user-item__content">
       <Link to={`/${id}/places`}>
            <div className="user-item__image">
                <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
                <h2>{name}</h2>
                <h3>{placeCount} {placeCount === 1 ? 'place' : 'places'} </h3>
            </div>
        </Link>
        </Card>
      </li>
    </React.Fragment>
  )
}
