import background from '../assets/background.png';
import Aboutprops from './Aboutprops';

const About = () => {
  return (
    <main className="absolute top-0 left-0 h-full w-full bg-cover text-slate-300 flex items-center justify-center font-spaceGrotesk space-x-4" style={{backgroundImage:`url(${background})`}}>
      <Aboutprops title="Bharat"/>
      <Aboutprops title="Bibek"/>
      <Aboutprops title="Chhabi"/>
      <Aboutprops title="Yunisha"/>
    <div className='h-[20vh] w-screen border-2 rounded-md backdrop-blur-lg absolute  bottom-0 flex items-center justify-center'>
      We use this as footer
    </div>
    </main>
  )
}

export default About;