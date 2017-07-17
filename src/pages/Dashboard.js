import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";

import Cards from "../components/Cards";
import "./Pages.css";

import { tilesData } from "../../__mocks__/mocksCard";

import init from '../../public/js/init';

export const rowSize = value => {
  if (value < 10) {
    return 3
  }
  return 2
}

export const colSize = value => {
  if (value === 0 || value === 4) {
    return 4
  }
  return 2
}

export class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    init()
  }
  render() {
    return (
      <div id="portfolio" className="section gray">
      <div className="container">
        <div className="gallery row">
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="images/001.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Aquamarine</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Aquamarine</h3>
                  <span className="price">$29.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img src="images/002.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Sun</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Sun</h3>
                  <span className="price">$9.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter bigbang">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="images/003.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Big Bang 1</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Big Bang 1</h3>
                  <span className="price">$23.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img src="images/004.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Maze</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Maze</h3>
                  <span className="price">$11.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img src="images/005.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Ice</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Ice</h3>
                  <span className="price">$14.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img src="images/006.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Cave</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Cave</h3>
                  <span className="price">$4.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img src="images/007.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Grapefruit</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Grapefruit</h3>
                  <span className="price">$14.99</span>
                </div>

                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter bigbang">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="images/008.jpg" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Big Bang 2</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Big Bang 2</h3>
                  <span className="price">$40.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter bigbang">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="http://placehold.it/350x280" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Big Bang 3</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Big Bang 3</h3>
                  <span className="price">$18.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>

          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter sacred">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="http://placehold.it/350x250" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Circle</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Circle</h3>
                  <span className="price">$10.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>

          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter sacred">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="http://placehold.it/350x260" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Triangle</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Triangle</h3>
                  <span className="price">$10.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>

          <div className="col l4 m6 s12 gallery-item gallery-expand gallery-filter sacred">
            <div className="gallery-curve-wrapper">
              <a className="gallery-cover gray">
                <img className="responsive-img" src="http://placehold.it/350x300" alt="placeholder" />
              </a>
              <div className="gallery-header">
                <span>Hexagon</span>
              </div>
              <div className="gallery-body">
                <div className="title-wrapper">
                  <h3>Hexagon</h3>
                  <span className="price">$10.99</span>
                </div>
                <p className="description">
Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.</p>
                <p className="description">
Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.</p>
              </div>
              <div className="gallery-action">
                <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">favorite</i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    /*<div style={styles.container}>
      <GridList cols={8} padding={8} style={styles.gridList}>
        {
          tilesData.map((tile, index) => {
            return (
              <GridTile
                key={index}
                title={tile.title}
                titleStyle={{ color: tile.color }}
                titleBackground={tile.titleBackground}
                actionIcon={<IconButton><PlayArrow color={tile.color} /></IconButton>}
                cols={colSize(index)}
                rows={rowSize(index)}
                className="gridItem"
              >
                <img src={tile.img} />
              </GridTile>
            )
          })
        }
      </GridList>
    </div>*/
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    overflowY: 'hidden',
    justifyContent: 'space-around',
    backgroundColor: "#444",
    padding: "8px 0px",
    width: '100vW',
    height: '100vH'
  },
  gridList: {
    width: '100vW',
    height: '100vH',
    overflowY: 'auto',
  }
};

export default Dashboard;
