import { TextureCanvas } from "./TextureCanvas";
import { TextureSettings } from "./TextureSettings";

export const Content = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 pb-16 lg:flex-row-reverse">
            <TextureSettings />
            <TextureCanvas />
        </div>
    );
};
