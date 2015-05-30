var app = document.querySelector('#app');
var switchPage = null;

app.addEventListener("dom-change", function () {

  this.$.pages.addEventListener('iron-select', function(ev){
    if(ev.detail.item.classList.contains("iron-selected"))
      ev.detail.item.bindPage();
    else
      ev.detail.item.unbindPage();
  });

  switchPage = function(iPageName){
    this.page = iPageName;
  }.bind(this);

  switchPage("boggle");
  // switchPage("crosswords");
});
