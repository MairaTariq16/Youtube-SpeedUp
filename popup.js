  //functionality to popup.html elements

  document.addEventListener('DOMContentLoaded', function() {
      chrome.storage.local.get(console.log)
      var range = document.querySelector('input')

      chrome.storage.sync.get("speed", function(result) {
          if (result["speed"]) {
              range.value = result["speed"]
              document.getElementById('rangevalue').innerHTML = range.value
          }
      });

      range.onchange = function(e) { //when slider value changes
          chrome.storage.sync.set({ "speed": range.value })
          chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, range.value) //send slider value to first tab(active one) the value of slider
          })
          document.getElementById('rangevalue').innerHTML = range.value
      }
  }, false)