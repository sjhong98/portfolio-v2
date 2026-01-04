import { useMode } from "@/hooks/useMode";
import OverviewContainer from "./overviewContainer";

export default function Etc() {
    const { mode, switchMode } = useMode();

    return (
        <OverviewContainer className='flex flex-col gap-8 w-full overflow-hidden opacity-100 hover:opacity-100 transition-all duration-150' title='etc'>
            <h2 className='text-md font-bold text-sub'>Etc</h2>
            <p className='text-[14px] sm:text-[16px] text-sub-light whitespace-pre-wrap break-keep leading-[25px] line-clamp-1 ellipsis'>
                배낭 하나 매고 떠나는 여행을 즐깁니다.
            </p>
            <button
                onClick={() => switchMode('etc')}
                className='flex w-full rounded-xl justify-center items-center py-2 border-[1px] border-sub-darker cursor-pointer group hover:border-sub transition-all duration-150'
            >
                <p className='text-[14px] text-sub font-extralight group-hover:text-sub-light transition-all duration-150'>
                    제 이야기가 궁금하시다면
                </p>
            </button>

        </OverviewContainer>
    )
}