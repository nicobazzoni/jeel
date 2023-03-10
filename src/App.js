import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import Water from "./components/Water";
import Dalle from "./components/Dalle";
import Fire from "./components/Fire";
import About from "./components/About";
import ReactDOM from "react-dom";
import Tunes from "./components/Tunes";
import Blob from "./components/Blob";

import Eye from "./components/Eye";
import Eyeball from "./components/Eyeball";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import * as THREE from "three";

function App() { 
  
 

  return (
    <div className="w-full ">
      <Navbar  />
    
    <div className="  nav-background  w-full h-5 "></div>
    
    <div id='home' className=" h-96  w-full bg-stone-900"> 
      <Fire  className=''  />
    </div> 

    <div className=" border-none   border-slate-400  w-full h-10 bg-slate-100 p-2">  Music</div>
    <div className="nav-background6 rounded-full">
        <AudioPlayer  />
    </div>
    <div className=" border-none  border-slate-400  w-full h-10 bg-slate-100 p-2"> Interact</div>
       <div className='h-screen'>

       <Eye />
     
   </div>
   <div className='h-screen'>

<Eyeball />

</div>
    <br></br>
            
    
      
    
      <div className="  bg-black" id="interact"> 
                    
        {/* <div className="h-5 text-center"> 
            <h1 className="text-rose-300 text-sm ml-5"> interact <br></br> </h1>
        </div> */}


              
    <div className="h-screen"> 
              
          <Water />
          </div>

          
       </div>
           
        
       <div className=" border-none  border-slate-400  w-full h-10 bg-slate-100 p-2"> Dalle AI</div>
          <section className="" id='openai '>
             <Dalle id='openai '/>
          </section>
          <div className=" border-none  border-slate-400  w-full h-10 bg-slate-100 p-2"> Chat GPT</div>

          <Tunes />
        
           <Footer />

           <div className=" sticky border-none text-white   w-full h-10 bg-slate-100 p-2">  <About />  </div>
       
    </div>
    
    
  );
}

export default App;
