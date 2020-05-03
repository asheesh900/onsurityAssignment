import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../Redux/Action'
import QuestionCard from './QuestionCard'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.searchString = React.createRef()

    }

    handleChange = () => {
        let tag = this.searchString.current.value;
        this.props.getQuestions(tag);
    }

    debounce = (fn, delay) => {
        let timerId;
        return () => {
            clearTimeout(timerId);
            timerId = setTimeout(() => fn(), delay);
        }
    }
    
    render() {
        const {isRequest} = this.props;

        return (
          <div className = "container">
            <h1>Search questions by tag</h1>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a tag like React, Array etc."
                aria-label="tagname"
                aria-describedby="basic-addon1"
                onChange = {this.debounce(this.handleChange, 1000)}
                ref = {this.searchString}
              />
            </div>
            {
                isRequest ?
                (
                    <>
                        <h2>Available questions by tagname </h2>
                        <QuestionCard className = "d-flex" />
                    </>
                ) :
                (
                    <h2>You can search a question just by the tagname.</h2>
                )
            }
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isRequest: state.isRequest,
})

const mapDispatchToProps = (dispatch) => ({
    getQuestions: (tag) => dispatch(getQuestions(tag))
})

export default connect (mapStateToProps, mapDispatchToProps) (Home)