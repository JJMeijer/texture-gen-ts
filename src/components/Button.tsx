interface ButtonProps {
    label: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const { label } = props;

    return (
        <button className="px-4 py-2 border hover:bg-cyan-700 border-cyan-800 bg-cyan-600 rounded-xl text-neutral-200">
            {label}
        </button>
    );
};
