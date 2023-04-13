import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Door() {

    const PATH = "/static/textures/door/"

    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ambientOcclusion.jpg',
        // metalnessMap: PATH + 'metallic.jpg'
    })

    return (
        <mesh castShadow position={[0,2,0]}>
            <boxGeometry args={[8, 8, 8]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}