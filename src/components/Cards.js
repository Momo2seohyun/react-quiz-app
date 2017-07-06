import React, { Component } from "react";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";

import "./Card.css";

export const Cards = props => {
  let { tile, style } = props
  const styles = {
    actions: {
      backgroundColor: tile.titleBackground,
      margin: '0px',
      bottom: '0px'
    },
    iconButton: {
      textAlign: 'right'
    },
    img: {
      maxWidth: '100%'
    }
  };
  return (
    <Card className="dashBoardCard" style={style}>
      <CardTitle title={tile.title} />
      <CardText>
        <div>{tile.title}</div>
      </CardText>
      <CardActions style={styles.actions}>
        <IconButton style={styles.iconButton}><PlayArrow /></IconButton>
      </CardActions>
    </Card>
  );
};



export default Cards;
