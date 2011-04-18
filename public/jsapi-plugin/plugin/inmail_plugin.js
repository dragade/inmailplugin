
function loadData() {
  //loadProfile();
  loadInmails();
  loadShares();
}

function loadProfile() {
  IN.API.Profile("me")
    .fields(["id", "firstName", "lastName", "pictureUrl","headline"])
    .result(function(result) {
      profile = result.values[0];
      profHTML = "<p><a href=\"" + profile.publicProfileUrl + "\">";
      profHTML += "<img class=img_border align=\"left\" src=\"" + profile.pictureUrl + "\"></a>";
      profHTML += "<a href=\"" + profile.publicProfileUrl + "\">";
      profHTML += "<h2 class=myname>" + profile.firstName + " " + profile.lastName + "</a> </h2>";
      profHTML += "<span class=myheadline>" + profile.headline + "</span>";
      $("#profile").html(profHTML);
    });
}

function loadInmails() {
  IN.API.Raw("/people/~/mailbox:(id,from,subject,short-body,rendered-body)?folder=inbox&message-type=sponsored-inmail&format=json") // construct REST URL
    .result( function(result) {
      //console.log(JSON.stringify(result))
      var i = 0;
      var inmail = null;

      //for (i=result.values.length -1; i >= 0; i--) {
      for (i=0; i < result.values.length; i++) {
          var someInmail = result.values[i];
          //console.log(JSON.stringify(someInmail))

            // So this is an interesting problem because what we're trying to do is see if this third party domain
            // matches any of the inmails a user has received and if so show it.
            // One issue is that the campaigns DS does not really store any meaningful data (fromEmail, etc. are
            // useless due to the way people enter data and do not actually put the partner's domain in).
            // But since COML emails do follow a pattern of having one big action link (class="action"), we could
            // run a query on the campaigns table for the partner URLs, then write a script to fetch each one,
            // following the 302-moved errors, until we get to the real URL. We can store all these mappings
            // in the server and generate this javascript dynamically (or can store in a voldemort)
            //so I'll work around this for now by assuming partner name is good enough
            var thirdPartyDomain = "drexel"; //use document.domain later
          if (someInmail.from) {
              var fullname = someInmail.from.person.firstName + " " + someInmail.from.person.lastName;
              if (fullname.toLowerCase().indexOf(thirdPartyDomain) > -1) {
                  console.log("Found the inmail from " + thirdPartyDomain);
                  inmail = someInmail;
                  console.log(JSON.stringify(inmail));
                  break;
              }
              else {
                  console.log("Skipping " + fullname);
              }
          }
      }

      if (inmail) {
        //Make the html snippet here for the relevant inmails which should only be from the same domain as the thirdparty
        //console.log(JSON.stringify(inmail));
        inmailHTML = "<div class=\"inmail\">";
        inmailHTML = "<img class=\"graphic\" src=\"" + "/public/images/icon_inmail_envelope_yellow_34x34.png" + "\"/>";
        inmailHTML  += "<div class=\"from\">From: " + inmail.from.person.firstName + " " + inmail.from.person.lastName + "</div>";
        shortBodyUrl = inmail.shortBody.split("url=")[1].split("\">")[0]; //get everything after url= and before >
        inmailUrl = unescape(shortBodyUrl)
        inmailHTML += "<div class=\"subject\"><a href=\"" + inmailUrl + "\" target=\"blank\">" + inmail.subject + "</a>";
        inmailHTML += "</div>";

        $("#inmails").html(inmailHTML);
        //dumpInmail(inmail.id);
      }
      else {
          console.log("there is no inmail for this site so hide the div.");
          $("#inmails").hide();
      }
   });
   }

function dumpInmail(inmail_id) {
      //dump out the item's data to see if there's more
      console.log("GETTING THE INMAIL!");
      IN.API.Raw("/people/~/mailbox/" + inmail_id + ":(id,body,short-body,rendered-body,from:(person:(first-name,last-name)))?format=json") // construct REST URL
        .result( function(result) {
          console.log(JSON.stringify(result))
      } );
}

function loadShares() {
  //TODO only gather the shares from the thirdparty
  IN.API.Raw("/people/~/network?type=SHAR&format=json") // construct REST URL
    .result( function(result) {
      //console.log(JSON.stringify(result))
      var i = 0;
      var maxSharesToShow = 5;
      var shareHTML = "<span class=\"shareheader\"><img src=\"/public/images/LinkedIn_Logo16px.png\"/>&nbsp;Shares from your professional network</span>";
      shareHTML += "<p>"
      //var thirdPartyDomain = document.domain
      var thirdPartyDomain = "npr.org";
      console.log("expecting third party domain: " + thirdPartyDomain);
      var numShares = 0;

      for (i=0; i < result.updates.values.length && numShares < maxSharesToShow; i++) {
        var share = result.updates.values[i];
        //console.log(JSON.stringify(share))

        if (share.updateContent.person.currentShare.content
            && share.updateContent.person.currentShare.content.submittedUrl) {
            var sharedUrl = share.updateContent.person.currentShare.content.submittedUrl;
            var displayName = share.updateContent.person.firstName + " " + share.updateContent.person.lastName;

            //check that the share is for this domain
            if (sharedUrl.indexOf(thirdPartyDomain) > -1) {
                var pictureUrl = "/public/images/no_photo.png";
                if (share.updateContent.person.pictureUrl) {
                    pictureUrl = share.updateContent.person.pictureUrl;
                }
              shareHTML += "<div class=\"share\">";
              shareHTML += "<img class=\"user-pic\" src=\"" + pictureUrl + "\" height=\"25\" width=\"25\"/>";
              shareHTML += "<div class=\"person\"><a href=\"" + share.updateContent.person.siteStandardProfileRequest.url + "\">" + displayName + "</a></div>";
              shareHTML += "<a class=\"sharelink\" href=\"" + sharedUrl + "\">";
              shareHTML += share.updateContent.person.currentShare.content.title + "</a><br/>"
              shareHTML += "</div>";
              numShares++;
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
