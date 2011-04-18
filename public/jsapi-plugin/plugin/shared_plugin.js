function loadShares() {
  //TODO only gather the shares from the thirdparty
  IN.API.Raw("/people/~/network?type=SHAR&count=500&format=json") // construct REST URL
    .result( function(result) {
      //console.log(JSON.stringify(result))
      //var thirdPartyDomain = document.domain
      var thirdPartyDomain = "npr.org";
      console.log("expecting third party domain: " + thirdPartyDomain);

      var i = 0;
      var maxSharesToShow = 5;
      var shareHTML = "<div class=\"shareheader\">" + thirdPartyDomain + " shares from your professional&nbsp;network&nbsp;<img src=\"/public/images/LinkedIn_Logo16px.png\"/></div>";
      shareHTML += "<p>"
      var numShares = 0;

      console.log("there are " + result.updates.values.length + " shares");
      for (i=0; i < result.updates.values.length && numShares < maxSharesToShow; i++) {
        var share = result.updates.values[i];
        //console.log(JSON.stringify(share))

        if (share.updateContent.person.currentShare.content
            && share.updateContent.person.currentShare.content.submittedUrl) {
            var sharedUrl = share.updateContent.person.currentShare.content.submittedUrl;
            //console.log("url=" + sharedUrl)
            var displayName = share.updateContent.person.firstName + " " + share.updateContent.person.lastName;

            //check that the share is for this domain
            if (sharedUrl.indexOf(thirdPartyDomain) > -1) {
                var pictureUrl = "/public/images/no_photo.png";
                if (share.updateContent.person.pictureUrl) {
                    pictureUrl = share.updateContent.person.pictureUrl;
                }
              shareHTML += "<div class=\"share\">";
              shareHTML += "<img class=\"user-pic\" src=\"" + pictureUrl + "\" height=\"25\" width=\"25\"/>";
              shareHTML += "<div class=\"person\"><a href=\"" + share.updateContent.person.siteStandardProfileRequest.url + "\" target=\"_blank\">" + displayName + "</a></div>";
              shareHTML += "<a class=\"sharelink\" href=\"" + sharedUrl + "\" target=\"_blank\">";
              shareHTML += share.updateContent.person.currentShare.content.title + "</a><br/>"
              shareHTML += "</div>";
              numShares = numShares + 1;
            }
         }
      }
      shareHTML += "</p>";

      if (numShares > 0) {
        $("#shares").html(shareHTML)
      }
      else {
          $("#shares").hide()
      }
     });
}
