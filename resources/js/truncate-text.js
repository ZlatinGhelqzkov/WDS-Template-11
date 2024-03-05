function truncateText(selector, maxLength) {
    var element = document.querySelector(selector);
    var truncated = element.innerText;
  
    if (truncated.length > maxLength) {
      // Split the string by spaces to get words
      var truncatedWords = truncated.split(/\s+/).slice(0, maxLength).join(' ');
      element.innerText = truncatedWords + '...';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Invoke the truncateText function with the ID of your <p> tag and the number of words you want to keep
    truncateText('#blog-summary', 24);
  });