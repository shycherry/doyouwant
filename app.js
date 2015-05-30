var app = document.querySelector('#app');
var switchPage = null;

app.addEventListener("dom-change", function () {

  this.$.pages.addEventListener('iron-select', function(ev){
      ev.detail.item.bindPage();
  });

  this.$.pages.addEventListener('iron-deselect', function(ev){
      ev.detail.item.unbindPage();
  });

  switchPage = function(iPageName){
    this.page = iPageName;
  }.bind(this);

  switchPage("boggle");
  // switchPage("crosswords");
  // switchPage("cesarheart");
});
