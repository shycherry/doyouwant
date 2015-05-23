var app = document.querySelector('#app');
var switchPage = null;

app.addEventListener("template-bound", function () {

  this.$.pages.addEventListener('core-select', function(ev){
    if(ev.detail.isSelected)
      ev.detail.item.bindPage();
    else
      ev.detail.item.unbindPage();
  });

  switchPage = function(iPageName){
    this.page = iPageName;
  }.bind(this);

  // switchPage("boggle");
  switchPage("crosswords");
});
