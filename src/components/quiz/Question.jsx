import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component {
  onChange(e) {
    e.preventDefault();
    const {setCurrent, setScore, question, score} = this.props;
    let selected = e.target.value;
    if(selected == question.correct) {
      setScore(this.props.score + 1);
      console.log('Correct');
    }
    setCurrent(this.props.current + 1);
    console.log(selected);
  }

  render() {
    const {question} = this.props;
    return(
      <div className="well">
        <h2>{question.text}</h2>
        <hr />
        <ul className="list-group">
          {
            this.props.question.choices.map(choice => {
              return(
                <li className="list-group-item" key={choice.id}>
                  {choice.id} <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Question
