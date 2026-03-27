import { useState } from "react";

import { AppLayout } from "./AppLayout";

export const AppContainer = () => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
	const [indexWin, setIndexWin] = useState(null);

	const startNewGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
		setIndexWin(null);
	};

	const check = (arg) => {
		for (const arr of WIN_PATTERNS) {
			const [a, b, c] = arr;
			if (arg[a] && arg[a] === arg[b] && arg[a] === arg[c]) {
				return arr;
			}
		}
	};

	function change(idx) {
		if (
			field[idx] !== "" ||
			isDraw === true ||
			(isDraw === false && isGameEnded === true)
		) {
			return;
		}

		let arr = [...field];
		arr[idx] = currentPlayer;
		setField(arr);
		const result = check(arr);
		if (result) {
			setIsGameEnded(true);
			setIndexWin(result);
			return;
		}
		if (!result && !arr.includes("")) {
			setIsDraw(true);
		}
		setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
	}

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			field={field}
			indexWin={indexWin}
			isGameEnded={isGameEnded}
			startNewGame={startNewGame}
			change={change}
		/>
	);
};
