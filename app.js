var app = document.querySelector('#app');
var switchPage = null;

app.addEventListener("dom-change", function () {

  this.$.pages.addEventListener('iron-select', function(ev){
      ev.detail.item.bindPage();
  });

  this.$.pages.addEventListener('iron-deselect', function(ev){
      ev.detail.item.unbindPage();
  });

  this.$.pages.addEventListener('dyw-page-finished', function(ev){
      this.selectNext();
  });

  switchPage = function(iPageName){
    this.page = iPageName;
  }.bind(this);

  switchPage("boggle");
  // switchPage("crosswords");
  // switchPage("cesarheart");
});

var ITNode = require("IT_NODE").ITNode;

var itNode = new ITNode();
var myport = itNode.port;

function ack(data){
  console.log(data);
}

function youdoHandler(err, itSocket){
  var count = 0;

  itSocket.once("handshake", function(data, cb){
    cb = cb || function(){};
    return cb("reçu:"+ JSON.stringify(data));
  });

  itSocket.emit("handshake", "coucou", ack);
};

itNode.addService({
  name : "youdo",
  handler : youdoHandler
});

function connect(ipport){

  var args = {
    'node' : ipport,
    'name':'youdo',
    'args':['test', 'test2']
  };

  itNode.callService( args, youdoHandler );
}

