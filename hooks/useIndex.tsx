'use client'

import { IndexContext } from "@/contexts/indexContext";
import { useContext } from "react";

export const useIndex = () => {
    const context = useContext(IndexContext);

    if (context === undefined) {
        throw new Error('useIndex must be used within a IndexProvider');
    }
    
    return context;
}