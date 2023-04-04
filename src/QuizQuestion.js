import React, { Component } from 'react'
import Quiz from './Quiz'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>
                        {/* instruction text */}
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {/* quiz qq button logic */}
                        {this.props.quiz_question.answer_options.map(
                            (answer_option, index) => {
                                return (
                                    <QuizQuestionButton
                                        key={index}
                                        button_text={answer_option}
                                        clickHandler={this.handleClick.bind(
                                            this
                                        )}
                                    />
                                )
                            }
                        )}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
