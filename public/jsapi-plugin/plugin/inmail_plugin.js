
function loadData() {
  //loadProfile();
  //loadInmails();
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
  IN.API.Raw("/people/~/mailbox:(id,from,subject,short-body)?folder=inbox&message-type=sponsored-inmail&format=json") // construct REST URL
    .result( function(result) {
    //console.log(JSON.stringify(result))

    //Make the html snippet here for the relevant inmails which should only be from the same domain as the thirdparty
    inmail = result.values[0]
    inmailHTML  = "<p> From: " + inmail.from.person.firstName + " " + inmail.from.person.lastName + "<br/>";
    //inmailHTML += inmail.shortBody;
    shortBodyUrl = inmail.shortBody.split("url=")[1].split("\">")[0]; //get everything after url= and before >
    inmailUrl = unescape(shortBodyUrl)
    inmailHTML += "<a href=\"" + inmailUrl + "\" target=\"blank\">" + inmail.subject + "</a></p>";

    $("#inmails").html(inmailHTML);
   });

   }

function loadShares() {
  //TODO only gather the shares from the thirdparty
  IN.API.Raw("/people/~/network?type=SHAR&format=json") // construct REST URL
    .result( function(result) {
      //console.log(JSON.stringify(result))
      var numShares = 0;
      var i = 0;
      var max = 5;
      var shareHTML = "<p>";
      for (i=0; i < result.updates.values.length && i < max; i++) {
        var share = result.updates.values[i];
        //console.log(JSON.stringify(share))
 
        if (share.updateContent.person.currentShare.content && share.updateContent.person.currentShare.content.submittedUrl) {
          shareHTML += "<img src=\"" + share.updateContent.person.pictureUrl + "\" height=\"25\" width=\"25\"/>"
          shareHTML += share.updateContent.person.firstName + " " + share.updateContent.person.lastName
              + " : <a href=\""
              + share.updateContent.person.currentShare.content.submittedUrl
              + "\">" + share.updateContent.person.currentShare.content.title + "</a><br/>"
         }
      }
      shareHTML += "</p>";

      $("#shares").html(shareHTML)
     });
}
