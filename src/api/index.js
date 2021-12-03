const axios = require('axios')
const url = 'http://localhost:5000/api'

const config = {
    mode:'no-cors',
    header:{
        'Accept': "*/*",
        'Accept-Control-Allow-Origin': "*",
        'Content-type':'application/json'
    }
}

//GET
export const getTeachers = () =>{
    return axios.get(`${url}/teachers`,config)
}
export const getTutors = () =>{
    return axios.get(`${url}/tutors`,config)
}
export const getStudents = () =>{
    return axios.get(`${url}/students`,config)
}

//POST
export const postTeachers = (data) =>{
    console.log(data)
    return axios.post(`${url}/teachers`, data,config)
}
export const postTutors = (data) =>{
    return axios.post(`${url}/tutors`, data,config)
}
export const postStudents = (data) =>{
    return axios.post(`${url}/students`, data,config)
}

//PUT
export const putTeacher = (id, data) =>{
    return axios.put(`${url}/teachers/${id}`, data,config)
}
export const putTutor = (id,data) =>{
    return axios.put(`${url}/tutors/${id}`, data,config)
}
export const putStudent = (id,data) =>{
    return axios.put(`${url}/students/${id}`, data,config)
}

//Delete
export const delTeacher = (id, data) =>{
    return axios.delete(`${url}/teachers/${id}`, data,config)
}
export const delTutor = (id,data) =>{
    return axios.delete(`${url}/tutors/${id}`, data,config)
}
export const delStudent = (id,data) =>{
    return axios.delete(`${url}/students/${id}`, data,config)
}
