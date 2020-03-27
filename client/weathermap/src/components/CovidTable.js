import React, {Component} from 'react';
import MaterialTable from 'material-table';
import requestData from './RequestData';


class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
        columns: [],
        data: []
    }
  }

  componentDidMount() {
    //this.getUserList();
    //this.timer = setInterval(() => this.getUserList(), 10000);
    this.setState({
        columns: [
            {title: 'Country', field: 'country', editable: 'never'},
            {title: 'Last Update', field: 'update', editable: 'never'},
            {title: 'Confirmed', field: 'confirmed', editable: 'never'},
            {title: 'Deaths', field: 'deaths', editable: 'never'},
            {title: 'Recovered', field: 'recovered', editable: 'never'},

        ],
        Data: [
            {
                country: 'Loading',
                update: 'Loading',
                confirmed: 'Loading',
                deaths: 'Loading',
                recovered: 'Loading',
            }
        ]
    })
}

// async getUserList() {
//   var passback = await requestData.getCovid19DataByCountry();
//   if (passback !== null) {
//       this.populateData(passback.data)
//   }
// }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
/*
    populateData(data) {
        console.log(data)
        var covidCases = []
        response.forEach(data.features => {
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
*/
 render(){
    return (
      <MaterialTable
        title="Covid 19 cases"
        columns={this.state.columns}
        data={this.state.data}
        // editable={{
        //  isEditable: rowData => rowData.role === "USER", // only name(a) rows would be editable
        //  isDeletable: rowData => rowData.role === "USER", // only name(a) rows would be deletable

        //      /*
        //      onRowAdd: newData =>
        //        new Promise(resolve => {
        //          setTimeout(() => {
        //            resolve();
        //            setState(prevState => {
        //              const data = [...prevState.data];
        //              data.push(newData);
        //              return { ...prevState, data };
        //            });
        //          }, 600);
        //        }),

        //       */
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         var didUpdate = this.updateUser(newData);
        //         if (didUpdate) {
        //           this.setState(prevState => {
        //             const data = [...prevState.data];
        //             data[data.indexOf(oldData)] = newData;
        //             return { ...prevState, data };
        //           });
        //         }
        //       }, 600);
        //     }),

        //   onRowDelete: oldData =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         var didDelete = this.deleteUser(oldData);
        //         if(didDelete){
        //             this.setState(prevState => {
        //                 const data = [...prevState.data];
        //                 data.splice(data.indexOf(oldData), 1);
        //                 return { ...prevState, data };
        //             });
        //         }
        //       }, 700);
        //     })
        // }}
      />
    );
  }
}
  export default UserList;
