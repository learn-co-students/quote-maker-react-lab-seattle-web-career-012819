import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  renderQuotes() {
    return this.props.quotes.map(quote => {
      return <QuoteCard
                key={quote.id}
                quote={quote}
                removeQuote={this.props.removeQuote} 
                upvoteQuote={this.props.upvoteQuote} 
                downvoteQuote={this.props.downvoteQuote} 
              />
    })
  }

  render() {
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ quotes: state.quotes })

const mapDispatchToProps = dispatch => {
  return { 
    removeQuote: (quote) => dispatch(removeQuote(quote)), 
    upvoteQuote: (quote) => dispatch(upvoteQuote(quote)), 
    downvoteQuote: (quote) => dispatch(downvoteQuote(quote)) 
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Quotes);
