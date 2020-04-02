
import React, {Component} from 'react';
import Chart from 'react-apexcharts';

import requestServer from "./RequestServer";

//
class ApexChart extends Component {
    constructor(props) {
        super(props);
        this.receivedData = false;


        this.state = {
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
                        text: 'Canada confirmed cases',
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
        this.getData();
        //need to retrun it as 2arrays;
    }
    async getData() {
        var response = await requestServer.getCanadaConfirmed();
        console.log(response.data);
        this.updateGraphData(response.data)
    }

    formatDate(dateTimeArray) {
        var formated = [];

        dateTimeArray.map((date) => {
            var splitdate = date.split("T");
            //var formatDate = new Date(splitdate[0].replace(/-/g,"/")).getTime();
            var formated = splitdate[0].replace(/-/g,"/");
            return formated;

        });
        console.log(dateTimeArray)
        return dateTimeArray;

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

    render() {
        let graph;//conditions?
        graph = <Chart options = {this.state.options} series = {this.state.series} type="line" height={350} />
        return (

            <div id="chart">
                {graph}
            </div>
        )
    }
}


export default ApexChart;