import Fgraph from '../../components/Fgraph/Fgraph'
import Lgraph from '../../components/Lgraph/Lgraph'

const Test = () => {
    return (
        <section className="flex grow flex-col items-center bg-[var(--gray1)] dark:bg-[var(--gray2)] p-10">
          <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)] dark:text-[var(--gray1)]'>Sensor Data Viewer</h1>
    
          <div>
            <div className="mb-12">
                <h2 className='text-1xl text-center m-10 font-bold text-[var(--gray2)] dark:text-[var(--gray1)]'>Flux Graph</h2>
                {<Fgraph />}
            </div>
        
            <div>
                <h2 className='text-1xl text-center m-10 font-bold text-[var(--gray2)] dark:text-[var(--gray1)]'>Luminosity Graph</h2>
                <Lgraph />
            </div>
          </div>
        </section>
      );
    }

export default Test