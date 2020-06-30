import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { State, Color } from '../store/texture/types';

const useStyles = makeStyles((theme) => ({
  texture: {
    border: '1px solid #212223',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const getCanvasElement = (id: string): HTMLCanvasElement => {
  const canvas = document.getElementById(id);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(`The Element of id ${id} is not a HTMLCanvasElement.`);
  }

  return canvas;
};

const generateHexArray = (palette: Color[]): string[] => {
  const hexArray: string[] = [];

  palette.forEach((color: Color) => {
    for (let i = 0; i < color.prio; i++) {
      hexArray.push(color.hex);
    }
  });

  return hexArray;
};

const getRandomColorFromHexArray = (hexArray: string[]): string => {
  const randomIndex: number = Math.floor(Math.random() * hexArray.length);
  return hexArray[randomIndex];
};

export const TextureCanvas: React.FC = () => {
  const palette = useSelector((state: State) => state.core.palette);
  const size = useSelector((state: State) => state.core.size);

  const { width, height } = size;

  const classes = useStyles();
  const hexArray: string[] = generateHexArray(palette);

  useEffect(() => {
    const canvas: HTMLCanvasElement = getCanvasElement(classes.texture);
    const context = canvas.getContext('2d');

    if (context) {
      for (let col = 0; col < width; col += 20) {
        for (let row = 0; row < height; row += 20) {
          context.fillStyle = getRandomColorFromHexArray(hexArray);
          context.fillRect(col, row, 20, 20);
        }
      }
    }
  });

  return <canvas width={width} height={height} id={classes.texture}></canvas>;
};
