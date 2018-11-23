import comments from "Reducers/comments";
import constants from "../../src/store/constants";

const {
  CREATE_COMMENT_STARTED,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  VIEW_COMMENTS_STARTED,
  VIEW_COMMENTS_SUCCESS,
  VIEW_COMMENTS_FAILED,
  CLEAR_COMMENT,
  LIKE_COMMENT_STARTED,
  LIKE_COMMENT_SUCCESS
} = constants;

const initialState = {
  comment: {},
  comments: [],
  isCreateCommentLoading: false,
  isFetchCommentLoading: false
};

const updatedState = {
  comment: {},
  comments: [
    {
      id: 4,
      content: "Good article",
      edited: false,
      createdAt: "2018-11-22T09:39:51.125Z",
      updatedAt: "2018-11-22T09:39:51.125Z",
      articleId: 1,
      userId: 16,
      user: {
        id: 16,
        username: "username",
        firstname: "Vandal",
        lastname: "Savage",
        image:
          "https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png"
      },
      likes: [{ id: 4, userId: 2, liked: true }],
      likeCount: 1
    }
  ]
};

describe("COMMENT REDUCER TESTS", () => {
  test("should return default", () => {
    const state = comments(undefined, { type: "@@INIT" });
    expect(state).toEqual(initialState);
  });

  test("should set isLoading to true", () => {
    const state = comments(initialState, { type: CREATE_COMMENT_STARTED });
    expect(state.isCreateCommentLoading).toEqual(true);
  });

  test("should create comment successfully on success action", () => {
    const state = comments(initialState, {
      type: CREATE_COMMENT_SUCCESS,
      comment: {}
    });
    expect(state.comments).toEqual([{}]);
    expect(state.comment).toEqual({});
    expect(state.isCreateCommentLoading).toEqual(false);
  });

  test("should fail on failed action", () => {
    const state = comments(initialState, { type: CREATE_COMMENT_FAILED });
    expect(state.isCreateCommentLoading).toEqual(false);
  });

  test("should set isFetchCommentLoading to true on fetch comment action", () => {
    const state = comments(initialState, { type: VIEW_COMMENTS_STARTED });
    expect(state.isFetchCommentLoading).toEqual(true);
  });

  test("returns successfully on successful comment fetch action", () => {
    const state = comments(updatedState, {
      type: VIEW_COMMENTS_SUCCESS,
      comments: updatedState.comments
    });
    expect(state.isFetchCommentLoading).toEqual(false);
    expect(state.comments).toEqual(updatedState.comments);
  });

  test("fails on failed action", () => {
    const state = comments(initialState, { type: VIEW_COMMENTS_FAILED });
    expect(state.isFetchCommentLoading).toEqual(false);
  });

  test("clear comments on CLEAR_COMMENT action", () => {
    const state = comments(initialState, { type: CLEAR_COMMENT });
    expect(state.comments).toEqual([]);
  });

  test("should like comment", () => {
    const state = comments(updatedState, { 
      type: LIKE_COMMENT_SUCCESS,
      comments: updatedState.comments
    });
    expect(state.comments).toEqual(updatedState.comments);
  });
});
