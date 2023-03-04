import { Button } from "./Button";

export const Header = (): JSX.Element => {
    return (
        <div className="w-full py-4">
            <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:justify-evenly">
                <p className="text-3xl">Texture Generator</p>
                <Button label="Generate" />
            </div>
        </div>
    );
};
