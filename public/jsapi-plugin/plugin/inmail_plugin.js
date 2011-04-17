
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
      //var thirdPartyDomain = document.domain
      var thirdPartyDomain = "drexel";
      //console.log("expecting third party domain: " + thirdPartyDomain);

      //for (i=result.values.length -1; i >= 0; i--) {
      for (i=0; i < result.values.length; i++) {
          var someInmail = result.values[i];
          //console.log(JSON.stringify(someInmail))
          //so this is a problem, the sponsored inmail doesn't actually have the sender's domain in it(!)
          //we do have this info in campaigns-ds tied to the coml id, but not avaiable through PAL now
          //so I'll work around this for now by assuming first name is good enough

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
        console.log(JSON.stringify(inmail));
        inmailHTML = "<div class=\"inmail\">";
        inmailHTML = "<img class=\"graphic\" src=\"" + "/public/images/icon_inmail_envelope_yellow_34x34.png" + "\"/>";
        inmailHTML  += "<div class=\"from\">From: " + inmail.from.person.firstName + " " + inmail.from.person.lastName + "</div>";
        shortBodyUrl = inmail.shortBody.split("url=")[1].split("\">")[0]; //get everything after url= and before >
        inmailUrl = unescape(shortBodyUrl)
        inmailHTML += "<div class=\"subject\"><a href=\"" + inmailUrl + "\" target=\"blank\">" + inmail.subject + "</a>";
        inmailHTML += "</div>";

        $("#inmails").html(inmailHTML);
        dumpInmail(inmail.id);

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
      var thirdPartyDomain = "nytimes.com";
      console.log("expecting third party domain: " + thirdPartyDomain);

      for (i=0; i < result.updates.values.length && i < maxSharesToShow; i++) {
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
            }
         }
      }
      shareHTML += "</p>";

      $("#shares").html(shareHTML)
     });
}
