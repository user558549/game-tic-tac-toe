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
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	indexWin: PropTypes.array,
	change: PropTypes.func.isRequired,
	startNewGame: PropTypes.func.isRequired,
};
