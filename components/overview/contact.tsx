'use client'

import { useState } from 'react';
import OverviewContainer from "./overviewContainer";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import { SvgIconComponent } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function Contact() {
    return (
        <OverviewContainer className='flex flex-col gap-8 pb-80 w-full' title='contact'>
            <h2 className='text-md font-bold text-sub'>Contact</h2>
            <div className='flex sm:flex-row flex-col gap-4 text-sub-light font-light items-center w-full'>
                <ContactItem
                    icon={AlternateEmailIcon}
                    text={`sjhong98\n@icloud.com`}
                    copyText="sjhong98@icloud.com"
                />
                <ContactItem
                    icon={LocalPhoneIcon}
                    text="010.2892.6408"
                    copyText="01028926408"
                />
                <ContactItem
                    icon={HomeIcon}
                    text={`서울 서대문구\n연희로 11마길`}
                    copyText="서울시 서대문구 연희로 11마길"
                />
            </div>
        </OverviewContainer>
    )
}

interface ContactItemProps {
    icon: SvgIconComponent;
    text: string;
    copyText: string;
}

function ContactItem({ icon: Icon, text, copyText }: ContactItemProps) {
    const [isCopied, setIsCopied] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const handleClick = async () => {
        if (isCopied || !showContent) return;

        try {
            await navigator.clipboard.writeText(copyText);

            // 내용물이 pop해서 사라지는 효과
            setShowContent(false);

            // 내용물이 사라진 후 '복사됨' 텍스트가 pop해서 나타남
            setTimeout(() => {
                setIsCopied(true);
            }, 150);

            // 2초 후 '복사됨' 텍스트가 사라지고 내용물이 다시 나타남
            setTimeout(() => {
                setIsCopied(false);
                setTimeout(() => {
                    setShowContent(true);
                }, 150);
            }, 2300);
        } catch (err) {
            console.error('복사 실패:', err);
        }
    };

    return (
        <div
            className="flex flex-col gap-2 bg-sub-darkest rounded-lg shadow-lg p-4 flex-[1] sm:w-auto w-full sm:max-h-none max-h-[110px] aspect-square aspect-auto justify-center items-center whitespace-pre-wrap cursor-pointer"
            onClick={handleClick}
        >
            {isCopied ? (
                <div className='flex flex-col gap-2 items-center'>
                    <CheckIcon sx={{ fontSize: 40 }} className='' />
                    <p className="text-center text-md leading-[16px] animate-[pop_0.3s_ease-out]">
                        복사됨
                    </p>
                </div>
            ) : (
                <>
                    <Icon
                        sx={{ fontSize: 40 }}
                        className={`transition-all duration-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                    />
                    <p
                        className={`text-center text-sm leading-[16px] transition-all duration-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                    >
                        {text}
                    </p>
                </>
            )}
        </div>
    );
}