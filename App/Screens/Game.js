import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Board from '../Components/Board'
import Helper from '../Helper'
import Voice from '@react-native-community/voice';
import { Icon } from 'react-native-elements'

export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      squares: Helper(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      sourceSelection: -1,
      status: '',
      turn: 'white',
      recognized: '',
      started: '',
      results: ["test"]
    }
    Voice.onSpeechStart = this.onSpeechStart.bind(this)
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
    console.log("onspeechstart")
  }
  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
    console.log("onspeechrecognised")
  }
  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
    console.log("onspeechresults")
  }

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      console.log("in try")
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    console.log("handled click")

    if (this.state.sourceSelection === -1) {
      if (!squares[i] || squares[i].player !== this.state.player) {
        this.setState({ status: "Wrong selection. Choose player " + this.state.player + " pieces." });
        console.log(this.state.status)
        squares[i] ? delete squares[i].style.backgroundColor : null;
      }
      else {
        squares[i].style = { ...squares[i].style, backgroundColor: "RGB(111,143,114)" };
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        });
        console.log(this.state.status)
      }
    }
  }

  render() {

    return (
      <View style={styles.container} >
        <Icon
          name="microphone"
          type='font-awesome-5'
          color="black"
          size={50}
          containerStyle={{
            marginBottom: 30
          }} />
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
        <Button
          title="Voice"
          onPress={this._startRecognition.bind(this)}
          style={{
            marginBottom: 30
          }}
        />
        {this.state.results.map((result, index) => <Text> {result}</Text> )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*

import React from 'react';
import '../index.css';
import Board from './board.js';
import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from '../helpers/board-initialiser.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      sourceSelection: -1,
      status: '',
      turn: 'white'
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();

    if(this.state.sourceSelection === -1){
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Wrong selection. Choose player " + this.state.player + " pieces."});
        squares[i]? delete squares[i].style.backgroundColor: null;
      }
      else{
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"}; // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        });
      }
    }

    else if(this.state.sourceSelection > -1){
      delete squares[this.state.sourceSelection].style.backgroundColor;
      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1,
        });
      }
      else{

        const squares = this.state.squares.slice();
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
        const isDestEnemyOccupied = squares[i]? true : false;
        const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);

        if(isMovePossible && isMoveLegal){
          if(squares[i] !== null){
            if(squares[i].player === 1){
              whiteFallenSoldiers.push(squares[i]);
            }
            else{
              blackFallenSoldiers.push(squares[i]);
            }
          }
          console.log("whiteFallenSoldiers", whiteFallenSoldiers) ;
          console.log("blackFallenSoldiers", blackFallenSoldiers);
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          let player = this.state.player === 1? 2: 1;
          let turn = this.state.turn === 'white'? 'black' : 'white';
          this.setState({
            sourceSelection: -1,
            squares: squares,
            whiteFallenSoldiers: whiteFallenSoldiers,
            blackFallenSoldiers: blackFallenSoldiers,
            player: player,
            status: '',
            turn: turn
          });
        }
        else{
          this.setState({
            status: "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1,
          });
        }
      }
    }

  }

  isMoveLegal(srcToDestPath){
    let isLegal = true;
    for(let i = 0; i < srcToDestPath.length; i++){
      if(this.state.squares[srcToDestPath[i]] !== null){
        isLegal = false;
      }
    }
    return isLegal;
  }

  render() {

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div id="player-turn-box" style={{backgroundColor: this.state.turn}}>

            </div>
            <div className="game-status">{this.state.status}</div>

            <div className="fallen-soldier-block">

              {<FallenSoldierBlock
              whiteFallenSoldiers = {this.state.whiteFallenSoldiers}
              blackFallenSoldiers = {this.state.blackFallenSoldiers}
              />
            }
            </div>

          </div>
        </div>

        <div className="icons-attribution">
          <div> <small> Chess Icons And Favicon (extracted) By en:User:Cburnett [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>, <a href="http://opensource.org/licenses/bsd-license.php">BSD</a> or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>], <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">via Wikimedia Commons</a> </small></div>
        </div>
      </div>


      );
  }
}

        <Icon
          name="microphone"
          type='font-awesome-5'
          color="black"
          size={50}
          containerStyle={{
            marginTop: 30
          }} />

*/