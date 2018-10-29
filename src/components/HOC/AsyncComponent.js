import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    class Async extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render () {
            const AsyncComponent = this.state.component;

            return AsyncComponent ? <AsyncComponent {...this.props} /> : null;
        }
    }

    return Async;
}

export default asyncComponent;
