
import React, {Component} from 'react';
import Chart from 'react-apexcharts';

import requestServer from "./RequestServer";
import {Button,UncontrolledButtonDropdown,ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
//
class ApexChart extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);


        this.setCountry = this.setCountry.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.state = {

                showGraph: false,
                country:"Select Country",
                status:"Select Status",
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

        var response = await requestServer.GetCoronabyCountryStatus(country, status);
        console.log(response.data);
        this.updateGraphData(response.data)
    }

    formatDate(dateTimeArray) {
        var formated = [];

        var formatedTime = dateTimeArray.map(function(date) {
            var splitdate = date.split("T");

            var formated = splitdate[0].replace(/-/g,"/");
            return formated;
        });

        console.log(formatedTime)
        return formatedTime;

    }
    updateGraphData(controllerCall) {

        var options = {...this.state.options};
        options.xaxis.categories = this.formatDate(controllerCall.dates);
        this.setState( options);

        var series = {...this.state.series};
        series[0].data = controllerCall.values;
        series[0].name = "active Cases";

        this.setState(series);

    }



    handleSubmit() {

        this.getData(this.state.country,this.state.status);
        this.setState(state => ({ showGraph: !state.showGraph    }))

        var options = {...this.state.options};
        options.title.text = this.state.country + " " + this.state.status;

        this.setState(options);
    }

    setCountry(countryName){
        this.setState(state => ({ country: countryName  }));



    }
    setStatus(statusType) {
        this.setState(state => ({ status: statusType  }));



    }



    render() {
        let graph;//conditions?
        graph = <Chart options = {this.state.options} series = {this.state.series} type="line" height={350} />

        return (
            <div id="chart">

                {/************** Country drop down*/}
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        {this.state.country}
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem onClick={() => this.setCountry("Canada") }>Canada</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("US")}>US</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("Italy")}>Italy</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("China")}>China</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("Korea")}>Korea</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("Spain")}>Spain</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("Austria")}>Austria</DropdownItem>
                        <DropdownItem onClick={() => this.setCountry("United-Kingdom")}>UK</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>

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
                        <DropdownItem onClick={() => this.setStatus("recovered")}> recovered </DropdownItem>
                        <DropdownItem onClick={() => this.setStatus("deaths")}> deaths </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <Button color="primary" onClick={() => this.handleSubmit()}>Go</Button>{' '}

                {this.state.showGraph ?
                    <Chart options = {this.state.options} series = {this.state.series} type="line" height={350} /> :
                    null
                }

            </div>
        )
    }
}


export default ApexChart;