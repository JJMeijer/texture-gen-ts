import { ChromePicker, ColorResult } from "react-color";

import { useTextureStore } from "@stores";
import { IconPlus } from "./icons";
import { InputField } from "./InputField";
import { useEffect, useState } from "react";

interface ColorPickerProps {
    id: string;
}

export const ColorPicker = (props: ColorPickerProps): JSX.Element => {
    const { id } = props;

    const palette = useTextureStore((state) => state.palette);
    const updateColor = useTextureStore((state) => state.updateColor);
    const removeColor = useTextureStore((state) => state.removeColor);

    const color = palette[id];

    if (!color) {
        throw new Error("Unexpected Error");
    }

    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    const onHexValueChange = (value: string) => {
        updateColor(id, {
            ...color,
            hex: value,
        });
    };

    const onPrioValueChange = (value: string) => {
        updateColor(id, {
            ...color,
            prio: parseInt(value),
        });
    };

    const onColorSpanClick = () => {
        setColorPickerOpen(!colorPickerOpen);
    };

    const onChromePickerChange = (colorResult: ColorResult) => {
        updateColor(id, {
            ...color,
            hex: colorResult.hex,
        });
    };

    useEffect(() => {
        const globalClickHandler = (event: globalThis.MouseEvent) => {
            if (!event.target || !(event.target instanceof HTMLElement)) {
                return;
            }

            if (event.target.matches(".color-display, .color-display *")) {
                return;
            }

            setColorPickerOpen(false);
        };

        if (colorPickerOpen) {
            document.addEventListener("click", globalClickHandler);
        }

        return () => {
            document.removeEventListener("click", globalClickHandler);
        };
    }, [colorPickerOpen]);

    return (
        <div className="flex flex-row items-center gap-4 p-2 border rounded-lg border-neutral-400/50">
            <div className="relative flex color-display">
                <span
                    onClick={onColorSpanClick}
                    className="w-12 h-12 rounded-full cursor-pointer bg-emerald-50"
                    style={{ backgroundColor: color.hex }}
                />
                <div className={`absolute left-[120%] -top-full ${colorPickerOpen ? "flex" : "hidden"}`}>
                    <ChromePicker color={color.hex} onChange={onChromePickerChange} />
                </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                <InputField
                    label="Hex:"
                    value={color.hex}
                    onChange={onHexValueChange}
                    pattern={/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/}
                />
                <InputField label="Prio:" value={String(color.prio)} onChange={onPrioValueChange} pattern={/\d+/} />
            </div>
            <div
                onClick={() => removeColor(id)}
                title="Remove Color"
                className="flex items-start rotate-45 cursor-pointer text-neutral-600/50 hover:text-neutral-600"
            >
                <IconPlus />
            </div>
        </div>
    );
};
