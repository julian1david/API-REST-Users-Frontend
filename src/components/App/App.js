import './sytles.css';
import List from '../List/List'
import { useState, useEffect } from 'react'
import { getTeachers, getTutors, getStudents, postTeachers, postStudents, postTutors} from '../../api';
import {parserForm} from '../../helpers/index'

// un componenete puede se runa función y una clase
const App = () => {
  const project = 'Mission TIC 2020'
  //uso de estado 
  const [message, setMessage] = useState("Welcome")
  const [userList, setUserList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [user, setUser] = useState({
    document_type: "",
    document: "",
    title: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
    phone: "",
    cellphone: "",
    gender: "",
    type: ""
  })
  
  useEffect(() => {
    document.title = `${message}`
  })

  //manejmamos el onchange de los inputs y values
  const handleChange = (e) => {
    const value = e.target.value
    //Propagación o spinning
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const clearUser =(()=>{
    setUser({
      document_type: "",
        document: "",
          title : "",
            fname : "",
              lname : "",
                email : "",
                  address : "",
                    phone : "",
                      cellphone : "",
                        gender : "",
                          type: ""
    })
  });
  const clearForm = (e) => {
    e.preventDefault()
    clearUser()
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    let aForm = e.target;
    //Con este se va a hacer el Parseo para enviar la información
    let aUser = Object.assign({}, parserForm(aForm))
    //validamos el type que viene del formulario y con eso decibimos que enviar al server
    if(aUser.type ===  "teachers"){
      postTeachers(aUser)
    }else if (aUser.type ===  "students"){
      postStudents(aUser)
    }else {
      postTutors(aUser)
    }
    clearUser()
  }

  return (
    //Lo que esta escrito aqui no es HTML es JSX (XML)
    <div className="App">
      <header className="App-header">
        <h2>{project}</h2>
        <h3> {message}</h3>
      </header>
      <div className="App-buttons">
        <button onClick={() => {
          setMessage("Welcome")
          setShowForm(true)
          setUserList([])
        }}>Form </button>

        <button onClick={() => {
          setMessage("List of Studends")
          getStudents().then((resp) => {
            const data = resp.data;
            setUserList(data.filter((user) => {
              return user.type === "students"
            }))
          })
          setShowForm(false)
        }}>Studends </button>

        <button onClick={() => {
          setMessage("List of teachers")
          getTeachers().then((resp) => {
            const data = resp.data;
            setUserList(data.filter((user) => {
              return user.type === "teachers"
            }))
          })
          setShowForm(false)
        }}>Teachers </button>

        <button onClick={() => {
          setMessage("List of Tutors")
          getTutors().then((resp) => {
            const data = resp.data;
            setUserList(data.filter((user) => {
              return user.type === "tutors"
            }))
          })
          setShowForm(false)
        }}>Tutors </button>

      </div>
      {/** Validamos. Si lo que esta al lado izquierdo se cumple muestre lo de la derecha  */}
      {showForm &&
        <form autoComplete="off" onSubmit={onSubmit}>
          <select name="document_type" value={user.document_type} onChange={handleChange}>
            <option value="CC">C.C</option>
            <option value="TI">T.I</option>
            <option value="OT">O.T</option>
          </select><br />
          <input type="text" name="document" placeholder="Identification" value={user.document} onChange={handleChange} />
          <input type="text" name="title" placeholder="Title" value={user.title} onChange={handleChange} />
          <input type="text" name="fname" placeholder="First Name" value={user.fname} onChange={handleChange} />
          <input type="text" name="lname" placeholder="Last Name" value={user.lname} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" value={user.address} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} /><br />
          <input type="text" name="cellphone" placeholder="Cell Phone" value={user.cellphone} onChange={handleChange} /><br />
          <select name="gender" value={user.gender} onChange={handleChange}>
            <option value="other">Other</option>
            <option value="male">Male</option>
            <option value="female">Femaale</option>
          </select><br />
          <select name="type" value={user.type} onChange={handleChange}>
            <option value="teachers">Teacher</option>
            <option value="students">Student</option>
            <option value="tutors">Tutor</option>
          </select><br />
          <div className="btn-group">
            <button type="submit">Send</button>
            <button onClick={clearForm}>Delete</button>
          </div>
        </form>
      }
      <List list={userList} />
    </div>
  );
}

export default App;
