'use client'

import AboutDetail from "@/components/detail/aboutDetail";
import About from "@/components/overview/about";
import Contact from "@/components/overview/contact";
import History from "@/components/overview/history";
import Information from "@/components/overview/information";
import Project from "@/components/overview/project";
import Skill from "@/components/overview/skill";

import EtcDetail from "@/components/detail/etcDetail";
import ProjectDetail from "@/components/detail/projectDetail";
import SkillDetail from "@/components/detail/skillDetail";
import Etc from "@/components/overview/etc";
import { useMode } from "@/hooks/useMode";
import { Drawer, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const { mode, overviewTransparent, switchMode, lastMode } = useMode();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [detailDisplay, setDetailDisplay] = useState<string>('none');
  const [detailLeft, setDetailLeft] = useState<string>('100%');

  const content = (
    <>
      {/* about */}
      <About />

      {/* history */}
      <History />

      {/* skills */}
      <Skill />

      {/* project */}
      <Project />

      {/* etc */}
      <Etc />

      {/* contact */}
      <Contact />
    </>
  )

  const detail = lastMode === 'about' ? <AboutDetail />
    : lastMode === 'project' ? <ProjectDetail />
      : lastMode === 'skill' ? <SkillDetail />
        : lastMode === 'etc' ? <EtcDetail />
          : <></>


  useEffect(() => {
    if (mode !== undefined) {
      setDetailDisplay('block');
      setTimeout(() => {
        setDetailLeft('50%');
      }, 1);
    }
    else if (mode === undefined) {
      document.body.style.overflow = 'hidden';
      setDetailLeft('100%');
      setTimeout(() => {
        setDetailDisplay('none');
        document.body.style.overflow = 'auto';
      }, 300);
    }
  }, [mode])


  return (
    <div className='sm:w-full w-screen flex sm:flex-row flex-col justify-between gap-1'>

      {/* Information */}
      <Information />

      {/* content */}
      <div
        className='w-full flex flex-col sm:h-[100vh] h-auto sm:overflow-y-scroll relative'
      >
        {/* pc */}
        <div
          style={{
            paddingLeft: mode !== undefined ? '10%' : '50%',
            paddingRight: mode !== undefined ? '55%' : '15%',
            opacity: overviewTransparent ? 0.3 : 1,
            transition: 'all 0.3s ease-in-out'
          }}
          className='w-full sm:flex hidden flex-col gap-28 scroll-smooth flex-shrink-0 w-full sm:py-20'
          onClick={() => {
            if (overviewTransparent) switchMode(undefined);
          }}
        >
          {content}
        </div>

        {/* mobile */}
        <div className='sm:hidden flex flex-col px-6 pt-40 gap-28'>
          {content}
        </div>
      </div>

      {/* detail */}
      <>

        {/* pc */}
        <div
          style={{
            left: detailLeft,
            display: isMobile ? 'none' : detailDisplay,
            opacity: mode !== undefined ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
          }}
          className='absolute right-0 top-0 sm:py-20 h-screen overflow-y-scroll pr-[5%] w-[calc(50%-2px)] sm:block hidden'
        >
          {detail}
        </div>

        {/* mobile */}
        <Drawer
          className='sm:hidden flex flex-col gap-28'
          open={mode !== undefined}
          onClose={() => switchMode(undefined)}
          anchor='right'
          PaperProps={{
            sx: {
              backgroundColor: 'var(--color-main)',
              padding: '24px',
              paddingBottom: '100px',
              paddingTop: '80px',
            }
          }}
        >
          {detail}
        </Drawer>
      </>
    </div>
  );
}