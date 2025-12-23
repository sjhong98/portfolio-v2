'use client'

import mainContent from "@/contents/main";
import { Fragment, ReactNode, useCallback } from "react";

export default function History() {
    return (
        <div className='flex flex-col gap-8'>
            {mainContent.history.map((item) => (
                <HistoryItem key={item.date} date={item.date} content={item.content} role={item.role} subContent1={item.subContent1} />
            ))}
        </div>
    )
}

function HistoryItem({ date, content, role, subContent1 }: { date: string, content: string, role?: string, subContent1?: string }) {

    const extractLink = useCallback((initialContent: string) => {
        let splittedStr: string[] = initialContent.split("|END_LINK|")
        let result: ReactNode[] = []

        for (let i in splittedStr) {
            const title = splittedStr[i].split("|START_LINK|")[0]
            const link = splittedStr[i].split("|START_LINK|")[1]

            result.push(
                link === undefined ? (
                    title
                ) : (
                    <Fragment key={i}>
                        {title}
                        <span
                            className='ml-1 cursor-pointer'
                            onClick={() => window.open(link, "_blank")}
                        >
                            ↗
                        </span>
                    </Fragment>
                )
            )
        }

        return result
    }, [])

    return (
        <div className='flex sm:flex-row flex-col sm:gap-5 gap-1 w-full'>
            <p className='text-md text-sub min-w-[200px] text-sm mt-[2px] font-medium tracking-wider'>
                {date}
            </p>
            <div className='flex flex-col gap-1 w-[80%]'>
                <p className='text-md text-sub-light'>{content}</p>
                {role && (
                    <p className='sm:text-md text-sm text-sub-dark font-semibold sm:mt-[-8px] mt-0'>{role}</p>
                )
                }
                {subContent1 && (
                    <p className='w-full sm:text-md text-sm text-sub-dark whitespace-pre-wrap break-all'>
                        {subContent1.includes("|START_LINK|") ? (
                            <>{extractLink(subContent1).map((item: ReactNode) => item)}</>
                        ) : (
                            subContent1
                        )}
                    </p>
                )}
            </div>
        </div>
    )
}