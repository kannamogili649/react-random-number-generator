import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  creteRandom = () => {
    const val = Math.ceil(Math.random() * 100)
    return this.setState({count: val})
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="container">
        <div className="content-div">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100.</p>
          <button onClick={this.creteRandom} className="button" type="submit">
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
