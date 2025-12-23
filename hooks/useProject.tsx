'use client'

import { useContext } from "react";
import { SelectedProjectContext } from "@/contexts/selectedProjectContext";

export const useProject = () => {
    const context = useContext(SelectedProjectContext);

    if (context === undefined) {
        throw new Error('useProject must be used within a SelectedProjectProvider');
    }
    
    return context;
}