
import React, {Component} from 'react';
import Chart from 'react-apexcharts';

import requestServer from "./RequestServer";
import {Button,UncontrolledButtonDropdown,ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

//
class CanadaCovid extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);

        this.setProvince  = this.setProvince.bind(this);
        this.setStatus= this.setStatus.bind(this);
        this.state = {
            go: "go",

            showGraph: false,
            showGraphProv: false,
            status:"Select Status",
            province: "Select Province",

            series: [{
                name: "active cases",
                data:[]//************Here ***************** is where you set the Y data
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },

                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Canada confirmed',
                    align: 'center'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [ ],////Here ***************** is where you set the X data
                }
            },

        }
    }

    componentDidMount() {

        //this.getData();
        //need to retrun it as 2arrays;
    }
    async getData(country,status) {//button onclick the make a request to something.

        var response = await requestServer.getCoronabyProvinceStatus(country, status);
        console.log(response.data);
        this.updateGraphData(response.data)
    }


    updateGraphData(controllerCall) {

        var options = {...this.state.options};
        //options.xaxis.categories = this.formatDate(controllerCall.dates);
        options.xaxis.categories = controllerCall.dates;

        this.setState( options);

        var series = {...this.state.series};
        series[0].data = controllerCall.values;
        series[0].name = this.state.status;


        this.setState( series);

        this.setState(state => ({ showGraph: !state.showGraph    }))

    }


    handleSubmit() {

        this.getData(this.state.province,this.state.status);
        if(this.state.go === "reset") {
            this.setState(state => ({go: "go"}));
        }else if (this.state.go === "go" ) {
            this.setState(state => ({go: "reset"}));
        }


        var options = {...this.state.options};
        options.title.text = this.state.country + " " + this.state.status;

        this.setState( options);


    }



    setProvince(province){
        this.setState(state => ({ province: province  }));

    }
    setStatus(status) {
        this.setState(state => ({ status:status}));

    }


    render() {
        let graph;//conditions?
        graph = <Chart options = {this.state.options} series = {this.state.series} type="line" height={350} />

        return (
            <div id="chart">

                {/************** Country drop down*/}
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        {this.state.province}
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem onClick={() => this.setProvince("British Columbia") }>British-Columbia</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Quebec")}>Quebec</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Ontario")}>Ontario</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Alberta")}>Alberta</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Nova Scotia")}> Nova Scotia</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("New Brunswick")}>Alberta</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Manitoba")}>Manitoba</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Prince Edward Island")}>Ontario</DropdownItem>
                        <DropdownItem onClick={() => this.setProvince("Saskatchewan")}>Saskatchewan</DropdownItem>
                        <DropdownItem> </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                {/*************** Status drop down*/}
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        {this.state.status}
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem onClick={() => this.setStatus("confirmed")}> confirmed </DropdownItem>
                        <DropdownItem onClick={() => this.setStatus("deaths")}> deaths </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <Button color="primary" onClick={() => this.handleSubmit()}>{this.state.go}</Button>{' '}
                <Link to="/CovidStatsWorld" >World Search</Link>
                {this.state.showGraph ?
                    <Chart options = {this.state.options} series = {this.state.series} type="line" height={350} /> :
                    null
                }



            </div>
        )
    }
}


export default CanadaCovid;