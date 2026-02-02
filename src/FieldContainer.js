import { useState } from "react";
import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export const FieldContainer = (props) => {
	const [indexWin, setIndexWin] = useState(null);

	const check = (arg) => {
		for (const arr of props.WIN_PATTERNS) {
			const [a, b, c] = arr;
			if (arg[a] && arg[a] === arg[b] && arg[a] === arg[c]) {
				return arr;
			}
		}
	};

	function change(idx) {
		if (
			props.field[idx] !== "" ||
			props.isDraw === true ||
			(props.isDraw === false && props.isGameEnded === true)
		) {
			return;
		}

		let arr = [...props.field];
		arr[idx] = props.currentPlayer;
		props.setField(arr);
		const result = check(arr);
		if (result) {
			props.setIsGameEnded(true);
			setIndexWin(result);
			return;
		}
		if (!result && !arr.includes("")) {
			props.setIsDraw(true);
		}
		if (props.currentPlayer === "X") {
			props.setCurrentPlayer("0");
		}
		if (props.currentPlayer === "0") {
			props.setCurrentPlayer("X");
		}
	}

	const startNewGame = () => {
		props.setCurrentPlayer("X");
		props.setIsGameEnded(false);
		props.setIsDraw(false);
		props.setField(["", "", "", "", "", "", "", "", ""]);
		setIndexWin(null);
	};

	return (
		<>
			<FieldLayout
				{...props}
				check={check}
				change={change}
				startNewGame={startNewGame}
				indexWin={indexWin}
			/>
		</>
	);
};
FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	indexWin: PropTypes.array,
};
