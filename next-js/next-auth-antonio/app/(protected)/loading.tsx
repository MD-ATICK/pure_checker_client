
export default function Loading() {
    return (
        <div className=' max-w-[700px] w-full flex flex-col gap-3'>
            <div className='skeleton h-4 rounded-sm w-full '></div>
            <div className='flex items-center gap-2'>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
                <div className='skeleton h-5 rounded-sm w-full '></div>
            </div>
            <br />
            <div className='skeleton h-5 rounded-sm w-full '></div>
            <div className='skeleton h-5 rounded-sm w-full '></div>
            <div className='skeleton h-5 rounded-sm w-full '></div>

        </div>
    )
}
