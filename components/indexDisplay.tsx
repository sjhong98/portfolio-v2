'use client'

import { useIndex } from "@/hooks/useIndex";
import { useCallback, useEffect, useState } from "react";

export default function IndexDisplay() {
    return (
        <div className='flex flex-col gap-2 mt-10'>
            <IndexItem title='자기소개서' indexTitle='about' />
            <IndexItem title='스킬' indexTitle='skill' />
            <IndexItem title='프로젝트' indexTitle='project' />
            <IndexItem title='연락처' indexTitle='contact' />
        </div>
    )
}

function IndexItem({ title, indexTitle }: { title: string, indexTitle: string }) {
    const { index, setIndex, setFreeze } = useIndex();

    const [isView, setIsView] = useState(false);

    useEffect(() => {
        if (index === indexTitle) {
            setIsView(true);
        } else {
            setIsView(false);
        }
    }, [index, indexTitle])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setFreeze(false);
        });
    }, [])

    const handleClick = useCallback(() => {
        document.getElementById(indexTitle)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setFreeze(true);
        setIndex(indexTitle);
    }, [indexTitle, setIndex, setFreeze])

    return (
        <div
            className={`flex gap-1 items-center cursor-pointer z-[100] ${isView ? 'text-sub' : 'text-sub-light'} transition-all duration-150`}
            onClick={handleClick}
        >
            <div className={`h-[2px] bg-sub-darker duration-150 ${isView ? 'w-14 bg-sub-light' : 'w-10 bg-sub-darker'} transition-all duration-150`} onClick={() => setIndex(index)} />
            <p className={`font-medium h-5 duration-150 ${isView ? 'text-sub-light text-md' : 'text-sub text-sm'} transition-all duration-150`}>{title}</p>
        </div>
    )
}