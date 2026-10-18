import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../../types/Comment';

export interface CommentState {
  comments: Comment[];
  loaded: boolean;
  hasError: boolean;
}

const initialState: CommentState = {
  comments: [] as Comment[],
  loaded: false,
  hasError: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
      state.hasError = false;
      state.loaded = true;
    },

    setCommentsError: state => {
      state.hasError = true;
      state.loaded = true;
    },

    startLoading: state => {
      state.loaded = false;
      state.hasError = false;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(item => item.id !== action.payload);
    },
  },
});

export default commentsSlice.reducer;
export const { setComments, setCommentsError, startLoading, addComment, deleteComment } =
  commentsSlice.actions;
