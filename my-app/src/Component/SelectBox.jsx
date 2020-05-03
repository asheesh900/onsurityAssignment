import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllQuestions} from '../Redux/AllQuestions/Action'


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
        this.props.getAcceptedAns(questionId);
    }

    render() {
        const {isData, allQuestions} = this.props
        // console.log(allQuestions)
        let options = [];
        if(isData) {
            allQuestions && allQuestions.items.map((ele, i) => {
                options.push(
                    <option value = {ele.question_i} key = {i} >{ele.question_id} </option>
                )
            })
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isData: state.allQuestionsReducer.isData,
    allQuestions: state.allQuestionsReducer.allQuestions,
})

const mapDispatchToProps = (dispatch) => ({
    getAllQuestions: () => dispatch(getAllQuestions()),
    getAcceptedAns: () => dispatch(getAcceptedAns(questionId)),
})

export default connect (mapStateToProps, mapDispatchToProps) (SelectBox)

