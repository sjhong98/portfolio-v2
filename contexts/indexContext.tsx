'use client'

import { createContext, ReactNode, useEffect, useState } from "react";

interface IndexContextType {
    index: string;
    setIndex: (index: string) => void;
    freeze: boolean;
    setFreeze: (freeze: boolean) => void;
}

export const IndexContext = createContext<IndexContextType | undefined>(undefined);

export const IndexProvider = ({ children }: { children: ReactNode }) => {
    const [index, setIndex] = useState<string>('about');
    const [freeze, setFreeze] = useState(false);

    return (
        <IndexContext.Provider value={{ index, setIndex, setFreeze, freeze }}>
            {children}
        </IndexContext.Provider>
    );
}