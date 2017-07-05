import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './Pages.css'

export class Dashboard extends Component {
	render() {
		return (
			<div style={{flex: 1, flexDirection: 'column'}}>
				<Card style={styles.card} className="dashBoardCard">
					<CardTitle title="Card title" subtitle="Card subtitle" />
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</CardText>
					<CardActions>
						<FlatButton label="Action1" />
						<FlatButton label="Action2" />
					</CardActions>
				</Card>
			</div>
		)
	}
}

const styles = {
	card: {
		margin: '2em'
	}
}

export default Dashboard;
