import React, { Component } from "react";
import axios from 'axios'
import moment from 'moment'

import init from '../../public/js/init';

class GalleryData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {
        astronomy: {
          sunrise: "",
          sunset: ""
        },
        item: {
          condition: {
            temp: "",
            text: ""
          }
        },
        lastBuildDate: "",
        location: {
          city: "",
          country: ""
        },
        units: {
          speed: "",
          temperature: ""
        },
        wind: {
          speed: ""
        }
      }
    }
  }

  componentDidMount() {
    init()
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chiangmai%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
      .then((response) => {
        this.setState({
          weather: response.data.query.results.channel
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {data} = this.props
    let {weather} = this.state
    return (
      <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
        <div className="gallery-curve-wrapper">
          <a className="gallery-cover gray">
            <img className="responsive-img" src={data.img} alt="placeholder" />
          </a>
          <div className={`gallery-header ${data.titleColor}`}>
            <span>{data.title}</span>
          </div>
          <div className="gallery-body">
            <div className="title-wrapper">
              <h3>{weather.location.city + ", " + weather.location.country}</h3>
              <span className="price">{weather.lastBuildDate}</span>
            </div>
            <p className="description">Temperature - {weather.item.condition.temp + "° " + weather.units.temperature + ", " + weather.item.condition.text}</p>
            <p className="description">Wind - {weather.wind.speed + " " + weather.units.speed}</p>
            <p className="description">Sunrise - {weather.astronomy.sunrise}</p>
            <p className="description">Sunset - {weather.astronomy.sunset}</p>
          </div>
          <div className="gallery-action">
            <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryData