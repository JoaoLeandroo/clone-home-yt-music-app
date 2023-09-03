import { AiFillHome } from 'react-icons/ai'
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

        </aside>
    )
}