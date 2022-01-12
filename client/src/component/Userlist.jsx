import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'react-bootstrap';

export default function Userlist() {

const [userarr,setUserarr] = useState([]);

const fetchuserlist = ()=>{
    axios.get("http://localhost:3001/user")
        .then((res)=>{
        console.log(res.data); 
        setUserarr(res.data);  
        }) 
}     

useEffect(() => {
    fetchuserlist();
}, [])

const userdelete = (id)=>{
    //alert('click me'+id);
    axios.delete(`http://localhost:3001/userdelete/${id}`)
    .then(()=>{
        alert('Deleted');
    })
    let filteredData = userarr.filter((user) => user.id !== id);
    setUserarr(filteredData);
    
}

const renderlist = userarr.map((val)=>{
    const {id,name,username,password} = val;
    return (
                    <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{password}</td>
                    <td><Button variant="danger" onClick={()=>{userdelete(id)}}>Delete</Button></td>
                    </tr>
    )
                    
    
})

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {renderlist}
                    
                </tbody>
                </Table>
        </div>
    )
}
