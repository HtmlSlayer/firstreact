// CRUD => Create Read Update Delete

import React from 'react';

const axios = require('axios')

class Crud extends React.Component {

    state = {
        users : []
    }

    async componentDidMount(){
        // perfect place for GET request
        // Promised returned
        // Promises states : Pending - Fullfiled - Rejected
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({users: data});
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
                            </tr>)}
                        </tbody>
                        
                        <tfoot>
                            <tr>
                                <th>total</th>
                                <th>50 €</th>
                            </tr>
                        </tfoot>
                    </table>
        </>
        )
        ;
    }
}
 
export default Crud;