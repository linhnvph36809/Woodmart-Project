import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import "./category.css";

function InputRange() {
	const [minValue, set_minValue] = useState(25);
	const [maxValue, set_maxValue] = useState(75);

	type ChangeResult = {
		min: number;
		max: number;
		minValue: number;
		maxValue: number;
	};

	const handleInput = (e: ChangeResult) => {
		console.log(13);

		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
	};

	return (
		<div className="App">
			<MultiRangeSlider
				style={{ border: 'none', padding: 0, borderRadius: '0' }}
				barInnerColor='#f59a57'
				barLeftColor="#0000001b"
				barRightColor="#0000001b"
				min={0}
				label={false}
				ruler={false}
				step={10}
				max={1000}
				minValue={minValue}
				maxValue={maxValue}
				onInput={(e) => {
					handleInput(e);
				}}
			/>
			<div className="flex justify-between items-center mt-7 mb-5 pb-8 border-b-[1px] border-solid border-[#0000001b]">
				<div className="flex items-center gap-2 text-font text-base text-color-black">
					Price:
					<h4 className="title-color wd-text-font-bold text-base">$400</h4>
					<span className="title-color wd-text-font-bold text-base"> — </span>
					<h4 className="title-color wd-text-font-bold text-base">$400</h4>
				</div>
				<button className="min-w-[60px] rounded-[35px] hover:bg-[#efefef] h-[36px] nav-color bg-[#f7f7f7] text-[12px] wd-text-font-bold">Filter</button>
			</div>
		</div>
	);
}

export default InputRange;