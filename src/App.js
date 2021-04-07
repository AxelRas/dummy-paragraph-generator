import { Component } from "react";
import Paragraphs from './Paragraph';
import data from './paragraphs.json';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfParagraphs: 0
    }

    this.addParagraphs = this.addParagraphs.bind(this);
    this.removeParagraphs = this.removeParagraphs.bind(this);
  }

  componentDidMount(){
    $("#counter").attr('value', this.state.numberOfParagraphs);
  }

  // componentDidUpdate(){
  //   console.log(this.state.numberOfParagraphs)
  // }

  addParagraphs(){
    if(this.state.numberOfParagraphs < 8) {
      this.setState({
        numberOfParagraphs: this.state.numberOfParagraphs +1
      });
    }
  }

  removeParagraphs(){
    if(this.state.numberOfParagraphs > 0) {
      this.setState({
        numberOfParagraphs: this.state.numberOfParagraphs -1
      });
    }
  }

  updateCount(val){
    this.setState({
      numberOfParagraphs: val
    })
  }


  render() {
    return (
      <div className="App">

        <h1>Dummy Paragraph Generator</h1>
        <div id="controls">
            <label for="counter">Paragraphs:</label>
            <input name="counter" id="counter" type="number" min="0" max="8" />
            <button onClick={() => this.updateCount(document.getElementById("counter").value)} id="generate-button">GENERATE</button>
        </div>

        <Paragraphs
         data={data.paragraphs.filter(paragraph => paragraph.id <= this.state.numberOfParagraphs)} />
      </div>
    );
  }
}

export default App;
