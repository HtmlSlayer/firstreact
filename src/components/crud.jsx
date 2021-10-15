// CRUD => Create Read Update Delete

import React from 'react';

const axios = require('axios')

const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

class Crud extends React.Component {

    state = {
        users : []
    }

    async componentDidMount(){
        // perfect place for GET request
        // Promised returned
        // Promises states : Pending - Fullfiled - Rejected
        const {data} = await axios.get(apiEndpoint);
        this.setState({users: data});
    }

    handleAdd = async () => {
        const obj = {name: "Decruyper", username : "Laura"}
        await axios.post(apiEndpoint, obj)
        const users = [...this.state.users, obj]

        this.setState({users})

    }

    handleUpdate = async user => {
        user.username = "Bob";
        await axios.put(apiEndpoint + "/" + user.id, user);

        const users = [...this.state.users]
        const index = users.indexOf(user)
        user[index] = {...users}
        this.setState({users})

    }

    handleDelete = async user => {
        
        await axios.delete(apiEndpoint + "/" + user.id)

        const users = this.state.users.filter(element => element.id != user.id)
        this.setState({users})
        

    }

    render() { 
        return (
        <>
            <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>


                        <tbody>
                            {this.state.users.map(user => <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => this.handleUpdate(user)}>Update</button></td>
                                <td><button onClick={() => this.handleDelete(user)}>Delete</button></td>
                            </tr>)}
                        </tbody>
                        
                        <tfoot>
                            <tr>
                                <th>total</th>
                                <th>50 €</th>
                            </tr>
                        </tfoot>
                    </table>

                    <button onClick={this.handleAdd}>Add</button>
                    
        </>
        )
        ;
    }
}
 
export default Crud;