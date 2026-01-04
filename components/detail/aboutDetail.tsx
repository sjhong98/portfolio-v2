'use client'

import mainContent from "@/contents/main";
import { useMode } from "@/hooks/useMode";
import { Close } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AboutDetail() {
    const { mode, switchMode } = useMode();

    return (
        <div className='flex flex-col gap-12 pt-5'>
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
            {
                Object.entries(mainContent.aboutDetail).map(([key, value]) => (
                    <div key={value.section} className='flex flex-col gap-1'>
                        <div className='flex flex-row gap-2 items-center'>
                            <h1 className='text-lg font-bold text-sub-light w-9'>{value.section}</h1>
                            <div className='w-full rounded-sm bg-sub h-0.5' />
                        </div>
                        <div className='ml-2 flex flex-col gap-10'>
                            {
                                typeof value.content === 'string' ?
                                    <p className='sm:text-[16px] text-[15px] text-sub-light whitespace-pre-wrap break-keep leading-[26px] font-light'>
                                        {value.content}
                                    </p>
                                    :
                                    value.content.map((item, index) => (
                                        <div key={index}>
                                            <p className='text-lg font-black text-sub-light'>{item.title}</p>
                                            <p>{`\n`}</p>
                                            <p className='whitespace-pre-wrap break-keep mt-2 leading-[26px] text-sub-light font-light'>{item.content}</p>
                                        </div>
                                    ))
                            }

                        </div>
                    </div>
                ))
            }
        </div>
    )
}