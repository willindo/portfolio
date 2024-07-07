import React, { Suspense } from "react";
import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Lightformer,
  //   useLoader,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  CameraControls,
  Text3D,
  OrbitControls,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
// import { FontLoader } from "three";
export default function Shoe() {
  //   const font = useLoader(FontLoader, "./fonts/Bartex-Regular.json");
  const colorap = useLoader(TextureLoader, `https://picsum.photos/600/350?v=2`);
  const colorap1 = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  // const map1 = useTexture({
  //   map: "PavingStones092_1K_Color.jpg",
  //   displacementMap: "PavingStones092_1K_Displacement.jpg",
  //   normalMap: "PavingStones092_1K_Normal.jpg",
  //   roughnessMap: "PavingStones092_1K_Roughness.jpg",
  //   aoMap: "PavingStones092_1K_AmbientOcclusion.jpg",
  // });

  return (
    <Canvas shadows camera={{ position: [5, 0, 5], fov: 35 }}>
      <ambientLight color="red" intensity={1} />
      <Shoeitem position={[0, 0, 0.85]} />
      <Shoeitem
        position={[0, 0, -0.85]}
        rotation={[0, 0.5, Math.PI]}
        scale={-1}
      />
      {/* <Suspense fallback={null}> */}
      <Text3D
        // smooth={0.05}
        // material={materials.stripes}

        font={"fonts/Boogie Boys_Regular.json"}
        position={[1, 0, -2]}
      >
        Back
        <MeshTransmissionMaterial backgroun={colorap1} />
        <meshStandardMaterial map={colorap} color="Teal" />
      </Text3D>
      {/* </Suspense> */}
      {/* <AccumulativeShadows
        position={[0, -0.5, 0]}
        temporal
        frames={100}
        alphaTest={0.75}
        opacity={0.9}
      > */}
      <Environment resolution={32}>
        <group rotatio={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      {/* </AccumulativeShadows> */}
      <OrbitControls minPolarAngl={Math.PI / 3} maxPolarAngl={Math.PI / 3} />
      {/* <CameraControls /> */}
      {/* <Environment preset="city" /> */}
    </Canvas>
  );
}

function Shoeitem(props) {
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveSha0dow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}
