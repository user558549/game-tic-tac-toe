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
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	indexWin: PropTypes.array,
	change: PropTypes.func.isRequired,
	startNewGame: PropTypes.func.isRequired,
};
