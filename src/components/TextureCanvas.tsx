import { Color, Palette } from "@types";
import { useEffect, useRef } from "react";
import { useTextureStore } from "@stores";

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
    const size = useTextureStore((state) => state.size);

    const { width, height } = size;

    const hexArray: string[] = generateHexArray(palette);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        if (context) {
            for (let col = 0; col < width; col += 20) {
                for (let row = 0; row < height; row += 20) {
                    const randomFillStyle = hexArray[Math.floor(Math.random() * hexArray.length)];

                    context.fillStyle = randomFillStyle || "#e1e1e1";
                    context.fillRect(col, row, 20, 20);
                }
            }
        }
    }, [hexArray]);

    return (
        <canvas
            className="w-1/2 border rounded-md border-neutral-500/50"
            ref={canvasRef}
            width={width}
            height={height}
        ></canvas>
    );
};
