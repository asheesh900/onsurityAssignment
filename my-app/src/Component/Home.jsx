import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../Redux/Top10QsByTag/Action'
import QuestionCard from './QuestionCard'
import SelectBox from './SelectBox'

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

            {/* Search questions by tagname */}

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
                        <QuestionCard />
                    </>
                ) :
                (
                    <h2>You can search a question just by the tagname.</h2>
                )
            }

            <hr/>

            {/* Accepted responses on the basis of question id  */}

            <SelectBox className ="my-4" />
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isRequest: state.top10QsByTagreducer.isRequest,
})

const mapDispatchToProps = (dispatch) => ({
    getQuestions: (tag) => dispatch(getQuestions(tag)),
    // getAllQuestions: () => dispatch(getAllQuestions())
})

export default connect (mapStateToProps, mapDispatchToProps) (Home)