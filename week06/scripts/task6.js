/* Lesson 6 */

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

var quoteList = [];

const output = (quotes) => {
      quotes.forEach((quoteObject) => {
      let testBlank = quoteObject.quote;
      if (testBlank.length > 1)
          return displayOutput(quoteObject);

     else {
      return;
    }
  })};
  
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

const sortBy = () => {
    reset();
  
    let sortBy = document.querySelector("#sortBy").value;
    
    switch (sortBy) {
      case "Atonement":
        output(
          quoteList.sort((topic1, topic2) => {
            let topicOne = topic1.topic.toLowerCase();
            let topicTwo = topic2.topic.toLowerCase();
            if (topicOne < topicTwo) return -1;
            else if (topicOne > topicTwo) return 1;
            else return 0;
          })
        );
        break;
      case "templeNameAscending":
        output(
          quoteList.sort((topic1, topic2) => {
            let topicOne = topic1.topic.toLowerCase();
            let topicTwo = topic2.topic.toLowerCase();
            if (topicOne < topicTwo) return -1;
            else if (topicOne > topicTwo) return 1;
            else return 0;
          })
        );
        break;
      case "templeNameDescending":
        output(
          quoteList.sort((topic1, topic2) => {
            let topicOne = topic1.topic.toLowerCase();
            let topicTwo = topic2.topic.toLowerCase();
            if (topicOne > topicTwo) return -1;
            else if (topicOne < topicTwo) return 1;
            else return 0;
          })
        );
        break;
        case "templesAfter2000":
            output(
                quoteList.sort((topic1, topic2) => {
                  let topicOne = topic1.topic.toLowerCase();
                  let topicTwo = topic2.topic.toLowerCase();
                  if (topicOne < topicTwo) return -1;
                  else if (topicOne > topicTwo) return 1;
                  else return 0;
                }).filter((quoteList) => {
                    let sourceDate = quoteList.sourceDate;
                    let sourceYear = sourceDate.substring(sourceDate.length -4);
                    return sourceYear > 1999;
                }
              ))
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