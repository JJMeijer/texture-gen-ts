import { MouseEvent } from "react";

interface ButtonProps {
    label: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const { label, onClick } = props;

    return (
        <button
            onClick={onClick}
            className="px-4 py-2 border hover:bg-cyan-700 border-cyan-800 bg-cyan-600 rounded-xl text-neutral-200"
        >
            {label}
        </button>
    );
};
