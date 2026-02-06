export default function TestPage() {
    return (
        <div className="flex flex-col w-screen h-screen bg-main p-30 gap-10">
            <h1>Test Page</h1>

            <div className="flex">
                <div className='w-100 h-100 rounded-full bg-green-500 z-[3]' />
                <div className='w-100 h-100 rounded-full bg-blue-500 z-[2] ml-[-200px]' />
            </div>
        </div>
    )
}