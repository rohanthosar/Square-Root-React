import {useState, useRef} from "react";

function SquareRoot()
{

	const rNum = useRef();

	const [num, setNum] = useState("");
	const [ans, setAns] = useState("");

	const hNum = (event) => {setNum(event.target.value); }

	const compute = (event) => {
		event.preventDefault();
		if (num == "")
		{
			alert("number is empty");
			rNum.cuurrent.focus();
			setAns("");
			return;
		}
		let n = parseFloat(num);
		if (n<0)
		{
			alert("-ve number not allowed");
			rNum.current.focus();
			setNum("");
			setAns("");
			return;
		}
		let res = Math.sqrt(n);
		res = res.toFixed(2);
		setAns("res=" + res);

		return(
		<>
			<center>
			<h1> Square Root App </h1>
			<form onSubmit ={compute}>
				<input type ="number" step ="any" placeholder="enter number"
				onChange={hNum}ref={rNum}value={num}/>
				<br/><br/>
				<input type ="submit" value="Find Square Root"/>
			</form>
			<h1> {ans} </h1>
			</center>
			</>
			);
}

export default SquareRoot;

