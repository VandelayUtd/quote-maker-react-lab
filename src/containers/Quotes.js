import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"
import quotes from '../reducers/quotes';

class Quotes extends Component {

  
  render() {
    const quotes = this.props.quotes.map((quote) => (
         <QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>
      )
    )

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
   return { quotes: state.quotes }
}

const mapDispatchToProps = {
  removeQuote,
  upvoteQuote, 
  downvoteQuote 
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
