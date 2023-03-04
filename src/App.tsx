import React from "react";

import { Header, Content } from "./components";

export const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-col items-center w-full h-full md:w-3/4">
                <Header />
                <Content />
            </div>
        </div>
    );
};
