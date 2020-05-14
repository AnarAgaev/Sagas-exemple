import React from 'react';
import { connect } from "react-redux";
import fetchDog from "./action-creators";
import "./App.scss";


class App extends React.Component {
  render () {

    const {
      fetchDog, url,
      loading, error
    } = this.props;

    return (
      <div className="container">
        <button onClick={ fetchDog } />
        { loading
            ? <div>Loading...</div>
            : error
              ? <div>Error, try again</div>
              : <div className="picture"><img src={ url } alt=""/></div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({
    url, loading, error
  }) => {

  return { url, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDog: () => fetchDog(dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
