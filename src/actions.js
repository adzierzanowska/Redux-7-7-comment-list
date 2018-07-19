import uuid from 'uuid';

// ADD COMMENT //

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

// boundAddComment('nowy komentarz!');

// EDIT COMMENT //

export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: text
    }
}

// REMOVE COMMENT //

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

// THUMB UP COMMENT //

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

// THUMB DOWN COMMENT //

export const THUMB_DOWN_COMMENT = ' THUMB_DOWN_COMMENT';

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}
