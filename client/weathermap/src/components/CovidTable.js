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
    this.getCovid19DataByCountry();
    this.timer = setInterval(() => this.getCovid19DataByCountry(), 10000);
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

async getCovid19DataByCountry() {
  var response = await requestData.getCovid19DataByCountry();
  if (response !== null) {
      this.populateData(response.data)
  }
}

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    populateData(data) {
        console.log(data)
        var covidCases = []
        var features = data.features;

        features.forEach(function(result){
            var country = result.properties.Country_Region
            var update = result.properties.Last_Update
            var confirmed = result.properties.Confirmed
            var deaths = result.properties.Deaths
            var recovered = result.properties.Recovered

            var country_obj = {
                country: country,
                update: update,
                confirmed: confirmed,
                deaths: deaths,
                recovered: recovered,
            }

            covidCases.push(country_obj)
        });

        this.setState({data: covidCases})

    }

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
