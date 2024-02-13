import background from '../assets/background.png';

const Stressometer = () => {
  return (
    <main className="absolute top-0 left-0 h-full w-full bg-cover flex items-center justify-center text-slate-300" style={{backgroundImage:`url(${background})`}}>
      <div className=' '>
     <div>Stressometer</div>
    </div>
    </main>
  )
}

export default Stressometer;