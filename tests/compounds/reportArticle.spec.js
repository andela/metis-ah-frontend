import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ReportArticle from "../../src/components/compounds/ReportArticle";

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn;

const props = {
  makeReport: mockFunction,
  clearResponseMessage: mockFunction
};

describe("Report Article Component", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ReportArticle />
    </Provider>
  );

  it("should render the report article component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
