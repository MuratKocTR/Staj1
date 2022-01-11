import React, { Component } from 'react'
import Transformer from 'react-transform-words'

export default class TextTr extends Component {
    matchWords = [
        {
          word: "Koç", // word to search for, can be a phrase or a single word
          className: "Koc3", // class to apply to the word
          action: "doubleclik", // changes the word to replaceText property
          replaceText: "K**" // text that will be used with action 'change'
        },
        {
          word: "Koç", // word to search for, can be a phrase or a single word
          className: "Koc2", // class to apply to the word
          action: "change", // changes the word to replaceText property
          replaceText: "K**" // text that will be used with action 'change'
        },
        {
          word: "Koç", // word to search for, can be a phrase or a single word
          className: "Koc1", // class to apply to the word
          action: "change", // changes the word to replaceText property
          replaceText: "K**" // text that will be used with action 'change'
        },
        {
          word: "Sevgi", // word to search for, can be a phrase or a single word
          className: "Sevgi", // class to apply to the word
          action: "change", // changes the word to replaceText property
          replaceText: "S****" // text that will be used with action 'change'
        },
        {
          word: "Cevher", // word to search for, can be a phrase or a single word
          className: "Cevher", // class to apply to the word
          action: "change", // changes the word to replaceText property
          replaceText: "C*****" // text that will be used with action 'change'
        },
        {
          word: "Murat", // word to search for, can be a phrase or a single word
          className: "Murat", // class to apply to the word
          action: "change", // changes the word to replaceText property
          replaceText: "M****" // text that will be used with action 'change'
        }
      ]
    render() {
        return (
            <div>
                <Transformer
        matchWords={this.matchWords}
        displayText={"murat"} />
            </div>
        )
    }
}
