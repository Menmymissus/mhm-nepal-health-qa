import background from '../assets/background.png';

const About = () => {
  return (
    <main className="absolute top-0 left-0 h-full w-full bg-cover text-slate-300 flex items-center justify-center" style={{backgroundImage:`url(${background})`}}>
      <div className=' '>
     <div>About us</div>
    </div>
    </main>
  )
}

export default About;