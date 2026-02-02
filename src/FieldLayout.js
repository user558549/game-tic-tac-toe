import styles from "./FieldLayout.module.css";
import PropTypes from "prop-types";

export const FieldLayout = (props) => {
	return (
		<>
			<div className={styles.field}>
				{props.field.map((item, index) => (
					<button
						onClick={() => {
							props.change(index);
						}}
						key={index}
						className={`${styles.btn} ${props.indexWin && props.indexWin.includes(index) ? styles.winning : ""} ${props.isDraw === true ? styles.draw : ""}`}
					>
						{item}
					</button>
				))}
			</div>
			<button className={styles.btnnewgame} onClick={props.startNewGame}>
				Начать заново
			</button>
		</>
	);
};

FieldLayout.propTypes = {
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
