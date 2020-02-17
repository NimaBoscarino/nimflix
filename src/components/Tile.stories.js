import React from 'react';
import Tile from './Tile';

export default {
  title: 'Tile',
  component: Tile,
};

export const PaddingtonTile = () => <Tile title={"Paddington 2"} rating={"PG"}/>;

export const FastAndFuriousTile = () => <Tile title={"Fast and Furious"} rating={"SPEEDY"}/>;

export const ManyTiles = () => {
  return (
    <>
      <Tile title={"Fast and Furious"} rating={"SPEEDY"}/>
      <Tile title={"Fast and Furious 2"} rating={"SPEEDY"}/>
      <Tile title={"Fast and Furious 3"} rating={"FURIOUS"}/>
      <Tile title={"Fast and Furious 4"} rating={"FATE"}/>
      <Tile title={"Fast and Furious 5"} rating={"TOO"}/>
      <Tile title={"Fast and Furious 6"} rating={"VIN DIESEL"}/>
    </>
  )
}
