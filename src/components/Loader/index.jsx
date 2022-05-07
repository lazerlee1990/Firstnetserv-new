import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Loader extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.props.red.current.complete();
		}
	}

	render() {
		return <React.Fragment />
	}
}

export default withRouter(Loader)