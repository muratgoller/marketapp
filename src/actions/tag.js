export const SET_TAGS = 'SET_TAGS'
export const SET_TAGS_FILTER = 'SET_TAGS_FILTER'
export const SET_TAG_CHECKED_STATUS = 'SET_TAG_CHECKED_STATUS'
export const SET_TAG_ALL_CHECKED_STATUS = 'SET_TAG_ALL_CHECKED_STATUS'

const setTags = (tags) => {
    return {
        type: SET_TAGS,
		tags
    }
}

const setTagsFilter = (filter) => {
    return {
        type: SET_TAGS_FILTER,
		filter
    }
}

const setTagCheckedStatus = (key, status) => {
    return {
        type: SET_TAG_CHECKED_STATUS,
		key,
        status
    }
}

const setTagAllCheckedStatus = (status) => {
    return {
        type: SET_TAG_ALL_CHECKED_STATUS,
        status
    }
}

export default { 
	setTags,
    setTagsFilter,
    setTagCheckedStatus,
    setTagAllCheckedStatus
}