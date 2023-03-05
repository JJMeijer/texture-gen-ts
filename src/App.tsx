import { Button, TextureCanvas, TextureSettings } from "./components";
import { useTextureStore } from "@stores";
import { downloadCanvasAsPng } from "./utility/download-canvas-as-png";

export const App = (): JSX.Element => {
    const forceUpdate = useTextureStore((state) => state.forceUpdate);

    return (
        <div className="flex flex-col items-center w-full min-h-full">
            <div className="flex flex-col items-center w-full h-full gap-8 lg:w-3/4">
                <div className="flex flex-col items-center w-full gap-6 pt-6">
                    <p className="text-3xl">Texture Generator</p>
                    <div className="flex flex-row gap-6">
                        <Button variant="primary" label="Generate" onClick={() => forceUpdate()} />
                        <Button variant="secondary" label="Download" onClick={() => downloadCanvasAsPng()} />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center h-full pb-16">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <TextureCanvas />
                        <TextureSettings />
                    </div>
                </div>
            </div>
        </div>
    );
};
