import styles from "./information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = (props) => {
	return (
		<>
			{props.isDraw === true ? <h1 className={`${styles.draw}`}>Ничья</h1> : ""}

			{props.isDraw === false && props.isGameEnded === true ? (
				<h1 className={styles.winning}>Победа: {props.currentPlayer}</h1>
			) : (
				""
			)}
			{props.isDraw === false && props.isGameEnded === false ? (
				<h1 className={styles.infogame}>Ходит: {props.currentPlayer}</h1>
			) : (
				""
			)}
		</>
	);
};
InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
};
