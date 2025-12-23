'use client'

import { useContext } from "react";
import { ModeContext } from "@/contexts/modeContext";

export const useMode = () => {
    const context = useContext(ModeContext);

    if (context === undefined) {
        throw new Error('useMode must be used within a ModeProvider');
    }
    
    return context;
}