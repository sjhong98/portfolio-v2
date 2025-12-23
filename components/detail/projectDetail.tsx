'use client'

import mainContent from "@/contents/main";
import { useProject } from "@/hooks/useProject";
import BoyIcon from '@mui/icons-material/Boy';
import { Dialog, DialogContent, styled } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import Image from "next/image";
import { useMemo, useState } from "react";

import { Close } from "@mui/icons-material";
import { useDrawingArea } from "@mui/x-charts";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMode } from "@/hooks/useMode";

// 스킬을 카테고리별로 그룹화하는 함수
function groupSkillsByCategory(skills: string[]) {
    const skillCategoryMap: Record<string, string> = {};
    const categoryOrder: string[] = [];

    // mainContent.skills에서 스킬-카테고리 매핑 생성 및 카테고리 순서 저장
    mainContent.skills.forEach(category => {
        if (!categoryOrder.includes(category.category)) {
            categoryOrder.push(category.category);
        }
        category.skills.forEach(skill => {
            skillCategoryMap[skill.title] = category.category;
        });
    });

    // 스킬을 카테고리별로 그룹화
    const grouped: Record<string, string[]> = {};

    skills.forEach(skill => {
        const category = skillCategoryMap[skill] || '기타';
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(skill);
    });

    // 카테고리 순서대로 정렬된 객체 생성
    const orderedGrouped: Array<[string, string[]]> = [];
    categoryOrder.forEach(category => {
        if (grouped[category]) {
            orderedGrouped.push([category, grouped[category]]);
        }
    });

    // '기타' 카테고리가 있으면 마지막에 추가
    if (grouped['기타']) {
        orderedGrouped.push(['기타', grouped['기타']]);
    }

    return orderedGrouped;
}

