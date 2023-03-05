import { CANVAS_ID } from "../constants";

export const downloadCanvasAsPng = () => {
    const canvasElement = document.getElementById(CANVAS_ID);

    if (!(canvasElement instanceof HTMLCanvasElement)) {
        throw new Error("Canvas is unexpectedly missing");
    }

    const data = canvasElement.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "texture-image.png";
    link.href = data.replace("image/png", "image/octet-stream");
    link.click();
};
