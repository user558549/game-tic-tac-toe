import { InformationLayout } from "./InformationLayout";
import PropTypes from "prop-types";

export const InformationContainer = (props) => {
	return (
		<>
			<InformationLayout {...props} />
		</>
	);
};
InformationContainer.propTypes = {
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
