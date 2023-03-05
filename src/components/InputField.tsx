import { ChangeEvent, useEffect, useState } from "react";

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    pattern?: RegExp;
    errorText?: string;
}

export const InputField = (props: InputFieldProps): JSX.Element => {
    const { label, value: outerValue, onChange: onOuterChange, pattern } = props;

    const [patternError, setPatternError] = useState(false);
    const [value, setValue] = useState(outerValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (pattern && !newValue.match(pattern)) {
            setPatternError(true);
            return;
        } else {
            setPatternError(false);
        }

        onOuterChange(newValue);
    };

    useEffect(() => {
        if (outerValue !== value) {
            setValue(outerValue);
        }
    }, [outerValue]);

    return (
        <label className="flex flex-row items-center justify-between gap-2">
            {label}
            <input
                value={value}
                onChange={onChange}
                type="text"
                className={`p-1 border rounded-md bg-neutral-200 outline-none focus:ring-2 ring-cyan-800 border-neutral-400/50 ${
                    patternError ? "ring-red-900 ring-2" : "ring-cyan-800"
                }`}
            />
        </label>
    );
};
