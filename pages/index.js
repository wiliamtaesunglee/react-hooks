import React, {useState} from "react";

const InputElement = () => {

	const [inputText, setInputText] = useState("");

	return( 
	<div>
		<input 
			onChange={e => {
				setInputText(e.target.value)
			}}
			placeholder="Ender Some Text"/><br/>
			{inputText}
	</div>);
};

export default InputElement;

