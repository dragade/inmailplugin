IN.$extensions("InmailPlugin", function InmailPlugin() {
  // NOTE: This is required for development in linkedin.biz domains
  var ORIGINAL_XDURL = IN.ENV.url.xd_us_html;
  // END REQUIRED
  
  Sslac.Class("IN.Tags.InmailPlugin").Extends("IN.Tags.Base").Constructor(function(el, attributes) {
    this.Parent(el, attributes);

    // NOTE: This is required for development on linkedin.biz domains
    //IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:9000/public/jsapi-plugin/xdrpc.html";
    IN.ENV.url.xd_us_html = "http://dragade-2-md.linkedin.biz:9000/public/jsapi-plugin/xdrpc.html";
    // END REQUIRED
    
    var win = new IN.Objects.SmartWindow({
      mode: "embedded",
        url: "http://dragade-2-md.linkedin.biz:9000/application/inmailplugin"
    });
    win.place(this.el());
    
    // NOTE: This is required for development on linken.biz domains
    IN.ENV.url.xd_us_html = ORIGINAL_XDURL;
    // END REQUIRED
  });

  IN.addTag("InmailPlugin", IN.Tags.InmailPlugin);

  console.log("DRAGADE InmailPlugin Extension has Executed");
});
