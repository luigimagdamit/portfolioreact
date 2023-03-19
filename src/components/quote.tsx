import Quotes from 'randomquote-api';

export default function Quote() {
    let qu = Quotes.randomQuote();
    return (
      <div className = "quote">
        <h1>Quote of the Day</h1>
        <hr></hr>
        <i>
“If you do not know what you feel, then it is difficult to choose love; it is better to fall. Then you do not have to be responsible for your actions.” </i>
        <p>-bell hooks</p>    
      </div>
     
    )
  }