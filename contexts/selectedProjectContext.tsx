'use client'

import { createContext, ReactNode, useState } from "react";

interface SelectedProjectContextType {
    selectedProject: any;
    setSelectedProject: (project: any) => void;
}

export const SelectedProjectContext = createContext<SelectedProjectContextType | undefined>(undefined);

export const SelectedProjectProvider = ({ children }: { children: ReactNode }) => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    if (!SelectedProjectContext) {
        throw new Error('ProjectDetail must be used within a SelectedProjectProvider');
    }

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
}