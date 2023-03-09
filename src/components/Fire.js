import React, { useRef, useState, useMemo } from "react";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, MeshStandardMaterial, OrbitControls, Text3D, Text, Image, MarchingCubes, MarchingCube, MarchingPlane, Stars, Plane, Cloud, Sparkles } from "@react-three/drei";
//Components
import img from '../assets/brett2.jpeg'
// Styles
import { useLoader } from 'react-three-fiber'
// React Spring
import { useSpring, a } from "@react-spring/three";
import { TextureLoader } from 'three'
import * as THREE from "three";
import brett2 from '../assets/cheetah.jpeg'
import desert from '../assets/desert.webp'
import { Color } from "three";
import { Sky } from '@react-three/drei'
// soft Shadows
softShadows();

const AnimatedWobbleMaterial = a(MeshWobbleMaterial)
const attach = new THREE.TextureLoader().load(brett2) 
const attach2 = new THREE.TextureLoader().load(desert)


const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();


  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.007));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 2, 1],
    
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow>
      <torusKnotBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
        Speed={1}
        map={attach}
        />
    </a.mesh>

 
  );
};




function Font() {
  return (
    <Text
      glyphGeometryDetail={32}
      font="https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf8.woff"
      fontSize={1.5}
      letterSpacing={-0.075}
      lineHeight={0.8}
      position={[0, 1, 5]} 
      color="white">
      {'J e e l'}
      <MeshWobbleMaterial map={attach} attach="material" color="black" factor={1} />
    </Text>
  )
}




const App = ({texture, width, height}) => {
  const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
  
  return (
    <>
      
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>

          
          <SpinningMesh
            position={[0, 1, 0]}
            color='lightblue'
            args={[2, 2, 1]}
            speed={2}
            map={brett2}
          />
          {/* <SpinningMesh  position={[-2, 1, -5]} color='white' speed={6}  />
          <SpinningMesh  position={[5, 1, -2]} color='red' speed={6}  /> */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade  />
        
         
        </group>
      
 
 
            
           
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls /> 
        <Font />
        <Cloud
  opacity={0.5}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={20} // Number of particles
/>
<Sparkles speed={5} size={5} color={50}  />
      </Canvas> 
      
    </>
  );
};

export default App;