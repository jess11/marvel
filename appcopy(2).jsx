let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id:1,
  },
  {
    name: "Andrew Chalkey",
    score: 35,
    id:2,
  },
  {
    name: "Alena Holligan",
    score:30,
    id:3,
  }
]


function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>  {/* if using regular JS put it in between curly braces, but you can't use if/else statements*/}
    </div>
  )
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

//Component class with state (data that can change)
let Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired,
  },
  getInitialState: function(){
    return {
      score: this.props.initialScore,
    }
  },
  incrementScore: function(e){
    this.setState({         {/* this.setState tells react that something has changed and needs to be rerendered*/}
      score: (this.state.score + 1),
    })
  },
  decrementScore: function(e){
    this.setState({
      score:(this.state.score -1)
    })
  },
  render: function(){
    return(
      <div className="counter">
        <button className= "counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className = "counter-score"> {this.state.score} </div>
        <button className= "counter-action increment" onClick= {this.incrementScore}> + </button>
      </div>
    )
  }
})

function Player(props){
  return(
    <div className= "player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter initialScore={player.score}/>
      </div>
    </div>
  )
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

//components start with capital letter and can only have one single virtual DOM element, in this case it is a DIV
//props refers to the key/value pairs in the ReactDOM.render expression at the bottom
function Application(props){
  return(
    <div className="scoreboard">
      {/*classnames are used for styling not retrieving elements*/}
      <Header title={props.title}/>
      <div className="players">
        {props.players.map(function(player){
          return <Player name ={player.name} score={player.score} key={player.id}/>
          {/* a key allows for react to know to move items around instead of replacing them all*/}
        })}
        {/*<Player name ="Jim Hoskins" score={31}/>
        <Player name ="Andrew Chalkey" score={33}/>*/}
      </div>
    </div>
  );
}

//ensures that for eg the title is only a string and it is required
Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

//allows for a default value (optional)
Application.defaultProps ={
  title: "Scoreboard",
}

//Application has a self closing tag as it has no children
ReactDOM.render(<Application players = {PLAYERS}/>, document.getElementById('container'));
