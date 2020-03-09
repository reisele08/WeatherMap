import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
/*
class UserList extends component{
  constructor(props) {
    super(props);
    this.state = {
        columns: [],
        data: []
    }
  }

  componentDidMount() {
    this.getUserList()
    this.timer = setInterval(() => this.getUserList(), 10000);
    this.setState({
        columns: [
            {title: 'Username', field: 'username'},
            {title: 'Name', field: 'name'},
            {title: 'Email', field: 'email'},
        ],
        Data: [
            {
                username: 'Loading',
                name: 'Loading',
                email: 'Loading',
            }
        ]
    })
}

getUserList = () => {
  fetch('http://localhost:3001/api/getData')
    .then((data) => data.json())
    .then((res) => this.setState({ data: res.data }));
};

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    populateData(response) {
        console.log(response)
        var userList = []
        response.forEach(user => {
            var name = (user.name)[0]
            var username = user.username[0]
            var email = user.email

            var user_obj = {
                name: name,
                username: username,
                email: email,
            }

            userList.push(user_obj)
        });

        this.setState({data: userList})

    }
}
*/


export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Username', field: 'username' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email'},
      ],
      data: [
        { username: 'John324', name: 'John', email: 'J123@gmail.com'},
        { username: 'Jill1991', name: 'Jill', email: 'Jill2910@gmail.com'},
      ],
    });
  
    return (
      <MaterialTable
        title="All Users"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );
  }