export default function ProjectDetail() {
    const { selectedProject } = useProject();
    const { switchMode } = useMode();

    const [imageDialogOpen, setImageDialogOpen] = useState<number | undefined>(undefined);
    const [contributionsExpanded, setContributionsExpanded] = useState(false);

    // 스킬을 카테고리별로 그룹화
    const groupedSkills = useMemo(() => {
        if (!selectedProject?.skills) return [];
        return groupSkillsByCategory(selectedProject.skills);
    }, [selectedProject?.skills]);

    return (
        <div>
            {selectedProject && (
                <div key={selectedProject.title} className='flex flex-col gap-12'>
                    {/* close button */}
                    <div className='sm:hidden flex absolute left-6 top-7 cursor-pointer' onClick={() => switchMode(undefined)}>
                        <Close sx={{ fontSize: 30, color: 'var(--color-sub-light)' }} />
                    </div>

                    {/* Title */}
                    <div className='flex flex-col sm:gap-6 gap-8'>
                        <div className='flex flex-col sm:gap-0 gap-2'>
                            <h2 className="text-4xl text-sub-light font-black">{selectedProject.title}</h2>
                            <p className="sm:text-lg text-md sm:leading-normal leading-tight text-sub">{selectedProject.description}</p>
                        </div>

                        {/* Assets */}
                        <div className='sm:h-[308px] h-[230px] overflow-x-scroll flex flex-row gap-4 sm:ml-0 ml-[-24px] sm:w-full w-[calc(100%+48px)] pb-2 sm:px-0 px-6 scrollbar-px'>
                            {selectedProject.assets.filter((asset: string) => !asset.endsWith('.mov')).map((asset: string, index: number) => (
                                <div key={asset} className="h-full w-fit flex-shrink-0">
                                    <Image
                                        key={asset}
                                        src={asset}
                                        alt={selectedProject.title}
                                        width={500}
                                        height={500}
                                        className='h-full w-auto object-cover cursor-pointer rounded-md'
                                        onClick={() => setImageDialogOpen(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <SectionContainer title="Features" className="flex flex-col gap-1">
                        {selectedProject.features.map((feature: string, index: number) => {
                            // 1. '### '로 시작하거나 바로 문자가 시작되는 경우 -> h3
                            if (feature.match(/^## (.+)$/)) {
                                return (
                                    <h3 key={index} className="sm:text-lg text-md text-sub-light font-bold mt-2 mb-0">
                                        {feature.replace('## ', '')}
                                    </h3>
                                )
                            }
                            else {
                                return (
                                    <span key={index} className="sm:text-[16px] text-[15px] text-text font-light">· {feature}</span>
                                )
                            }
                        })}
                    </SectionContainer>

                    {/* Contributions */}
                    <SectionContainer title="Contributions" className="relative">
                        <div className={`flex flex-col relative gap-1 overflow-hidden transition-all duration-300 ${contributionsExpanded ? 'max-h-none' : 'max-h-[80px]'}`}>
                            <div className="flex gap-3 h-30 sm:mt-0 mt-4 max-w-[300px]">
                                <div className='flex flex-col items-center'>
                                    <div className='flex flex-row gap-0 text-sub-light'>
                                        <BoyIcon sx={{ fontSize: 55 }} />
                                        {Boolean(selectedProject.totalDeveloper > 0)
                                            && new Array(selectedProject.totalDeveloper - 1).fill(0).map((_, index) => (
                                                <BoyIcon key={index} sx={{ fontSize: 55 }} className='ml-[-25px] opacity-30' />
                                            ))
                                        }
                                    </div>
                                    <p className="text-[13px] text-sub-light font-black whitespace-pre-wrap text-center leading-[13px]">{`참여 개발인원\n${selectedProject.totalDeveloper}명 중 1명`}</p>
                                </div>

                                <div className='flex flex-col items-center relative'>
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    { id: 0, value: selectedProject.contributedPercentage, color: '#495afb' },
                                                    { id: 1, value: 100 - selectedProject.contributedPercentage, color: '#edefff' }
                                                ],
                                                innerRadius: 28,
                                                outerRadius: 42,
                                                paddingAngle: 7,
                                                cornerRadius: 4,
                                                startAngle: -45,
                                                endAngle: 315,
                                                cy: 40,
                                                cx: 42
                                            }
                                        ]}
                                        width={180}
                                        height={180}
                                    />
                                    <p
                                        className='text-[13px] text-sub-light absolute top-8 left-6 w-[50px] font-black whitespace-pre-wrap text-center leading-[13px]'
                                    >
                                        {`${selectedProject.contributedPercentage}%\n기여`}
                                    </p>
                                </div>
                            </div>

                            {selectedProject.contribution.map((contribution: string, index: number) => {

                                // 1. 빈 문자열 -> 한 줄 띄우기
                                if (contribution === '') {
                                    return <div key={index} className="h-4" />;
                                }

                                // 4. '  -' (2칸 공백 + 하이픈) -> h5
                                if (contribution.startsWith('  -')) {
                                    return (
                                        <h5 key={index} className="text-sm text-text font-light ml-4">
                                            {contribution.replace('  -', '').trim()}
                                        </h5>
                                    );
                                }

                                // 3. '- ' -> h4
                                if (contribution.startsWith('- ')) {
                                    return (
                                        <h4 key={index} className="text-md text-text font-medium ml-0 mb-[-1px] mt-1.5">
                                            {contribution.replace('- ', '')}
                                        </h4>
                                    );
                                }

                                // 2. 바로 문자가 시작되는 경우 -> h3
                                return (
                                    <h3 key={index} className="text-lg text-sub-light font-bold mt-2 mb-[-4px]">
                                        {contribution}
                                    </h3>
                                );
                            })}
                        </div>
                        {!contributionsExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        )}
                    </SectionContainer>

                    <button
                        onClick={() => setContributionsExpanded(!contributionsExpanded)}
                        className="mt-2 text-sm text-sub-light hover:text-text transition-colors mt-[-30px] cursor-pointer"
                    >
                        {contributionsExpanded ? '접기' : '펼치기'}
                    </button>

                    {/* Details */}
                    <SectionContainer title="Details" className="flex flex-col sm:gap-1.5 gap-2">
                        {selectedProject.detail.map((detail: string, index: number) => {
                            // 1. '### '로 시작하거나 바로 문자가 시작되는 경우 -> h3
                            if (detail.match(/^### (.+)$/)) {
                                return (
                                    <h3 key={index} className="text-lg text-sub-light font-bold mt-4 mb-0">
                                        {detail.replace('### ', '')}
                                    </h3>
                                );
                            }

                            // 2. 일반 문자열 -> h5
                            else {
                                return (
                                    <div key={index} className='flex flex-row gap-2 mt-[-2px]'>
                                        {detail.startsWith('t: ') || detail.startsWith('s: ') ? (
                                            <div className='flex gap-1 items-center'>
                                                <h5 className="text-sm text-text font-semibold rounded-md bg-sub-darker px-1 ml-0">
                                                    {detail.startsWith('t: ') ? '문제 상황' : '해결 방식'}
                                                </h5>
                                                <h5 className="text-sm text-text font-light ml-0">
                                                    {detail.replace('t: ', '').replace('s: ', '')}
                                                </h5>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-sm text-text font-light">·</span>
                                                <h5 className="text-sm text-text font-light ml-0">
                                                    {detail}
                                                </h5>
                                            </>
                                        )
                                        }
                                    </div>
                                );
                            }
                        })}
                    </SectionContainer>

                    {/* Skills */}
                    <SectionContainer title="Skills" className="flex flex-col gap-6">
                        {groupedSkills.map(([category, skills]) => (
                            <div key={category} className="flex flex-col gap-1">
                                <h4 className="text-sm text-sub-light font-bold">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill: string) => (
                                        <div key={skill} className='flex flex-col min-w-14 h-12 justify-between gap-1 bg-sub-darkest rounded-sm shadow-lg px-2 pt-2 pb-1'>
                                            <Image src={`/assets/skills/${skill}.svg`} alt={skill} width={16} height={16} />
                                            <span className="text-[12px] text-sub font-light">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </SectionContainer>

                </div>
            )}

            <Dialog
                open={imageDialogOpen !== undefined}
                onClose={() => setImageDialogOpen(undefined)}
            >
                <DialogContent>
                    <Image
                        src={selectedProject.assets[imageDialogOpen ?? 0]}
                        alt={selectedProject.assets[imageDialogOpen ?? 0]}
                        width={500}
                        height={500}
                        className='h-[85vh] w-auto object-cover'
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className='flex flex-row gap-2 items-center'>
            {/* <div className='w-5 rounded-sm bg-sub h-1' /> */}
            <p className="text-xl text-sub-light font-black">{title}</p>
            <div className='w-full rounded-sm bg-sub h-0.5' />
        </div>
    )
}

function SectionContainer({ children, title, className }: { children: React.ReactNode, title?: string, className?: string }) {
    return (
        <div className='flex flex-col gap-4 mb-4'>
            {title && <SectionTitle title={title} />}
            <div className={`${className} ml-2`}>
                {children}
            </div>
        </div>
    )
}

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

