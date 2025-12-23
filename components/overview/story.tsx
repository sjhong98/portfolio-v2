export default function Story() {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='text-md font-bold text-sub'>Story</h2>
            <button className='flex w-full rounded-xl justify-center items-center py-2 border-[1px] border-sub-darker cursor-pointer group hover:border-sub transition-all duration-150'>
                <p className='text-sm text-sub font-extralight group-hover:text-sub-light transition-all duration-150'>
                    제 이야기가 궁금하시다면
                </p>
            </button>
        </div>
    )
}