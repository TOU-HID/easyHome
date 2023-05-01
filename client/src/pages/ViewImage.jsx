import React, { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

function ViewImage({ src }) {
	console.log(src);
	const projection = useMemo(() => new EquirectProjection({
		src
	}), []);

	return (
		<div className='w-full'>
			<View360 className="is-square" projection={projection} />
		</div>
	)
}

export default ViewImage
