'use client'

import mainContent from "@/contents/main";
import Image from "next/image";
import IndexDisplay from "../indexDisplay";
import { useMode } from "@/hooks/useMode";

export default function Information() {
    const { mode } = useMode();

    return (
        <>
            {/* pc */}
            <div
                style={{
                    paddingLeft: mode !== undefined ? '0%' : '20%',
                    opacity: mode !== undefined ? 0 : 1,
                    transition: 'all 0.3s ease-in-out'
                }}
                className={`sm:absolute relative left-0 top-0 sm:flex hidden`}
            >
                <div className='flex flex-col gap-3 sm:py-20 py-5 h-screen relative'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-6xl font-semibold'>홍승재</p>
                        <p className='text-xl font-light'>
                            Frontend/Backend Developer
                        </p>
                    </div>
                    <p className='text-md font-light text-sub'>열정과 섬세함으로 마음을 얻는 개발자가 되겠습니다.</p>

                    <IndexDisplay />

                    <div className='absolute bottom-10 left-0'>
                        <div className='flex flex-row gap-4'>
                            {
                                mainContent.links.map((link, index) => (
                                    <Image
                                        key={link.title}
                                        src={`/assets/icons/${link.title}_active.svg`}
                                        alt={link.title}
                                        width={28}
                                        height={28}
                                        className='hover:opacity-100 opacity-50 transition-all duration-150 z-10 cursor-pointer'
                                        onClick={() => window.open(link.link, '_blank')}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className='sm:hidden flex flex-col w-full px-6 py-2 gap-3'>
                <div className='flex flex-col gap-1 sm:py-20 py-5 relative'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-4xl font-extrabold'>홍승재</p>
                        <p className='text-md font-medium'>
                            Frontend/Backend Developer
                        </p>
                    </div>
                    <p className='text-sm font-light text-sub'>열정과 섬세함으로 마음을 얻는 개발자가 되겠습니다.</p>
                </div>
                <div className='flex flex-row gap-4'>
                        {
                            mainContent.links.map((link, index) => (
                                <Image
                                    key={link.title}
                                    src={`/assets/icons/${link.title}_active.svg`}
                                    alt={link.title}
                                    width={28}
                                    height={28}
                                    className='hover:opacity-100 opacity-50 transition-all duration-150 z-10 cursor-pointer'
                                    onClick={() => window.open(link.link, '_blank')}
                                />
                            ))
                        }
                    </div>
            </div>
        </>
    )
}