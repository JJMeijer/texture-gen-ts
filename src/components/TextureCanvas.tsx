import { Color, Palette } from "@types";
import { useEffect, useRef } from "react";
import { useTextureStore } from "@stores";

const WIDTH = 400;
const HEIGHT = 400;

const generateHexArray = (palette: Palette): string[] => {
    const hexArray: string[] = [];

    Object.values(palette).forEach((color: Color) => {
        for (let i = 0; i < color.prio; i++) {
            hexArray.push(color.hex);
        }
    });

    return hexArray;
};

export const TextureCanvas = (): JSX.Element => {
    const palette = useTextureStore((state) => state.palette);
    const update = useTextureStore((state) => state.update);

    const hexArray: string[] = generateHexArray(palette);

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

                    context.fillStyle = randomFillStyle || "#e1e1e1";
                    context.fillRect(col, row, 20, 20);
                }
            }
        }
    }, [hexArray, update]);

    return (
        <canvas
            className="border w-[400px] h-[400px] rounded-md border-neutral-500/50"
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
        ></canvas>
    );
};
