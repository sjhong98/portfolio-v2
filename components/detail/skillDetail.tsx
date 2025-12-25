'use client'

import mainContent from "@/contents/main";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skill from "../overview/skill";

export default function SkillDetail() {
    const [selectedSkill, setSelectedSkill] = useState<string | undefined>(undefined);
    const [descriptionVisibleIndex, setDescriptionVisibleIndex] = useState<string | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            setSelectedSkill('Next.js');
        }, 500)

        return () => {
            setSelectedSkill(undefined);
        }
    }, [])

    useEffect(() => {
        if (selectedSkill) {
            setTimeout(() => {
                setDescriptionVisibleIndex(selectedSkill)
            }, 180)
        }
        else {
            setDescriptionVisibleIndex(undefined);
        }

        return () => {
            setDescriptionVisibleIndex(undefined);
        }
    }, [selectedSkill])

    return (
        <div className='flex flex-col gap-12 relative'>
            <h1 className='text-4xl font-black text-sub-light'>Skills</h1>

            <div className='absolute top-0 right-0 flex flex-col gap-1 items-end'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: '#294a02' }} />
                    <p className='text-[12px] text-sub-light font-light w-12'>Level 1</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: '#539404' }} />
                    <p className='text-[12px] text-sub-light font-light w-12'>Level 2</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: '#a1f939' }} />
                    <p className='text-[12px] text-sub-light font-light w-12'>Level 3</p>
                </div>
                <p className='text-[10px] text-sub font-light whitespace-pre-wrap leading-[14px] text-right'>{`*자세한 내용은 스킬을 클릭하여\n확인할 수 있습니다.`}</p>
            </div>

            {/* Skills by Category */}
            <div className="flex flex-col gap-6">
                {mainContent.skills.map((category) => (
                    <div key={category.category} className="flex flex-col gap-1">
                        <h4 className="text-sm text-sub-light font-bold">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.title}
                                    className='flex flex-col relative gap-1 bg-sub-darkest rounded-sm shadow-lg px-2 pt-2 cursor-pointer z-[100] transition-all duration-150 break-keep'
                                    style={{
                                        minWidth: selectedSkill === skill.title ? '200px' : '56px',
                                        width: selectedSkill === skill.title ? '240px' : `${((document.getElementById(skill.title) as HTMLElement)?.offsetWidth ?? 30) + 16}px`,
                                        maxWidth: selectedSkill === skill.title ? '240px' : 'none',
                                        height: selectedSkill === skill.title ? `${((skill as any)?.lines ?? 1) * 20 + 32}px` : '48px',
                                        paddingBottom: selectedSkill === skill.title ? '12px' : '4px',
                                    }}
                                    onClick={() => setSelectedSkill(skill.title)}
                                >
                                    <Image
                                        src={`/assets/skills/${skill.title}.svg`}
                                        alt={skill.title}
                                        width={16}
                                        height={16}
                                        className='h-4.5'
                                    />
                                    <div id={skill.title} className='w-fit mt-[-2px]'>
                                        <span className="text-[12px] text-sub font-light whitespace-nowrap">{skill.title}</span>
                                    </div>
                                    <div className='absolute top-1.5 right-1.5'>
                                        <div className='w-1.5 h-1.5 rounded-full' style={{ backgroundColor: skill.level === 1 ? '#294a02' : skill.level === 2 ? '#539404' : '#b9fa6a' }} />
                                    </div>

                                    {
                                        selectedSkill !== undefined && (
                                            <div
                                                id={`${skill.title}-description`}
                                                style={{
                                                    opacity: descriptionVisibleIndex === skill.title ? 1 : 0,
                                                }}
                                                className='transition-all duration-150'
                                            >
                                                <p className="text-[13px] text-sub-light font-light whitespace-pre-wrap leading-[16px]">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}