// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {eachTransaction} = props
  const {displayText, typeImage} = eachTransaction

  return (
    <li className="list-item">
      <div>
        <img
          className="list-image"
          src={typeImage}
          alt={displayText.toLowerCase()}
        />
      </div>
      <div className="list-item-description">
        <p className="list-item-title">{displayText}</p>
        <p className="list-item-amount">Rs 0</p>
      </div>
    </li>
  )
}

export default MoneyDetails
