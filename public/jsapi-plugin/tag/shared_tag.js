IN.$extensions("SharedPlugin", function SharedPlugin() {
  // NOTE: This is required for development in linkedin.biz domains
  var ORIGINAL_XDURL = IN.ENV.url.xd_us_html;
  // END REQUIRED
  
  Sslac.Class("IN.Tags.SharedPlugin").Extends("IN.Tags.Base").Constructor(function(el, attributes) {
    this.Parent(el, attributes);

    // NOTE: This is required for development on linkedin.biz domains
    //IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:7000/public/jsapi-plugin/xdrpc.html";
    IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:7000/public/jsapi-plugin/xdrpc.html";
    // END REQUIRED
    
    var win = new IN.Objects.SmartWindow({
      mode: "embedded",
        url: "http://dragade-2-md.linkedin.biz:7000/application/sharedplugin"
    });
    win.place(this.el());
    
    // NOTE: This is required for development on linken.biz domains
    IN.ENV.url.xd_us_html = ORIGINAL_XDURL;
    // END REQUIRED
  });

  IN.addTag("SharedPlugin", IN.Tags.SharedPlugin);

  console.log("DRAGADE SharedPlugin Extension has Executed");
});
