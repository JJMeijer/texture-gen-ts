import { useTextureStore } from "../stores";
import { ColorPicker } from "./ColorPicker";
import { Fab } from "./Fab";
import { IconPlus } from "./icons";

export const TextureSettings = (): JSX.Element => {
    const palette = useTextureStore((state) => state.palette);
    const addColor = useTextureStore((state) => state.addColor);

    return (
        <div className="flex flex-col items-center w-1/2">
            <div className="flex flex-row flex-wrap justify-center gap-8">
                {Object.keys(palette).map((id) => {
                    return <ColorPicker key={id} id={id} />;
                })}
            </div>
            <div className="flex flex-row gap-4 p-4">
                <Fab title="Add Color" colorClass="primary" onClick={() => addColor()}>
                    <IconPlus />
                </Fab>
            </div>
        </div>
    );
};
