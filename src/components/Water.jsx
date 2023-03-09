

       
     
  
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Cloud, Sky, Sparkles } from "@react-three/drei";
import { Canvas, useFrame  } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import PageSection from "./PageSection";

import brett1 from "../assets/cheetah.jpeg";
import brett2 from "../assets/whitecheetahprint.webp";
import brett3 from "../assets/whitecheetahface.jpeg";
import brett4 from "../assets/cheetaheyes2.jpeg";

 const url = "../assets/you.mp3";
const Box = (props) => {
 
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const [active, setActive] = useState(false);
  // Set up state for the hovered and active state 
const [playing, setPlaying] = useState(false);
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  
  const texture = useMemo(() => new THREE.TextureLoader().load(brett1), []);
  
  return (
   
    <mesh
    {...props}
    ref={mesh}
    scale={active ? [10, 10, 10] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active) }
      >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
    
  );
}



const Cube= (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state 
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotateSpeed = 0.05;
    
  });
  
  const texture = useMemo(() => new THREE.TextureLoader().load(brett2), []);

 return (

  <mesh
    {...props}
    ref={mesh}
    scale={active ? [10, 10, 10] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active)}
      >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
}


const Sphere= (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state 
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotateSpeed = 0.05;
    
  });
  
  const texture = useMemo(() => new THREE.TextureLoader().load(brett3), []);

 return (

  <mesh
    {...props}
    ref={mesh}
    scale={active ? [20, 20, 20] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active)}
      >
      <sphereGeometry args={[0.5, 50, 50]}  />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
}


const Orb= (props) => {
 
 
   const [active, setActive] = useState(false);
 
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state 


  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotateSpeed = 0.05;
    
  });
  
  const texture = useMemo(() => new THREE.TextureLoader().load(brett4), []);

 return (

  <mesh
    {...props}
    ref={mesh}
    scale={active ? [20, 20, 20] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active)}
      >
      <sphereGeometry args={[0.5, 50, 50]}  />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
}






const Water= () => {
  return (

     
     
    <Canvas >
     
    
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} rotateSpeed={5} />
      <Cube position={[1.5, 0, 0]} />
      <Sphere position={[1.2, 2.1, 0]} />
      <Orb position={[-1.0, 2.1, 0]}   />
      <Sky />
    
    </Canvas> 
   
 
  );
}


export default Water;

