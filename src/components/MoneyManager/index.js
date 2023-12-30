import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
// import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeOptionId = event => this.setState({optionId: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTypeOption => eachTypeOption.optionId === optionId,
    )
    const {displayText} = typeOption

    const newHistory = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {titleInput, amountInput, optionId, historyList} = this.state
    console.log(historyList)

    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="heading-in-welcome-container">Hi, Richard</h1>
          <p className="description-in-welcome-container">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>

        <ul className="money-details-container">
          <li className="list-item">
            <div>
              <img
                className="list-image"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
                alt="balance"
              />
            </div>
            <div className="list-item-description">
              <p className="list-item-title">Your Balance</p>
              <p className="list-item-amount">Rs 0</p>
            </div>
          </li>
          {transactionTypeOptions.map(eachTransaction => (
            <MoneyDetails eachTransaction={eachTransaction} />
          ))}
        </ul>

        <div className="transaction-and-history-conatainer">
          <div className="transaction-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="titleText" className="label-text">
                  TITLE
                </label>
                <input
                  id="titleText"
                  className="input-text"
                  type="text"
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amountText" className="label-text">
                  AMOUNT
                </label>
                <input
                  id="amountText"
                  className="input-text"
                  type="text"
                  placeholder="AMOUNT"
                  value={amountInput}
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="typeText" className="label-text">
                  TYPE
                </label>
                <select
                  id="typeText"
                  className="input-text"
                  value={optionId}
                  onChange={this.onChangeOptionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>

          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-table-container">
              <div className="table-headings-row">
                <p className="table-heading-row-element">Title</p>
                <p className="table-heading-row-element">Amount</p>
                <p className="table-heading-row-element">Type</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
