import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";

import Cards from "../components/Cards";
import "./Pages.css";

import { tilesData } from "../../__mocks__/mocksCard";

export const rowSize = value => {
  if (value < 10) {
    return 3
  } return 2
}

export const colSize = value => {
  if (value === 0 || value === 4) {
    return 4
  } return 2
}

export const Dashboard = props => {
  return (
    <div style={styles.container}>
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
              >
                <img src={tile.img} />
              </GridTile>
            )
          })
        }
      </GridList>
    </div>
  )
};

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
