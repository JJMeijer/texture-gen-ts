import { MouseEvent } from "react";

interface ButtonProps {
    label: string;
    variant: "primary" | "secondary";
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const colorOptions = {
    primary: "hover:bg-cyan-700 border-cyan-800 bg-cyan-600 text-neutral-200",
    secondary: "hover:bg-neutral-700 border-neutral-800 bg-neutral-600 text-neutral-200",
} as const;

export const Button = (props: ButtonProps): JSX.Element => {
    const { label, onClick, variant } = props;

    const colors = colorOptions[variant];

    return (
        <button onClick={onClick} className={`px-4 py-2 border-2 rounded-xl ${colors}`}>
            {label}
        </button>
    );
};
