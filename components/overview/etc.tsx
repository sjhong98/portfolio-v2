import { useMode } from "@/hooks/useMode";
import OverviewContainer from "./overviewContainer";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Etc() {
    const { mode, switchMode } = useMode();

    const testimonials = [
        {
            quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
        },
        {
            quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: "William Shakespeare",
            title: "Hamlet",
        },
        {
            quote: "All that we see or seem is but a dream within a dream.",
            name: "Edgar Allan Poe",
            title: "A Dream Within a Dream",
        },
        {
            quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            name: "Jane Austen",
            title: "Pride and Prejudice",
        },
        {
            quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            name: "Herman Melville",
            title: "Moby-Dick",
        },
    ];

    const trip = [
        {
            region1: 'INDIA',
            region2: 'MUMBAI / NEW DELHI / AGRA / LONAVALA / PUNE',
            image1Height: 190,
            image1Style: 'top-[50px] brightness-90 right-[0px]',
            image2Width: 170,
            image2Style: 'bottom-[-5px] right-[-5px] opacity-80',
        },
        {
            region1: 'VIETNAM',
            region2: 'HANOI / SAPA / HO CHI MINH',
            image1Width: 280,
            image1Style: 'top-[70px] left-[10px] rotate-[-7deg] brightness-90',
            image2Width: 170,
            image2Style: 'bottom-[-5px] right-[-10px] opacity-0',
        },
        {
            region1: 'LAOS',
            region2: 'VIENTIANE / LUANG PRABANG / VANG VIENG',
            image1Height: 260,
            image1Style: 'top-[45px] right-[-18px] rotate-[12deg]',
            image2Width: 240,
            image2Style: 'bottom-[-10px] right-[-20px] rotate-[-5deg] opacity-80',
        },
        {
            region1: 'CHINA',
            region2: 'QINGDAO / SHANGHAI',
            image1Height: 220,
            image1Style: 'top-[45px] right-[-15px] rotate-[5deg] brightness-95',
            image2Width: 200,
            image2Style: 'bottom-[-30px] right-[-20px] rotate-[-5deg] opacity-80',
        },
        {
            region1: 'THAILAND',
            region2: 'BANGKOK',
            image1Height: 400,
            image1Style: 'top-[35px] right-[-40px] rotate-[-5deg] brightness-100',
            image2Width: 230,
            image2Style: 'bottom-[-120px] right-[-45px] rotate-[0deg] opacity-70',
        },
        {
            region1: 'JAPAN',
            region2: 'TOKYO / FUKUOKA / SHIMONOSEKI',
            image1Height: 280,
            image1Style: 'top-[70px] right-[60px] rotate-[-5deg] brightness-100',
            image2Width: 185,
            image2Style: 'bottom-[-10px] right-[-55px] rotate-[10deg] opacity-80 brightness-70',
        },
        {
            region1: 'UK',
            region2: 'LONDON / DOVER',
            image1Height: 290,
            image1Style: 'top-[18px] right-[-25px] rotate-[0deg] brightness-120',
            image2Width: 300,
            image2Style: 'bottom-[-20px] right-[-40px] rotate-[6deg] opacity-80 scale-x-[-1] brightness-90',
        },
        {
            region1: 'GERMANY',
            region2: 'BERLIN / FRANKFURT / HEIDELBERG / KÖLN',
            image1Height: 380,
            image1Style: 'top-[50px] right-[10px] rotate-[5deg] brightness-120',
            image2Width: 250,
            image2Style: 'bottom-[-127px] right-[-50px] rotate-[10deg] opacity-80 scale-x-[-1] brightness-90',
        },
        {
            region1: 'FRANCE_',
            region2: 'PARIS',
            image1Height: 260,
            image1Style: 'top-[50px] right-[0px] rotate-[5deg] brightness-110',
            image2Width: 300,
            image2Style: 'bottom-[-87px] right-[-70px] rotate-[10deg] opacity-80 scale-x-[-1] brightness-90',
        },
        {
            region1: 'BELGIUM_',
            region2: 'BRUSSELS',
            image1Height: 280,
            image1Style: 'top-[15px] right-[-15px] rotate-[5deg] brightness-90',
            image2Width: 300,
            image2Style: 'bottom-[-90px] right-[-50px] rotate-[0deg] opacity-70',
        },
        {
            region1: 'NETHERLAND_',
            region2: 'AMSTERDAM / ALKMAAR',
            image1Height: 130,
            image1Style: 'top-[38px] right-[-25px] rotate-[5deg] brightness-90',
            image2Width: 240,
            image2Style: 'bottom-[-50px] right-[-40px] rotate-[0deg] opacity-80',
        },
        {
            region1: 'AUSTRIA',
            region2: 'VIENNA',
            image1Height: 220,
            image1Style: 'top-[30px] right-[-20px] rotate-[5deg] brightness-100',
            image2Width: 230,
            image2Style: 'bottom-[-70px] right-[-50px] rotate-[10deg] opacity-80',
        },
        {
            region1: 'SWITZERLAND_',
            region2: 'ZURICH / GENEVA / LAUSANNE',
            image1Height: 360,
            image1Style: 'top-[25px] right-[-0px] rotate-[10deg] brightness-100',
            image2Width: 210,
            image2Style: 'bottom-[-45px] right-[-60px] rotate-[20deg] opacity-80 brightness-110',
        },
        {
            region1: 'CZECH REPUBLIC',
            region2: 'PRAGUE',
            image1Height: 320,
            image1Style: 'top-[45px] right-[5px] rotate-[5deg] brightness-100',
            image2Width: 230,
            image2Style: 'bottom-[-30px] right-[-50px] rotate-[10deg] opacity-80',
        },
        {
            region1: 'ITALY',
            region2: 'VENEZIA / ROME',
            image1Height: 280,
            image1Style: 'top-[25px] right-[-20px] rotate-[-5deg] brightness-110',
            image2Width: 230,
            image2Style: 'bottom-[-150px] right-[-10px] rotate-[10deg] opacity-70',
        },
        {
            region1: '경상북도_',
            region2: '포항 / 안동 / 경주 / 영덕 / 울진 / 대구',
            image1Height: 250,
            image1Style: 'top-[35px] right-[-10px] rotate-[-5deg] brightness-100',
            image2Width: 230,
            image2Style: 'bottom-[-105px] right-[-10px] rotate-[10deg] opacity-80',
        },
        {
            region1: '경상남도',
            region2: '부산 / 통영 / 사천 / 거제 / 하동 / 남해 / 산청',
            image1Height: 350,
            image1Style: 'top-[5px] right-[0px] rotate-[-5deg] brightness-110',
            image2Width: 270,
            image2Style: 'bottom-[-100px] right-[45px] rotate-[0deg] opacity-70',
        },
        {
            region1: '전라남도',
            region2: '광주 / 목포 / 여수 / 순천 / 나주 / 구례 / 해남 / 강진 / 화순 / 무안 / 완도',
            image1Height: 400,
            image1Style: 'top-[35px] right-[-40px] rotate-[-5deg] brightness-1-0',
            image2Width: 230,
            image2Style: 'bottom-[-120px] right-[-45px] rotate-[0deg] opacity-70',
        },
        {
            region1: '전라북도',
            region2: '전주 / 정읍 / 군산 / 남원 / 익산 / 부안 / 임실',
            image1Height: 430,
            image1Style: 'top-[30px] right-[-40px] rotate-[-5deg] brightness-100',
            image2Width: 340,
            image2Style: 'bottom-[-125px] right-[-50px] opacity-100 brightness-120 scale-[1.05]',
        },
        {
            region1: '충청북도',
            region2: '청주 / 충주 / 괴산 / 보은 / 제천',
            image1Height: 320,
            image1Style: 'top-[25px] right-[0px] rotate-[-5deg] brightness-110',
            image2Width: 210,
            image2Style: 'bottom-[-100px] right-[-35px] rotate-[10deg] opacity-70',
        },
        {
            region1: '충청남도',
            region2: '계룡 / 공주 / 논산 / 당진 / 보령 / 서산 / 천안 / 부여 / 태안',
            image1Height: 300,
            image1Style: 'top-[40px] right-[-10px] rotate-[-10deg] brightness-100',
            image2Width: 200,
            image2Style: 'bottom-[-10px] right-[-20px] rotate-[0deg] brightness-80',
        },
        {
            region1: '경기도',
            region2: '수원 / 화성 / 동두천 / 구리 / 김포 / 포천 / 여주',
            image1Height: 210,
            image1Style: 'top-[-8px] right-[-5px] rotate-[-13deg] brightness-90',
            image2Width: 180,
            image2Style: 'bottom-[-10px] right-[-10px] rotate-[5deg] brightness-80',
        },
        {
            region1: '강원도',
            region2: '강릉 / 동해 / 삼척 / 속초 / 원주 / 춘천 / 고성 / 양구 / 양양 / 인제 / 평창 / 홍천',
            image1Height: 360,
            image1Style: 'top-[10px] right-[-28px] rotate-[-10deg] brightness-100',
            image2Width: 200,
            image2Style: 'bottom-[-10px] right-[-20px] rotate-[0deg] brightness-80 opacity-0',
        },
        {
            region1: '제주도',
            region2: '',
            image1Height: 320,
            image1Style: 'top-[30px] right-[-30px] rotate-[-10deg] brightness-90 scale-x-[-1]',
            image2Width: 260,
            image2Style: 'bottom-[-35px] right-[0px] rotate-[5deg] brightness-80 scale-[1.05]',
        },
    ]

    return (
        <OverviewContainer className='flex flex-col gap-8 w-full overflow-hidden opacity-50 hover:opacity-100 transition-all duration-150' title='etc'>
            <h2 className='text-md font-bold text-sub'>Etc</h2>
            <p className='text-[14px] sm:text-[16px] text-sub whitespace-pre-wrap break-keep leading-[25px]'>
                hi
            </p>

            <InfiniteMovingCards
                items={trip}
                direction="left"
                speed="slow"
            />

        </OverviewContainer>
    )
}