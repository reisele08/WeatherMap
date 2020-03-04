import React from 'react';
import MaterialTable from 'material-table';

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
