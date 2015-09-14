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

function youdoHandler(data, itSocket){
  console.log("log server side : " + data);
  itSocket.on("mousemove", function(x,y){
    console.log("received mouse "+x+" "+y);
  });
  return "echo "+data;
};

itNode.addService({
  name : "echo",
  handler : youdoHandler
});

function connect(ipport){


  return itNode.getManager()
  .then(function(manager){
    return manager.getUuidsDeepTaggedBy("echo")
    .then(function(uuids){
        var args = {
          "it_service" : uuids[0],
          "params" : "yo !"
        };

        return itNode.callService( args )
        .then(function(link){
          console.log("log client side : "+link["link_response"]);
          window.addEventListener("mousemove", function(ev){
            link["link_socket"].emit("mousemove",ev.x, ev.y);
          });
        })
        .catch(function(err){
          console.error(err);
        });

    });
  });

}

