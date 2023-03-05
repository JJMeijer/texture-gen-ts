import { useTextureStore } from "../stores";
import { ColorPicker } from "./ColorPicker";
import { Fab } from "./Fab";
import { IconPlus } from "./icons";

export const TextureSettings = (): JSX.Element => {
    const palette = useTextureStore((state) => state.palette);
    const addColor = useTextureStore((state) => state.addColor);

    const colorIds = Object.keys(palette);

    return (
        <div className="flex flex-col-reverse items-center gap-4 lg:flex-row lg:items-start">
            <div className="flex flex-col-reverse lg:flex-col lg:h-[500px] gap-8 px-4 lg:overflow-y-auto scrollbar-thin scrollbar-track-neutral-300/40 scrollbar-thumb-neutral-400/40">
                {colorIds.map((id) => {
                    return <ColorPicker key={id} id={id} />;
                })}
            </div>
            {colorIds.length === 0 && <div className="text-center w-80 text-neutral-800/50">Add a Color</div>}
            <div className="py-6">
                <Fab title="Add Color" colorClass="primary" onClick={() => addColor()}>
                    <IconPlus />
                </Fab>
            </div>
        </div>
    );
};
