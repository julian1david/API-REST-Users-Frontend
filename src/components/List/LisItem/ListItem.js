import './ListItem.css'
import { useState } from 'react'
//uso de Hooks

const ListItem = function (props) {

    const [likes, setLikes] = useState(0) 
    //Uso de eventos mediante Hooks
    return (
        <li onClick={ () => {}}>
            <div className="list-item">
                <div className="list-item-logo">
                    <img src={props.item.picture.thumbnail } alt="profile user"/>
                </div> 
                <div className="list-item-body">
                    <p className="name">
                    {` ${props.item.name.first} ${props.item.name.last} `}
                    </p> 
                    <p className="time">{props.item.address}</p>
                    <p className="phone">{props.item.phone}</p>
                    <p className="email">{props.item.email}</p>
                </div>
                <div className="list-item-logo">
                    <button className="btn" onClick={()=>{ setLikes(likes + 1)}}> {likes} Likes</button>
                </div>
            </div>
        </li>
    )

}

export default ListItem