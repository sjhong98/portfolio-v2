'use client'

import mainContent from "@/contents/main"
import { useMode } from "@/hooks/useMode";
import Image from "next/image"
import OverviewContainer from "./overviewContainer";

export default function Skill() {
    const { mode, switchMode } = useMode();
    
    const renderTextWithHighlight = (text: string) => {
        const parts = text.split(/(\|[^|]+\|)/g);
        return parts.map((part, index) => {
            if (part.startsWith('|') && part.endsWith('|')) {
                const content = part.slice(1, -1);
                return (
                    <span key={index} className='text-sub-light cursor-pointer'>
                        {content}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <OverviewContainer className='flex flex-col gap-6 overflow-x-scroll' title='skill' threshold={0.7}>
            <h2 className='text-md font-bold text-sub'>Skills</h2>
            <div className='flex flex-row gap-8 w-full flex-wrap'>
                <p className='text-[14px] sm:text-[16px] text-sub whitespace-pre-wrap break-keep leading-[25px]'>
                    {renderTextWithHighlight(mainContent.skillDescriptions)}
                </p>
                <button
                    onClick={() => switchMode('skill')}
                    className='flex w-full rounded-xl justify-center items-center py-2 border-[1px] border-sub-darker cursor-pointer group hover:border-sub transition-all duration-150'
                >
                    <p className='text-sm text-sub font-extralight group-hover:text-sub-light transition-all duration-150'>
                        스킬 자세히
                    </p>
                </button>
            </div>
        </OverviewContainer>
    )
}