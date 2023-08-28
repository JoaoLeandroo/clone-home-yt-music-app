import { SiYoutubemusic } from 'react-icons/si'
import { PiListBold } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import { LuMonitorSmartphone } from 'react-icons/lu'

export default function Header() {
    return(
        <header className='w-full h-16 flex justify-between p-3 border-b border-solid border-[#757575]'>
            <div className='w-[10%] flex gap-3 justify-center items-center'>
                <div className='cursor-pointer'>
                    <PiListBold size={20} color='white'/>
                </div>
                <div className='flex cursor-pointer'>
                    <SiYoutubemusic size={30} color='red'/>
                    <h1 className='text-white font-bold text-2xl ml-1'>Music</h1>
                </div>
            </div>

            <div className='w-[80%] flex items-center justify-center'>

                <div className='w-2/4 h-full relative'>

                    <div className='w-full h-full flex items-center'>
                        <input type="text" placeholder='Pesquise músicas, álbuns, artistas, podcasts' className='h-8 w-[450px] bg-[#bdbdbd] pl-[35px] border border-solid border-[#757575] outline-none ml-3 rounded-md placeholder:text-white '/>
                    </div>

                    <div className='absolute top-[10px] left-5'>
                        <BsSearch size={20} color='#e0e0e0'/>
                    </div>

                </div>

            </div>

            <div className='w-[10%]'>
                <LuMonitorSmartphone size={20}/>
                <h2>ME</h2>
            </div>
        </header>
    )
}