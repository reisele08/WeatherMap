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
    this.getUserList();
    this.timer = setInterval(() => this.getUserList(), 10000);
    this.setState({
        columns: [
            {title: 'Username', field: 'username', editable: 'never'},
            {title: 'Name', field: 'name', editable: 'never'},
            {title: 'Email', field: 'email', editable: 'never'},
            {title: 'Role', field: 'role', lookup: { 'USER': 'USER', 'ADMIN': 'ADMIN' },},
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
  var passback = await requestServer.getUsers();
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
            var id = user._id

            var user_obj = {
                id: id,
                name: name,
                username: username,
                email: email,
                role: role,
            }

            userList.push(user_obj)
        });

        this.setState({data: userList})

    }

    async deleteUser(user) {
        let response = await requestServer.deleteUser(user.id)
        if (response !== null) {
            return true
        }
        return false
    }

    async updateUser(user) {
      let response = await requestServer.updateUser(user)
      if (response !== null){
          return true
      }
      return false
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
         // isEditable: rowData => rowData.role === "USER", // only name(a) rows would be editable
         isDeletable: rowData => rowData.role === "USER", // only name(a) rows would be deletable

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

              */
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                var didUpdate = this.updateUser(newData);
                if (didUpdate) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 3000);
            }),

          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                var didDelete = this.deleteUser(oldData);
                if(didDelete){
                    this.setState(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                    });
                }
              }, 3000);
            })
        }}
      />
    );
  }
}
  export default UserList;
