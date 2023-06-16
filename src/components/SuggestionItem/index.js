// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {each, onButton} = props
  const {id, suggestion} = each

  const onButtons = () => {
    console.log(id)
    onButton(id)
  }

  return (
    <li>
      <p> {suggestion} </p>
      <button type="button" className="button-style" onClick={onButtons}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
