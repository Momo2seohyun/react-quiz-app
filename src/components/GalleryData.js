import React, { Component } from "react";

import init from '../../public/js/init';

class GalleryData extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    init()
  }

  render() {
    const data = this.props.data
    const styles = {
      galleryHeader: {
        backgroundColor: data.titleBackground,
        color: data.color
      }
    }
    return (
      <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
        <div className="gallery-curve-wrapper">
          <a className="gallery-cover gray">
            <img className="responsive-img" src={data.img} alt="placeholder" />
          </a>
          <div className="gallery-header" style={styles.galleryHeader}>
            <span>{data.title}</span>
          </div>
          <div className="gallery-body">
            <div className="title-wrapper">
              <h3>{data.title}</h3>
            </div>
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