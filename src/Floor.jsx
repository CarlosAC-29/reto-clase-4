export default function Floor() {
	return (
		<mesh receiveShadow position-y={-4} rotation-x={-Math.PI * 0.5}>
			<planeGeometry args={[40, 40]} />
			<meshStandardMaterial color="gray" />
		</mesh>
	);
}
