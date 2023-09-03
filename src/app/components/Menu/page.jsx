import { AiFillHome, AiOutlinePlus } from 'react-icons/ai'
import { MdExplore, MdLibraryMusic } from 'react-icons/md'

export default function Menu() {
    return(
        <aside className='w-56 h-screen border-r border-solid border-[#757575] p-3'>
            <div className='w-full'>
                <ul className='w-full flex flex-col'>
                    <li className='w-[90%] h-12 flex gap-3 cursor-pointer items-center p-2 hover:bg-slate-500 rounded-md'>
                        <AiFillHome size={25} color='white'/>
                        <p className='text-white'>Início</p>
                    </li>
                    <li className='w-[90%] h-12 flex gap-3 cursor-pointer items-center p-2 hover:bg-slate-500 rounded-md'>
                        <MdExplore size={25} color='white'/>
                        <p className='text-white'>Explorar</p>
                    </li>
                    <li className='w-[90%] h-12 flex gap-3 cursor-pointer items-center p-2 hover:bg-slate-500 rounded-md'>
                        <MdLibraryMusic size={25} color='white'/>
                        <p className='text-white'>Biblioteca</p>
                    </li>
                </ul>
            </div>

            <div className='w-full m-auto mt-6 border-t border-solid border-[#757575] p-3'>

                <div className='p-2 w-full bg-slate-500 flex items-center justify-center gap-2 cursor-pointer rounded-lg hover:bg-slate-600'>
                    <AiOutlinePlus size={30} color='white'/>
                    <p className='text-white font-bold'>Nova Playlist</p>
                </div>
            </div>

        </aside>
    )
}