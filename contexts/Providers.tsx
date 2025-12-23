import { IndexProvider } from "./indexContext";
import { ModeProvider } from "./modeContext";
import { SelectedProjectProvider } from "./selectedProjectContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SelectedProjectProvider>
            <ModeProvider>
                <IndexProvider>
                    {children}
                </IndexProvider>
            </ModeProvider>
        </SelectedProjectProvider>
    )
}