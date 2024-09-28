

import { useState, useEffect } from "react";

function Hooks() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		alert("your count is changing")
	}, [count]);

	return (
		<div>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Click {count} times{" "}
			</button>
		</div>
	);
}
export default Hooks;
