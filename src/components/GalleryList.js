import React, { Component } from "react";

import GalleryData from './GalleryData'
import { data } from '../helpers/ItemData'

class GalleryList extends Component {
  render() {
    const Gallery = data.map((data) => {
      return <GalleryData data={data} key={data.title} />
    })
    return (
      <div id="portfolio" className="section gray">
        <div className="container">
          <div className="gallery row">
            {Gallery}
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryList