import React, {Component} from 'react';

class MadLibForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           words: {},
           result: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let id = event.target.id;
        let value = event.target.value;

        let dict = {};
        dict[id] = value;

        this.setState({words: Object.assign({}, this.state.words, dict)});
    }

    handleSubmit(event) {
        let story = (<div>
          <b><u>Result</u></b><br/>
          <p>
            Call me {this.state.words.name}. Some {this.state.words.time} ago—never mind how long precisely—having little<br />
            or no {this.state.words.money} in my {this.state.words.container}, and nothing particular to interest me on shore,<br /> 
            I thought I would {this.state.words.verb} about a little and see the {this.state.words.adj} part of the world.<br /> 
            It is a way I have of {this.state.words.verb2} off the {this.state.words.organ} and {this.state.words.verb3} 
            the circulation. Whenever I find myself<br/>growing {this.state.words.emotion} about the {this.state.words.bodypart}
            whenever it is a {this.state.words.adj2}, {this.state.words.adj3} {this.state.words.month} in my soul ...
          </p></div>
        );

        this.setState({result: story});

        event.preventDefault();
    }

    render() {
        return (
            <div class="panel panel-default" align="left">
                <div class="panel-body">
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Name:</label> 
                        <input id="name" type="text" value={this.state.words.name} size="10" onChange={this.handleChange} />
                    <br />
                    <label for="time">Length of time, plural (days, months, etc):</label>
                        <input id="time" type="text" value={this.state.words.time} size="10" onChange={this.handleChange} />
                    <br />
                    <label>
                        Form of currency (dollars, lira, coins, etc): 
                        <input id="money" type="text" value={this.state.words.money} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Container (box, crate, purse, etc): 
                        <input id="container" type="text" value={this.state.words.container} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Verb: 
                        <input id="verb" type="text" value={this.state.words.verb} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Verb ending in -ing: 
                        <input id="verb2" type="text" value={this.state.words.verb2} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Verb ending in -ing: 
                        <input id="verb3" type="text" value={this.state.words.verb3} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Organ (heart, lungs, etc): 
                        <input id="organ" type="text" value={this.state.words.organ} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Emotion: 
                        <input id="emotion" type="text" value={this.state.words.emotion} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label for="bodypart">Body Part (leg, eye, nose, etc): </label>
                        <input id="bodypart" type="text" value={this.state.words.bodypart} size="10" onChange={this.handleChange} />
                    <br />
                    <label for="adj">Adjective: </label> 
                        <input id="adj" type="text" value={this.state.words.adj} size="10" onChange={this.handleChange} />
                    <br />
                    <label>
                        Adjective: 
                        <input id="adj2" type="text" value={this.state.words.adj2} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Adjective: 
                        <input id="adj3" type="text" value={this.state.words.adj3} size="10" onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Month: 
                        <input id="month" type="text" value={this.state.words.month} size="10" onChange={this.handleChange} />
                    </label><br /><br />
                    <input type="submit" value="submit" />
                </form>
                </div>
                <br/>
                {this.state.result}
            </div>
        );
    }
}

export default MadLibForm;