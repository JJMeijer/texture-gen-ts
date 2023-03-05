const getRandomHexValue = () => {
    const value = Math.floor(Math.random() * 256).toString(16);
    if (value.length === 1) {
        return `0${value}`;
    }

    return value;
};

export const getRandomHexColor = (): string => {
    return `#${getRandomHexValue()}${getRandomHexValue()}${getRandomHexValue()}`;
};
