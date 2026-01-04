'use client'

import { useProject } from "@/hooks/useProject";
import { useMediaQuery } from "@mui/material";
import { useEffect, createContext, useState, ReactNode } from "react";

interface ModeContextType {
    mode: string | undefined;
    switchMode: (mode: string | undefined) => void;
    overviewTransparent: boolean;
    setOverviewTransparent: (overviewTransparent: boolean) => void;
    lastMode: string | undefined;
}

export const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [mode, setMode] = useState<undefined | string>();
    const [lastMode, setLastMode] = useState<undefined | string>();
    const [overviewTransparent, setOverviewTransparent] = useState(false);

    const { setSelectedProject } = useProject();

    const switchMode = (mode: string | undefined) => {
        setMode(mode);
        if (mode === undefined) {
            setTimeout(() => {
                setLastMode(mode);
                setSelectedProject(null);
            }, isMobile ? 300 : 150);
        } else {
            setLastMode(mode);
        }
    }

    useEffect(() => {
        if (mode !== undefined) setOverviewTransparent(true);
        else setOverviewTransparent(false);
    }, [mode])

    useEffect(() => {
        console.log('overviewTransparent', overviewTransparent)
    }, [overviewTransparent])

    return (
        <ModeContext.Provider value={{ mode, switchMode, overviewTransparent, setOverviewTransparent, lastMode }}>
            {children}
        </ModeContext.Provider>
    );
}