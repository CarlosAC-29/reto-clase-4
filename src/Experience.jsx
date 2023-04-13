import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { HemisphereLightHelper, PointLightHelper, SpotLightHelper, RectAreaLight } from 'three';

export default function Experience() {
    const hemisphereLightRef = useRef(null);
    const pointLightRef = useRef(null);
    const RectAreaLightRef = useRef(null);
    const spotLightRef = useRef(null);

    useHelper(pointLightRef, PointLightHelper, 3);
    // useHelper(hemisphereLightRef, HemisphereLightHelper, 3);
    // useHelper(RectAreaLightRef, RectAreaLight, 3);
    // useHelper(spotLightRef, SpotLightHelper, 3);
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        <pointLight ref={pointLightRef} castShadow position={[15, 20, 10]} intensity={10} />
        {/* <RectAreaLightRef ref={RectAreaLightRef} castShadow position={[15, 20, 10]} intensity={1.5} /> */}
        {/* <spotLight ref={spotLightRef} castShadow position={[15, 20, 10]} intensity={2} /> */}
        {/* <hemisphereLight ref={hemisphereLightRef} castShadow position={[15, 20, 10]} intensity={2} /> */}
        <ambientLight intensity={0.5} />
        <Door />
        <Floor />
    </>
}