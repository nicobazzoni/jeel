import { Vector3 } from "three";
import React, { useRef } from "react";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene} = useGLTF("cheetah_statue_thats_at_my_barbers_shop (1).glb");

  return <primitive object={scene} scale={0.01}  {...props} />;
}









function EyeBall() {



 
return ( 


  
  <Canvas dpr={[1,2]} shadows camera={{ fov: 45}} style={{"position": "absolute"}} >
    <color attach="background" args={["#101010"]} />  
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
    <Stage environment= 'city'>
      <Model scale={0.01} />

    </Stage>

    
    </PresentationControls>
   
  </Canvas>

)

}
 



  

export default EyeBall;