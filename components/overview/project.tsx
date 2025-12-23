'use client'

import projects from "@/contents/projects";
import sideProjects from "@/contents/sideProjects";
import { useMode } from "@/hooks/useMode";
import { useProject } from "@/hooks/useProject";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { memo, useCallback, useEffect, useState } from "react";
import OverviewContainer from "./overviewContainer";
import { useMediaQuery } from "@mui/material";

export default function Project() {
    const { selectedProject } = useProject();
    const { mode, switchMode, setOverviewTransparent } = useMode();
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined);

    const handleMouseEnter = (index: number) => {
        if (mode !== 'project' && mode !== undefined) return;
        if (isMobile) return;

        setIsHovered(true);
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredIndex(undefined);
    }

    useEffect(() => {
        if (!selectedProject) {
            setOverviewTransparent(false);
            return;
        }

        if (isHovered) setOverviewTransparent(false);
        else setOverviewTransparent(true);
    }, [isHovered, selectedProject])



    return (
        <OverviewContainer className='flex flex-col gap-16 duration-150' title='project'>
            <div className='w-full flex flex-col sm:gap-8 gap-5'>
                <div className='flex gap-2 justify-between items-center'>
                    <p className='text-md font-bold text-sub'>Main Projects</p>
                </div>
                <div className='flex flex-col sm:gap-3 gap-2 mt-[-16px]'>
                    {
                        Object.entries(projects).map(([key, value], index) => (
                            <ProjectItem
                                index={index}
                                value={value}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                switchMode={switchMode}
                                isHovered={isHovered}
                                hoveredIndex={hoveredIndex}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex flex-col sm:gap-8 gap-5'>
                <div className='flex gap-2 justify-between items-center'>
                    <p className='text-md font-bold text-sub'>Side Projects</p>
                </div>
                <div className='flex flex-col sm:gap-3 gap-2 mt-[-16px]'>
                    {
                        Object.entries(sideProjects).map(([key, value], index) => (
                            <ProjectItem
                                index={index + Object.keys(projects).length}
                                value={value}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                switchMode={switchMode}
                                isHovered={isHovered}
                                hoveredIndex={hoveredIndex}
                                key={index + Object.keys(projects).length}
                            />
                        ))
                    }
                </div>
            </div>
        </OverviewContainer>
    )
}

const ProjectItem = memo(function ProjectItem({ handleMouseEnter, handleMouseLeave, switchMode, isHovered, hoveredIndex, index, value }: { handleMouseEnter: (index: number) => void, handleMouseLeave: () => void, switchMode: (mode: string) => void, isHovered: boolean, hoveredIndex: number | undefined, index: number, value: any }) {
    const { setSelectedProject, selectedProject } = useProject();
    const { mode } = useMode();
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [selected, setSelected] = useState(false);

    const onClick = useCallback(() => {
        if (mode !== 'project' && mode !== undefined) return;

        switchMode('project')
        setSelectedProject(value)
    }, [value, switchMode, setSelectedProject])

    useEffect(() => {
        if (isMobile) return;

        let _selected = false;

        // not hovered && selected
        if (hoveredIndex === undefined && selectedProject?.title) {
            (selectedProject.title === value.title) ? _selected = true : _selected = false;
        }
        // not hovered && not selected
        else if (hoveredIndex === undefined) {
            _selected = false;
        }
        // hovered && not selected
        else {
            (isHovered && hoveredIndex !== index) ? _selected = false : _selected = true;
        }

        setSelected(_selected);
    }, [isHovered, hoveredIndex, index, selectedProject, value])

    return (
        <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                opacity: selected || hoveredIndex === undefined ? 1 : 0.5,
                transition: 'opacity 0.15s ease-in-out',
            }}
            className={`w-full flex flex-row justify-between gap-3 relative sm:px-4 px-0 py-4 sm:ml-[-16px] ml-[-0px] mb-[-12px] rounded-md cursor-pointer transition-[background-color,border-color,box-shadow] border-t-[1px] ${selected
                    ? 'bg-sub-darkest border-sub-darker shadow-[0_5px_4px_rgba(0,0,0,0.1)]'
                    : 'border-main'
                }`}
        >
            <div className='flex flex-col sm:gap-2 gap-1'>
                <p className='sm:text-xl text-lg font-bold'>{value.title}</p>
                <p className='text-[14px] text-sub'>{value.description}</p>
            </div>
            {/* {
                value.assets.length > 0 && Boolean(value.mainAsset !== null) && (
                    <Image
                        src={value.assets[value.mainAsset ?? 0]}
                        alt={value.title}
                        width={100}
                        height={100}
                        className='h-16 object-contain rounded-sm w-fit'
                        style={{
                            transition: 'opacity 0.15s ease-in-out',
                            opacity: isHovered && hoveredIndex === index ? 0.8 : 0.6,
                        }}
                    />
                )
            } */}
            {/* <OpenInFullIcon
                sx={{ fontSize: 15, opacity: selected ? 1 : 0, transition: 'opacity 0.15s ease-in-out' }}
                className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-sub'
            /> */}
        </div>
    )
});