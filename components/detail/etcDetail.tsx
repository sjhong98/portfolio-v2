'use client'

import mainContent from "@/contents/main";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useMode } from "@/hooks/useMode";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Close } from "@mui/icons-material";

export default function EtcDetail() {
    const { mode, switchMode } = useMode();

    return (
        <div className="flex flex-col gap-8 pt-10">
            <button
                style={{
                    opacity: mode !== undefined ? 1 : 0,
                    transition: 'all 0.3s ease-in-out',
                    cursor: mode !== undefined ? 'pointer' : 'default',
                    pointerEvents: mode !== undefined ? 'auto' : 'none',
                }}
                className='absolute left-[0%] top-[5%] md:block hidden'
                onClick={() => switchMode(undefined)}
            >
                <ArrowBackIcon />
            </button>
            <div className='sm:hidden flex absolute left-6 top-7 cursor-pointer' onClick={() => switchMode(undefined)}>
                <Close sx={{ fontSize: 30, color: 'var(--color-sub-light)' }} />
            </div>

            <InfiniteMovingCards
                items={mainContent.trip}
                direction="left"
                speed="slow"
                className='md:relative absolute left-0 md:top-0 top-80'
            />
            <p className='sm:text-xl text-lg text-sub-light whitespace-pre-wrap break-keep font-bold'>
                {mainContent.tripDetail.title}
            </p>
            <p className='sm:text-[16px] text-[16px] text-sub-light whitespace-pre-wrap break-keep font-light'>
                {mainContent.tripDetail.content}
            </p>
        </div>
    )
}