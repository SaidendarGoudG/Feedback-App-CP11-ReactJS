import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => {
    this.setState(() => ({isEmojiClicked: true}))
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {!isEmojiClicked && (
          <div className="feedback-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <button
                    className="emoji-button"
                    type="button"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      className="emoji"
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                    />
                  </button>
                  <p className="description">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isEmojiClicked && (
          <div className="feedback-container">
            <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="feedback-heading">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performnce
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
