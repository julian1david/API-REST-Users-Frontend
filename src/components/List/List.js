import './List.css';
import ListItem from './LisItem/ListItem'

//creamos un componenete de una lista que la recorra y devuelva los item de phone
const List = (props) => {
    return(
        <div>
            <ul className="ul">
                {props.list.map(item => (
                    <ListItem  key={item._id} item={item} />
                ))}
            </ul>
        </div>
        )
}

export default List