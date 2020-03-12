import React, {Component} from 'react';
import MaterialTable from 'material-table';
import requestServer from './RequestServer';


class UserList extends Component{
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
            {title: 'Role', field: 'role'},
        ],
        Data: [
            {
                username: 'Loading',
                name: 'Loading',
                email: 'Loading',
                role: 'Loading',
            }
        ]
    })
}

async getUserList() {
  var passback = await requestServer.getUsers()
  if (passback !== null) {
      this.populateData(passback.data)
  }
}

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    populateData(response) {
        console.log(response)
        var userList = []
        response.forEach(user => {
            var name = (user.name)
            var username = user.username
            var email = user.email
            var role = user.role

            var user_obj = {
                name: name,
                username: username,
                email: email,
                role: role,
            }

            userList.push(user_obj)
        });

        this.setState({data: userList})

    }


/*
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
  */
 render(){
    return (
      <MaterialTable
        title="All Users"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          /*
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
            */
        }}
      />
    );
  }
}
<<<<<<< HEAD
  export default UserList;
=======
  export default UserList;
>>>>>>> 5f22aeb819cc7fa1547e1a2ef2a9d11d6933f861
