'use client'

import mainContent from "@/contents/main";
import { useMode } from "@/hooks/useMode";
import OverviewContainer from "./overviewContainer";

export default function About() {
  const { mode, switchMode } = useMode();

  return (
    <OverviewContainer className='w-full h-auto flex flex-col gap-8' title='about'>
      <div className='sm:hidden flex'>
        <p className='text-md font-bold text-sub'>About</p>
      </div>
      
      <p className='sm:text-[16px] text-[14px] text-sub-light whitespace-pre-wrap break-keep'>
        {mainContent.about}
      </p>
      <button
        onClick={() => switchMode('about')}
        className='flex w-full rounded-xl justify-center items-center py-2 border-[1px] border-sub-darker cursor-pointer group hover:border-sub transition-all duration-150'
      >
        <p className='text-[14px] text-sub font-extralight group-hover:text-sub-light transition-all duration-150'>
          전체 자기소개서
        </p>
      </button>
    </OverviewContainer>
  )
}