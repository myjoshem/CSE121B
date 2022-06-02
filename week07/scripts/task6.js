/* Lesson 6 */
// formats HTML for output to page
function displayOutput(input) {
      let article = document.createElement("article");
  
      let topic = document.createElement("h3");
      topic.textContent = input.topic;
  
      let aQuote = document.createElement("q");
      aQuote.textContent = input.quote;
  
      let sourceDate = document.createElement("h4");
      sourceDate.textContent = input.sourceDate;
  
      article.appendChild(topic);
      article.appendChild(aQuote);
      article.appendChild(sourceDate);
  
      document.querySelector("#quotes").appendChild(article);
}

/* function sortList(array, sort)
array.filter((array) => {
  const aTopic = array.topic;
 return aTopic === sortBy;
}) */

/* function sortList (quoteList) {
  const aTopic = quoteList.topic;
 return aTopic === sortBy;
};
 */

// global array that holds data fetched
var quoteList = [];

// evaluates output, eliminating blank quotes
const output = (quotes) => {
      quotes.forEach((quoteObject) => {
      let testBlank = quoteObject.quote;
      if (testBlank.length > 1)
          return displayOutput(quoteObject);
     else {
      return;
    }
  })};

 // retrieve data from external source 
const getQuotes = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/6cb88ab0-2815-45cf-a429-4f76551d1746"
    );
    quoteList = await response.json();
    output(quoteList);
  };
  getQuotes();

const reset = () => {
    document.querySelector("#quotes").innerHTML = "";
  };

  // sorts by selected drop down option, organized by 'topic'. Calls 'output' function.
const sortBy = () => {
    reset();
  
    let sortBy = document.querySelector("#sortBy").value;
    
    switch (sortBy) {
      case "Atonement":
        output(quoteList.filter((quoteList) => {
            const aTopic = quoteList.topic;
           return aTopic === sortBy;
          })
        );
        break;
      case "Family":
        output(
          quoteList.filter((quoteList) => {
            const aTopic = quoteList.topic;
           return aTopic === sortBy;
          })
        );
        break;
      case "Addictions":
        output(
          quoteList.filter((quoteList) => {
            const aTopic = quoteList.topic;
           return aTopic === sortBy;
          })
        );
        break;
        default:
        output(
          quoteList.sort((topic1, topic2) =>
            topic1.topic.toLowerCase() > topic2.topic.toLowerCase()
              ? 1
              : topic2.topic.toLowerCase() >
                topic1.topic.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
  };

  // do not forget to listen!!
  document.querySelector("#sortBy").addEventListener("change", sortBy);