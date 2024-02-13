import {Link} from 'react-router-dom';
import Logo from '../assets/mhm_logo.png'


export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <>
        <div className="mb-10 font-spaceGrotesk">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-18 w-20"
                    src={Logo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl  text-slate-300">
                {heading}
            </h2>
            <p className=" text-center text-sm text-slate-300 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
        </>
    )
}