const isNotArcived = archivedIds => story =>
    archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
    storyState.filter( isNotArcived(archiveState) );

export default getReadableStories;