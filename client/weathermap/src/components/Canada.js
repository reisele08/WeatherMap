
import React, {Component} from 'react';
import Chart from 'react-apexcharts';
import Landing from "./LandingPage";
import requestServer from "./RequestServer";
class ApexChart extends Component {
    constructor(props) {
        super(props);
        this.receivedData = false;

        var response = requestServer.getCanadaConfirmed();
        this.state = {

                received:false,

                series: [{
                    name: "Desktops",
                    data: [ ]//************Here ***************** is where you set the Y data
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
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: 'Canada confirmed cases',
                        align: 'left'
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

    getData() {
        var response = requestServer.getCanadaConfirmed();
        console.log(response.data);
        this.updateGraphData(response.data)

    }

    updateGraphData(controllerCall) {

        var options = {...this.state.options};
        options.xaxis.categories = controllerCall.dates;

        this.setState({options});

        var series = {...this.state.series};
        series.data = controllerCall.values;
        this.setState({series});

        this.setState({reveived:true});

    }

    render() {
        let graph;//conditions?
        graph = <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
        return (

            <div id="chart">
                {graph}
            </div>
        )
    }
}


export default ApexChart;