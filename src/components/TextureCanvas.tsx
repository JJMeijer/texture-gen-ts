import { useEffect, useRef } from "react";

import { useTextureStore } from "@stores";
import { getColorChoicesArray, getRandomHexColor } from "@utility";
import { CANVAS_ID } from "../constants";

const WIDTH = 400;
const HEIGHT = 400;

export const TextureCanvas = (): JSX.Element => {
    const palette = useTextureStore((state) => state.palette);
    const update = useTextureStore((state) => state.update);

    const hexArray: string[] = getColorChoicesArray(palette);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        if (context) {
            for (let col = 0; col < WIDTH; col += 20) {
                for (let row = 0; row < HEIGHT; row += 20) {
                    const randomFillStyle = hexArray[Math.floor(Math.random() * hexArray.length)];

                    context.fillStyle = randomFillStyle || getRandomHexColor();
                    context.fillRect(col, row, 20, 20);
                }
            }
        }
    }, [hexArray, update]);

    return (
        <canvas
            id={CANVAS_ID}
            className="border w-[400px] h-[400px] rounded-md border-neutral-500/50"
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
        ></canvas>
    );
};
