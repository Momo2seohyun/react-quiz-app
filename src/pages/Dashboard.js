import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";

import Cards from "../components/Cards";
import "./Pages.css";

import { tilesData } from "../../__mocks__/mocksCard";

export const calSize = size => {
  if (size === "big") {
    return 2;
  }
  return 1;
};

export const Dashboard = props => {
  return (
    <div style={styles.root}>
      <GridList cols={6} padding={8} style={styles.gridList}>
        {tilesData.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            titleStyle={{ color: tile.color }}
            actionIcon={
              <IconButton>
                {tile.setting
                  ? <ArrowForward color={tile.color} />
                  : <PlayArrow color={tile.color} />}
              </IconButton>
            }
            titleBackground={tile.titleBackground}
            cols={calSize(tile.cols)}
            rows={calSize(tile.rows)}
            className="gridItem"
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#444",
    padding: "8px 0px"
  },
  gridList: {
    width: "100vw",
    height: "100vh",
    overflowY: "hidden"
  }
};

export default Dashboard;
