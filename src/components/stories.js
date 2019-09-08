import React from 'react';
import { connect } from 'react-redux';
import getReadableStories from '../selectors/story';
import './stories.css';

import Story from './story';
import StoriesHeader from './storiesHeader';

const COLUMNS = {
	title: {
		label: 'Title',
		width: '40%',
	},
	author: {
		label: 'Author',
		width: '30%',
	},
	comments: {
		label: 'Comments',
		width: '10%',
	},
	points: {
		label: 'Points',
		width: '10%',
	},
	archive: {
		width: '10%',
	},
};

const Stories = ({ stories }) => {
	return (
		<div className='stories'>
			<StoriesHeader columns={ COLUMNS } />
			{(stories || []).map( story => {
					return (
							<Story 
							key={story.objectID }
							story={story}
							columns={COLUMNS}
							/>
					);
			} )
			}
		</div>
	);
};

const mapStateToProps = state => {
	return { stories: getReadableStories(state) };
};



export default connect(
	mapStateToProps
)(Stories);