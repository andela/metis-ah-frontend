import reportArticle from "../../../src/store/reducers/reportArticle";

const initialState = {
  error: "",
  loading: false,
  message: ""
};

const reportArticleSuccess = {
  loading: false,
  error: "",
  message: "This case has been recorded and will be reviewed"
};
const reportArticleError = {
  loading: false,
  error: "You have reported this article already",
  message: ""
};

describe("Report Article reducer", () => {
  it("should set the initial state", () => {
    const state = reportArticle(undefined, { type: "@@INIT" });
    expect(state).toEqual(initialState);
  });

  it("should handle report article action", () => {
    const action = {
      type: "REPORT_ARTICLE_SUCCESS",
      payload: "This case has been recorded and will be reviewed"
    };

    const state = reportArticle(undefined, action);
    expect(state).toEqual(reportArticleSuccess);
  });

  it("should handle report article error", () => {
    const action = {
      type: "REPORT_ARTICLE_FAILURE",
      payload: "You have reported this article already"
    };

    const state = reportArticle(undefined, action);
    expect(state).toEqual(reportArticleError);
  });
});
