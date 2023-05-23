import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isEditing: true, text: ''}

  changeText = event => {
    this.setState({text: event.target.value})
  }

  changeMode = () => {
    this.setState(prev => ({isEditing: !prev.isEditing}))
  }

  render() {
    const {isEditing, text} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          {isEditing ? (
            <div className="input">
              <input
                className="inputBox"
                type="text"
                onChange={this.changeText}
                value={text}
              />
              <button className="btn" onClick={this.changeMode} type="button">
                Save
              </button>
            </div>
          ) : (
            <div className="input">
              <p className="text">{text}</p>
              <button className="btn" onClick={this.changeMode} type="button">
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
