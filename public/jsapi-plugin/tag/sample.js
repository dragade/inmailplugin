IN.$extensions("HelloWorld", function HelloWorld() {
  // NOTE: This is required for development in linkedin.biz domains
  var ORIGINAL_XDURL = IN.ENV.url.xd_us_html;
  // END REQUIRED
  
  Sslac.Class("IN.Tags.HelloWorld").Extends("IN.Tags.Base").Constructor(function(el, attributes) {
    this.Parent(el, attributes);

    // NOTE: This is required for development on linkedin.biz domains
    //IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:9000/public/jsapi-plugin/xdrpc.html";
    IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:9000/public/jsapi-plugin/xdrpc.html";
    // END REQUIRED
    
    var win = new IN.Objects.SmartWindow({
      mode: "embedded",
      //url: "http://dragade-2-md.linkedin.biz:9000/public/jsapi-plugin/plugin/plugin.html"
        url: "http://dragade-2-md.linkedin.biz:9000/application/plugin"
    });
    win.place(this.el());
    
    // NOTE: This is required for development on linken.biz domains
    IN.ENV.url.xd_us_html = ORIGINAL_XDURL;
    // END REQUIRED
  });

  IN.addTag("HelloWorld", IN.Tags.HelloWorld);

  console.log("DRAGADE HelloWorld Extension has Executed");
});
