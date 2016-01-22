document.addEventListener('DOMContentLoaded', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repos/tvararu/cv');
  request.setRequestHeader('Accept', 'application/vnd.github.v3+json');
  request.onreadystatechange = function handleStateChange() {
    var responseReady = (request.readyState === 4 && this.status >= 200 && this.status < 300);
    if (responseReady) {
      var data = JSON.parse(request.responseText);

      var el = document.getElementById('date');
      var parsedDate = (new Date(data['updated_at'])).toDateString();
      el.innerHTML = parsedDate;

      var wrapper = document.getElementById('last-updated');
      wrapper.className += 'ready';
    }
  };
  request.send();
});
