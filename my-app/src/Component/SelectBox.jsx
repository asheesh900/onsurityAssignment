import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllQuestions} from '../Redux/AllQuestions/Action'
import {getAcceptedAns} from '../Redux/AcceptedAnswers/Action'
import ReactHtmlParser from 'react-html-parser';


class SelectBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount = () => {
        this.props.getAllQuestions();
    }

    handleSelect = (e) => {
        let questionId = e.target.value;
        console.log(questionId)
        this.props.getAcceptedAns(questionId);
    }

    render() {
        const {isData, allQuestions, allAns, isAns, isAnsRequest} = this.props
        let options = [];
        if(isData) {
            allQuestions && allQuestions.items.map((ele, i) => {
                options.push(
                    <option value = {ele.question_i} key = {i} >{ele.question_id} </option>
                )
            })
        }

        let acceptedAns = [];
        console.log(isAns, allAns)
        if(isAns) {
            if(allAns.items) {
                allAns.items.map(ele => {
                    if(ele.is_accepted) {
                        acceptedAns.push(ele);
                        console.log(acceptedAns)
                        return
                    }
                })
            }
        }
        
        return (
            <div>
                <div className="form-group">
                    <label className = "h2" htmlFor="exampleFormControlSelect1">Select a question id</label>
                    <select onChange = {this.handleSelect} className="form-control" id="exampleFormControlSelect1">
                        <option value="">Select an id</option>
                        {
                            options.map(option => option)
                        }
                    </select>
                </div>

                <div>
                        {
                            isAnsRequest ?
                            (
                                acceptedAns ?
                                (
                                    acceptedAns.map((ele, i) => {
                                        return <div key = {i}>{ ReactHtmlParser(ele.body) }</div>;
                                    })
                                ):
                                (
                                    allAns.items.map((ele, i) => {
                                        return <div key = {i}>{ ReactHtmlParser(ele.body) }</div>;
                                    })
                                )
                            ):
                            (
                                <h2>You can get the accepted answers.</h2>
                            )
                        }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isData: state.allQuestionsReducer.isData,
    allQuestions: state.allQuestionsReducer.allQuestions,
    allAns: state.ansReducer.allAns,
    isAns: state.ansReducer.isAns,
    isAnsRequest: state.ansReducer.isAnsRequest,

})

const mapDispatchToProps = (dispatch) => ({
    getAllQuestions: () => dispatch(getAllQuestions()),
    getAcceptedAns: (questionId) => dispatch(getAcceptedAns(questionId)),
})

export default connect (mapStateToProps, mapDispatchToProps) (SelectBox)

