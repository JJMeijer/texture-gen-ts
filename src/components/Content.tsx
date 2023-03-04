import { TextureCanvas } from "./TextureCanvas";
import { TextureSettings } from "./TextureSettings";

export const Content = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center h-full pb-16">
            <div className="flex flex-row gap-8">
                <TextureCanvas />
                <TextureSettings />
            </div>
        </div>
    );
};
