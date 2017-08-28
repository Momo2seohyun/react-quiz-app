import React, { Component } from "react";
import axios from 'axios'
import moment from 'moment'

import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

//import init from '../../public/js/init';
import QuizOne from './quizone/QuizOne';

class GalleryData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finished: false,
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
    (function($){
  $(function(){


    // Navbar
    $(".button-collapse").sideNav();
    var categories = $('nav .categories-container');
    if (categories.length) {
      categories.pushpin({ top: categories.offset().top });
      var $links = categories.find('li');
      $links.each(function() {
        var $link = $(this);
        $link.on('click', function() {
          $links.removeClass('active');
          $link.addClass('active');
          var hash = $link.find('a').first()[0].hash.substr(1);
          var $galleryItems = $('.gallery .gallery-item');

          $galleryItems.stop().addClass('gallery-filter').fadeIn(100);

          if (hash !== 'all') {
            var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
            $galleryFilteredOut.removeClass('gallery-filter').hide();
          }

          // transition layout
          $masonry.masonry({
            transitionDuration: '.3s'
          });
          // only animate on layout
          $masonry.one( 'layoutComplete', function( event, items ) {
            $masonry.masonry({
              transitionDuration: 0
            });
          });
          setTimeout(function() {

          $masonry.masonry('layout');
          }, 1000);
        });
      });
    }


    // Home
    $('.carousel:not(.carousel-slider)').carousel({
      dist: 0,
      padding: 10
    });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      onCycleTo: function(el) {
        $('.nav-background img').removeClass('active');
        $('.nav-background img').eq(el.index()).addClass('active');
      }
    });


    // Masonry Grid
    var $masonry = $('.gallery');
    $masonry.masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.gallery-filter',
      // use element for option
      columnWidth: '.gallery-filter',
      // no transitions
      transitionDuration: 0
    });
    // layout Masonry after each image loads
    $masonry.imagesLoaded(function() {
      $masonry.masonry('layout');
    });
    $('a.filter').click(function (e) {
      e.preventDefault();
    });



    // Contact Form Icon
    $("form .form-control").focus(function() {
      $(this).siblings("label").first().children("i").first().css({"color": "#aaa", "left": 0});
    });
    $("form .form-control").blur(function() {
      $(this).siblings("label").first().children("i").first().css({"color": "transparent", "left": "-20px"});
    });


    var onShow = function(el) {
      var carousel = el.find('.carousel.initialized');
      carousel.carousel({
        dist: 0,
        padding: 10
      });
    };
    $('.gallery-expand').galleryExpand({
      onShow: onShow
    });

    $('.blog .gallery-expand').galleryExpand({
      onShow: onShow,
      fillScreen: true,
      inDuration: 500,
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
    // init()
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
    const { data } = this.props
    let { weather } = this.state
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
              <h3>{data.title}</h3>
              {/*<h3>{weather.location.city + ", " + weather.location.country}</h3>
              <span className="price">{weather.lastBuildDate}</span>*/}
            </div>
           {/* <p className="description">Temperature - {weather.item.condition.temp + "° " + weather.units.temperature + ", " + weather.item.condition.text}</p>
            <p className="description">Wind - {weather.wind.speed + " " + weather.units.speed}</p>
            <p className="description">Sunrise - {weather.astronomy.sunrise}</p>
            <p className="description">Sunset - {weather.astronomy.sunset}</p>*/}
            {data.title === "Food & Drink" ? <QuizOne titleColor={data.titleColor} data={data} /> : undefined}
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