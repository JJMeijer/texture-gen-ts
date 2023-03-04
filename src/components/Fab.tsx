import { MouseEvent, ReactNode } from "react";

interface FabProps {
    colorClass: "primary" | "secondary";
    title: string;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const colors = {
    primary: "hover:bg-emerald-800 border-emerald-900 text-neutral-200 bg-emerald-700",
    secondary: "hover:bg-amber-800 border-amber-900 text-neutral-200 bg-amber-700",
} as const;

export const Fab = (props: FabProps): JSX.Element => {
    const { children, title, colorClass, onClick } = props;

    const color = colors[colorClass];

    return (
        <div
            {...(onClick ? { onClick } : null)}
            title={title}
            className={`flex items-center justify-center w-8 h-8 p-1.5 text-xl rounded-full cursor-pointer ${color} border-2 shadow-xl`}
        >
            {" "}
            {children}
        </div>
    );
};
