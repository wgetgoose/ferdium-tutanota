// orat.io integration
module.exports = (Franz) => {
    function getMessages() {
      const FranzData = document.querySelector('[title="Inbox"]').childNodes[3].innerText;
      if (FranzData) {
        Franz.setBadge(FranzData);
      }
    }
    Franz.loop(getMessages);
  }