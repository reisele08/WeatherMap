import React, {Component, Fragment} from 'react';
import requestData from './RequestData';
import requestServer from "./RequestServer";
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

let newsData = [];
let uniqueKey = 0;

var categoryMap = {
  EQ: "Earthquake",
  TC: "Tropical Storm",
  FL: "Flood",
  VL: "Volcano",
  DR: "Drought"
};

class Profile extends React.Component {
    state = {
      name: '',
      newsFeedData: [],
      status: []
    };
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            newsFeedData: [],
            status: []
        };
        console.log(this.state.newsFeedData);

        if (localStorage.getItem("loggedIn") === "true") {
            let userData = JSON.parse(localStorage.getItem("userData"));
            let userName = userData.user.name;
            let firstName = userName.substr(0, userName.indexOf(" "));
            this.state.name = firstName;
        }

        // if(props.location.state !== undefined){
        //     this.state = {
        //         name: props.location.state.detail.name,
        //         email: props.location.state.detail.email,
        //         username:props.location.state.detail.username,
        //         newsFeedData: []
        //     };
        // }
    };

    processPredictHqData(data) {
      data.forEach(function(element) {
        newsData.push({
          key: "News"+uniqueKey++,
          title: element.title,
          description: element.description,
          startDate: new Date(element.start),
          category: element.category.charAt(0).toUpperCase() + element.category.slice(1),
          country: element.country,
        });
      });
    }

    processGdacsData(data) {
      data.features.forEach(function(element) {
        let newObj = {};
        newObj["key"] = "News"+uniqueKey++;
        newObj["title"] = element.properties.name;
        newObj["description"] = element.properties.severitydata.severitytext;
        newObj["startDate"] = new Date(element.properties.fromdate);
        newObj["category"] = categoryMap[element.properties.eventtype];
        newObj["country"] = element.properties.country;
        newsData.push(newObj);
      });
    }

    async getPredictHQData() {
      var response = await requestData.getData();
      if (response !== null) {
          this.processPredictHqData(response.data.results);
      }
    }

    async getGdacsEQ(){
      var response = await requestData.getGdacsEarthquakes();
      if (response !== null){
        this.processGdacsData(response.data);
        // console.log(response.data);
      }
    }

    async getGdacsTC(){
      var response = await requestData.getGdacsTropicalCyclones();
      if (response !== null){
        this.processGdacsData(response.data);
        // console.log(response.data);
      }
    }

    async getGdacsFL(){
      var response = await requestData.getGdacsFloods();
      if (response !== null){
        this.processGdacsData(response.data);
        // console.log(response.data);
      }
    }

    async getGdacsDR(){
      var response = await requestData.getGdacsDroughts();
      if (response !== null){
        this.processGdacsData(response.data);
        // console.log(response.data);
      }
    }

    async getGdacsVO(){
      var response = await requestData.getGdacsVolcanoes();
      if (response !== null){
        this.processGdacsData(response.data);
        // console.log(response.data);
      }
    }

    async getAllData() {
      await this.getPredictHQData();
      await this.getGdacsEQ();
      await this.getGdacsTC();
      await this.getGdacsFL();
      await this.getGdacsDR();
      await this.getGdacsVO();
    }

    async sortData() {
      let response = await this.getAllData();
      if (response !== null) {
        // Sort by date
        let sortedFeedData = newsData.sort(function(a,b){
          return (b.startDate - a.startDate);
        });

        let removedDuplicates = sortedFeedData.filter((element, index, self) =>
          index === self.findIndex((e) => (
            e.title === element.title
          ))
        );

        let splicedFeed = removedDuplicates.slice(0,20);

        let userData = JSON.parse(localStorage.getItem("userData"));
        let userName = userData.user.name;
        let firstName = userName.substr(0, userName.indexOf(" "));
        
        let response = await requestServer.getStatus();
        //console.log((response.data)[1].text);
        console.log(response.data.length)
        var statusfeed = []
        for (var i = 0; i < response.data.length; i++) {
          console.log((response.data)[i].text)
          statusfeed.push(<p>{(response.data)[i].text}</p>)
        }

        this.setState({
          name: firstName,
          newsFeedData: splicedFeed,
          status: statusfeed
        })
      }
    }

    componentDidMount() {
      this.sortData();
    }

    render(){
      return(
        <Container className="margin-top">
          <Row>
            <Col xs="4">
              <h1 className="margin-bottom-medium">Welcome back, {this.state.name}!</h1>
              <div className="center">
                <img className="img" src="usericon.jpg" alt="profile"></img>
                <h2>Status:</h2>
                {this.state.status}
              </div>
            </Col>
            <Col xs="8">
              <h1 className="center margin-bottom-medium">Latest News: Top 20</h1>
              <ul className="list-group">
                {this.state.newsFeedData.map(data => (
                  <li key={data.key} className="list-group-item">
                    <h2>{data.title}</h2>
                    <p><em>{data.startDate.toString()}</em></p>
                    <p>Category: {data.category}</p>
                    <p>Location: {data.country}</p>
                    <p>{data.description}</p>
                  </li>
                ))}
              </ul>

            </Col>
          </Row>
        </Container>
      );
    }
}
export default Profile