import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionCard extends Component {
  render() {
    const { questionsByTag, isLoading, isData } = this.props;

    return isLoading ? (
      <h1>spinner</h1>
    ) : (
      <div className="container ">
        <div className="row">
          {questionsByTag.items.map((ele, i) => {
            return (
              <div className="col-4 my-4" key = {i}>
                <div className="card bg-dark text-white card-shadow" style={{ width: "18rem", height: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Question {i + 1} </h5>
                    <p className="card-text">{ele.title}</p>
                    <p className="card-text">Created at: {ele.creation_date}</p>
                    <a href={ele.link} target="_blank" className="bg-light mt-2 btn">
                      Get Answer
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isData: state.isData,
  questionsByTag: state.questionsByTag,
});

export default connect(mapStateToProps, null)(QuestionCard);
