// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {name: ''}

  onChange = event => {
    this.setState({name: event.target.value})
  }

  onButton = id => {
    const {suggestionsList} = this.props
    const display = suggestionsList.filter(item => item.id === id)
    console.log(display[0])
    this.setState({name: display[0].suggestion})
  }

  render() {
    const {name} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(name),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="search-box">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <ul>
            {filteredList.map(eachItem => (
              <SuggestionItem
                each={eachItem}
                key={eachItem.id}
                onButton={this.onButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
