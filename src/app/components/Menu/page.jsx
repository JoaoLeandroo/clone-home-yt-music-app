import { AiFillHome } from 'react-icons/ai'
import { MdExplore, MdLibraryMusic } from 'react-icons/md'

export default function Menu() {
    return(
        <aside>
            <AiFillHome size={25} color='white'/>
            <MdExplore size={25} color='white'/>
            <MdLibraryMusic size={25} color='white'/>
        </aside>
    )
}