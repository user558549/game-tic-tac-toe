import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export const FieldContainer = (props) => {
	return (
		<>
			<FieldLayout {...props} />
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
