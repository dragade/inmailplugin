
// ------------------------------------------------------------------------------------
// This file contains all the request type objects for the SiteLife JSON Direct API.
// Create instances of these objects, place them in a RequestBatch, and send them off.
// ------------------------------------------------------------------------------------

(function() { // wrapped in a function to keep the Class variable out of the global scope
    var Class = function() {
        return function() {
            this.initialize.apply(this, arguments);
        }
    };
    // Identify a user
    UserKey = Class();
    UserKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.UserKey = data;
        }
    };
    // Identify a comment
    CommentKey = Class();
    CommentKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CommentKey = data;
        }
    };
    // Identify an article
    ArticleKey = Class();
    ArticleKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.ArticleKey = data;
        }
    };

    // Identify a persona message
    PersonaMessageKey = Class();
    PersonaMessageKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.PersonaMessageKey = data;
        }
    };

    // Identify a review
    ReviewKey = Class();
    ReviewKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.ReviewKey = data;
        }
    };

    // Identify a gallery
    GalleryKey = Class();
    GalleryKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.GalleryKey = data;
        }
    };

    // Identify a photo
    PhotoKey = Class();
    PhotoKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.PhotoKey = data;
        }
    };

    // Identify a video
    VideoKey = Class();
    VideoKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.VideoKey = data;
        }
    };

    // Identify a blog with this blog key
    BlogKey = Class();
    BlogKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.BlogKey = data;
        }
    };

    // Identify a blog post with this blog post key
    BlogPostKey = Class();
    BlogPostKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.BlogPostKey = data;
        }
    };

    // Identify a custom item with this CustomItemKey
    CustomItemKey = Class();
    CustomItemKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CustomItemKey = data;
        }
    };

    // Identify a custom collection with this CustomCollectionKey
    CustomCollectionKey = Class();
    CustomCollectionKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CustomCollectionKey = data;
        }
    };


    // Identify a Forum Category
    ForumCategoryKey = Class();
    ForumCategoryKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.ForumCategoryKey = data;
        }
    };

    // Identify a Forum
    ForumKey = Class();
    ForumKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.ForumKey = data;
        }
    };

    // Identify a forum discussion with this DiscussionKey
    DiscussionKey = Class();
    DiscussionKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.DiscussionKey = data;
        }
    };

    // Identify a Forum Post
    ForumPostKey = Class();
    ForumPostKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.ForumPostKey = data;
        }
    };

    // Identify an Event
    EventKey = Class();
    EventKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.EventKey = data;
        }
    };

    // Identify an Event
    EventSetKey = Class();
    EventSetKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.EventSetKey = data;
        }
    };

    // Identify a Community Group
    CommunityGroupKey = Class();
    CommunityGroupKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CommunityGroupKey = data;
        }
    };

    // Identify a CommunityGroup Membership
    CommunityGroupMembershipKey = Class();
    CommunityGroupMembershipKey.prototype = {
        initialize: function(communityGroupKey, userKey) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            this.CommunityGroupMembershipKey = data;
        }
    };


    // Identify a CommunityGroup Invitation
    CommunityGroupInvitationKey = Class();
    CommunityGroupInvitationKey.prototype = {
        initialize: function(communityGroupKey, userKey) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            this.CommunityGroupInvitationKey = data;
        }
    };

    // Identify a CommunityGroup Registrant
    CommunityGroupRegistrantKey = Class();
    CommunityGroupRegistrantKey.prototype = {
        initialize: function(communityGroupKey, userKey) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            this.CommunityGroupRegistrantKey = data;
        }
    };

    // Identify a CommunityGroup Banned User
    CommunityGroupBannedUserKey = Class();
    CommunityGroupBannedUserKey.prototype = {
        initialize: function(communityGroupKey, userKey) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            this.CommunityGroupBannedUserKey = data;
        }
    };
    
    
    PollKey = Class();
    PollKey.prototype = {
        initialize: function(pollKey) {
            var data = new Object();
            data.Key = pollKey;
            this.PollKey = data;
        }
    }

    // Points/Badging
    BadgeFamilyKey = Class();
    BadgeFamilyKey.prototype = {
        initialize: function(badgeFamilyKey) {
            var data = new Object();
            data.Key = badgeFamilyKey;
            this.BadgeFamilyKey = data;
        }
    }

    LeaderboardKey = Class();
    LeaderboardKey.prototype = {
        initialize: function(leaderboardKey) {
            var data = new Object();
            data.Key = leaderboardKey;
            this.LeaderboardKey = data;
        }
    }
    
    FeedActivityKey = Class();
    FeedActivityKey.prototype = {
        initialize: function(feedActivityKey){
            var data = new Object();
            data.Key = feedActivityKey;
            this.FeedActivityKey = data;
        }
    }
    
    RatingsReferenceKey = Class();
    RatingsReferenceKey.prototype = {
        initialize: function(ratingsReferenceKey){
            var data = new Object();
            data.Key = ratingsReferenceKey;
            this.RatingsReferenceKey = data;
        }
    }

    // Wrapper to request a comment page
    CommentPage = Class();
    CommentPage.prototype = {
        initialize: function(articleKey, numberPerPage, onPage, sort, findCommentKey) {
            var data = new Object();
            data.ArticleKey = articleKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            data.FindCommentKey = findCommentKey;
            this.CommentPage = data;
        }
    };

    // Wrapper to request a persona message page
    PersonaMessagePage = Class();
    PersonaMessagePage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.PersonaMessagePage = data;
        }
    };

    // Wrapper to request a review page
    ReviewPage = Class();
    ReviewPage.prototype = {
        initialize: function(articleKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.ArticleKey = articleKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.ReviewPage = data;
        }
    };

    // wrapper to request a page of reviews by user
    UserReviewPage = Class();
    UserReviewPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.UserReviewPage = data;
        }
    };

    // Wrapper of types a gallery can contain
    MediaType = Class();
    MediaType.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.MediaType = data;
        }
    };
    // Wrapper to request a page of public galleries
    PublicGalleryPage = Class();
    PublicGalleryPage.prototype = {
        initialize: function(numberPerPage, onPage, mediaType) {
            var data = new Object();
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.MediaType = mediaType;
            this.PublicGalleryPage = data;
        }
    };
    // Wrapper to request a page of user galleries
    UserGalleryPage = Class();
    UserGalleryPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, mediaType) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.MediaType = mediaType;
            this.UserGalleryPage = data;
        }
    };
    // Wrapper to request a page of photos
    PhotoPage = Class();
    PhotoPage.prototype = {
        initialize: function(galleryKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.GalleryKey = galleryKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.PhotoPage = data;
        }
    };
    // Wrapper to request a page of videos
    VideoPage = Class();
    VideoPage.prototype = {
        initialize: function(galleryKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.GalleryKey = galleryKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.VideoPage = data;
        }
    };
    // Wrapper to request a comment action
    CommentAction = Class();
    CommentAction.prototype = {
        initialize: function(commentOnKey, onPageUrl, onPageTitle, commentBody, postedOnDate) {
            var data = new Object();
            data.CommentOnKey = commentOnKey;
            data.OnPageUrl = onPageUrl;
            data.OnPageTitle = onPageTitle;
            data.CommentBody = commentBody;
            data.PostedOnDate = postedOnDate;
            this.CommentAction = data;            
        }
    };
    // Wrapper to request a review action
    ReviewAction = Class();
    ReviewAction.prototype = {
        initialize: function(reviewOnThisKey, onPageUrl, onPageTitle,
                        reviewTitle, reviewRating, reviewBody, reviewPros, reviewCons) {
            var data = new Object();
            data.ReviewOnKey = reviewOnThisKey;
            data.OnPageUrl = onPageUrl;
            data.OnPageTitle = onPageTitle;
            data.ReviewTitle = reviewTitle;
            data.ReviewRating = reviewRating;
            data.ReviewBody = reviewBody;
            data.ReviewPros = reviewPros;
            data.ReviewCons = reviewCons;
            this.ReviewAction = data;
        }
    };
    // Wrapper to request a recommend action
    RecommendAction = Class();
    RecommendAction.prototype = {
        initialize: function(recommendThisKey, articleTitle) {
            var data = new Object();
            data.RecommendThisKey = recommendThisKey;
            if (articleTitle) {
                data.OnPageTitle = articleTitle;
            }

            this.RecommendAction = data;
        }
    };
    // Wrapper to request a rate action
    RateAction = Class();
    RateAction.prototype = {
        initialize: function(rateThisKey, rating, multiRate, ratingsReferenceKey) {
            var data = new Object();
            data.RateThisKey = rateThisKey;
            data.Rating = rating;
            if (typeof (multiRate) != "undefined") {
                data.MultiRate = multiRate;
            }
            if (typeof (ratingsReferenceKey) !== "undefined") {
                    data.RatingsReferenceKey = ratingsReferenceKey;
            }
            this.RateAction = data;
        }
    };

    // Permanently delete a gallery, video or photo
    DeleteContentAction = Class();
    DeleteContentAction.prototype = {
        initialize: function(deleteThisContent) {
            var data = new Object();
            data.DeleteThisContent = deleteThisContent;
            this.DeleteContentAction = data;
        }
    };

    // Email from the SiteLife system
    EmailContentAction = Class();
    EmailContentAction.prototype = {
        initialize: function(toAddress, subject, body) {
            var data = new Object();
            data.ToAddress = toAddress;
            data.Subject = subject;
            data.Body = body;
            this.EmailContentAction = data;
        }
    };

    // Email from the SiteLife system with user key as target
    EmailContentWithUserIDAction = Class();
    EmailContentWithUserIDAction.prototype = {
        initialize: function(toUserKey, subject, body) {
            var data = new Object();
            data.UserKey = toUserKey;
            data.Subject = subject;
            data.Body = body;
            this.EmailContentWithUserIDAction = data;
        }
    };

    // Wrapper to request a report abuse action
    ReportAbuseAction = Class();
    ReportAbuseAction.prototype = {
        initialize: function(reportThisKey, abuseReason, abuseDescription) {
            var data = new Object();
            data.ReportThisKey = reportThisKey;
            data.AbuseReason = abuseReason;
            data.AbuseDescription = abuseDescription;
            this.ReportAbuseAction = data;
        }
    };
    // Category used for discovery
    Category = Class();
    Category.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.Category = data;
        }
    };
    // Section used for discovery
    Section = Class();
    Section.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.Section = data;
        }
    };
    // Update or create an article
    UpdateArticleAction = Class();
    UpdateArticleAction.prototype = {
        initialize: function(updateArticle, onPageUrl, onPageTitle, section, categories) {
            var data = new Object();
            data.UpdateArticle = updateArticle;
            data.OnPageUrl = onPageUrl;
            data.OnPageTitle = onPageTitle;
            data.Section = section;
            data.Categories = categories;
            this.UpdateArticleAction = data;
        }
    };
    // Update or create a gallery
    UpdateGalleryAction = Class();
    UpdateGalleryAction.prototype = {
        initialize: function(updateGallery, galleryType, mediaType, title, description, tags, section, galleryPromo) {
            var data = new Object();
            data.UpdateGallery = updateGallery;
            data.GalleryType = galleryType;
            data.MediaType = mediaType;
            data.Title = title;
            data.Description = description;
            data.Tags = tags;
            data.Section = section;
            data.GalleryPromo = galleryPromo;
            this.UpdateGalleryAction = data;
        }
    };
    // Update or create a photo
    UpdatePhotoAction = Class();
    UpdatePhotoAction.prototype = {
        initialize: function(updatePhoto, title, description, tags, section) {
            var data = new Object();
            data.UpdatePhoto = updatePhoto;
            data.Title = title;
            data.Description = description;
            data.Tags = tags;
            data.Section = section;
            this.UpdatePhotoAction = data;
        }
    };
    // Update or create a video
    UpdateVideoAction = Class();
    UpdateVideoAction.prototype = {
        initialize: function(updateVideo, title, description, tags, section) {
            var data = new Object();
            data.UpdateVideo = updateVideo;
            data.Title = title;
            data.Description = description;
            data.Tags = tags;
            data.Section = section;
            this.UpdateVideoAction = data;
        }
    };
    // 
    GalleryType = Class();
    GalleryType.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.GalleryType = data;
        }
    };
    // GalleryPromo used for setting promotional text for public galleries
    GalleryPromo = Class();
    GalleryPromo.prototype = {
        initialize: function(title, body, photoKey) {
            var data = new Object();
            data.Title = title;
            data.Body = body;
            data.PhotoKey = photoKey;
            this.GalleryPromo = data;
        }
    };
    // UserTier used for discovery
    UserTier = Class();
    UserTier.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.UserTier = data;
        }
    };
    // MembershipTier used for community groups
    MembershipTier = Class();
    MembershipTier.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.MembershipTier = data;
        }
    };
    // Activity used for discovery
    Activity = Class();
    Activity.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.Activity = data;
        }
    };
    // Discovery on articles
    DiscoverArticlesAction = Class();
    DiscoverArticlesAction.prototype = {
        initialize: function(searchSections, searchCategories, limitToContributors, activity, age, maximumNumberOfDiscoveries) {
            var data = new Object();
            data.SearchSections = searchSections;
            data.SearchCategories = searchCategories;
            data.LimitToContributors = limitToContributors;
            data.Activity = activity;
            data.Age = age;
            data.MaximumNumberOfDiscoveries = maximumNumberOfDiscoveries;

            this.DiscoverArticlesAction = data;
        }
    };

    // Action used to add a friend
    AddFriendAction = Class();
    AddFriendAction.prototype = {
        initialize: function(friendUserKey) {
            var data = new Object();
            data.FriendUserKey = friendUserKey;
            this.AddFriendAction = data;
        }
    };

    // Action used to add a message
    AddPersonaMessageAction = Class();
    AddPersonaMessageAction.prototype = {
        initialize: function(toUserKey, body) {
            var data = new Object();
            data.ToUserKey = toUserKey;
            data.Body = body;
            this.AddPersonaMessageAction = data;
        }
    };

    // Action used to remove a message
    RemovePersonaMessageAction = Class();
    RemovePersonaMessageAction.prototype = {
        initialize: function(personaMessageKey) {
            var data = new Object();
            data.PersonaMessageKey = personaMessageKey;
            this.RemovePersonaMessageAction = data;
        }
    };

    // Action used to approve a friend
    ApproveFriendAction = Class();
    ApproveFriendAction.prototype = {
        initialize: function(friendUserKey, isApproved) {
            var data = new Object();
            data.FriendUserKey = friendUserKey;
            data.IsApproved = isApproved;
            this.ApproveFriendAction = data;
        }
    };

    // Action used to remove a friend
    RemoveFriendAction = Class();
    RemoveFriendAction.prototype = {
        initialize: function(friendUserKey) {
            var data = new Object();
            data.FriendUserKey = friendUserKey;
            this.RemoveFriendAction = data;
        }
    };

    // Action used to add an enemy
    AddEnemyAction = Class();
    AddEnemyAction.prototype = {
        initialize: function(enemyUserKey) {
            var data = new Object();
            data.EnemyUserKey = enemyUserKey;
            this.AddEnemyAction = data;
        }
    };

    // Action used to remove an enemy
    RemoveEnemyAction = Class();
    RemoveEnemyAction.prototype = {
        initialize: function(enemyUserKey) {
            var data = new Object();
            data.EnemyUserKey = enemyUserKey;
            this.RemoveEnemyAction = data;
        }
    };

    // Wrapper to request a friend page
    FriendPage = Class();
    FriendPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, isPendingList, filterKey, filterValue) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.IsPendingList = isPendingList;
            data.FilterKey = filterKey;
            data.FilterValue = filterValue;
            this.FriendPage = data;
        }
    };

    // Wrapper to request if a given user key is a friend of the user specified by the second parameter
    // if the userKey parameter is not specified, the currently logged-in user is used
    IsFriend = Class();
    IsFriend.prototype = {
        initialize: function(friendUserKey, userKey) {
            var data = new Object();
            data.FriendUserKey = friendUserKey;
            data.UserKey = userKey;
            this.IsFriend = data;
        }
    };

    // Wrapper to request a friend page
    EnemyPage = Class();
    EnemyPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.EnemyPage = data;
        }
    };

    // Discovery on content
    DiscoverContentAction = Class();
    DiscoverContentAction.prototype = {
        initialize: function(searchSections, searchCategories, limitToContributors, activity, contentType, age, maximumNumberOfDiscoveries, filterBySiteOfOrigin, parentKeys) {
            var data = new Object();
            data.SearchSections = searchSections;
            data.SearchCategories = searchCategories;
            data.LimitToContributors = limitToContributors;
            data.Activity = activity;
            data.ContentType = contentType;
            data.Age = age;
            data.MaximumNumberOfDiscoveries = maximumNumberOfDiscoveries;
            data.FilterBySiteOfOrigin = filterBySiteOfOrigin;
            if (parentKeys) {
                data.ParentKeys = parentKeys;
            }
            this.DiscoverContentAction = data;
        }
    };

    // Content type for discovery
    ContentType = Class();
    ContentType.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.ContentType = data;
        }
    };

    UpdateUserProfileAction = Class();
    UpdateUserProfileAction.prototype = {
        initialize: function(userKey,
                            aboutMe,
                            location,
                            signature,
                            dateOfBirth,
                            sex,
                            personaPrivacyMode,
                            commentsTabVisible,
                            photosTabVisible,
                            messagesOpenToEveryone,
                            isEmailNotificationsEnabled,
                            selectedStyleId,
                            customAnswers,
                            extendedProfile) {

            var data = new Object();
            data.UserKey = userKey;
            data.AboutMe = aboutMe;
            data.Location = location;
            data.Signature = signature;
            data.DateOfBirth = dateOfBirth;
            data.Sex = sex;
            data.PersonaPrivacyMode = personaPrivacyMode;
            data.CommentsTabVisible = commentsTabVisible;
            data.PhotosTabVisible = photosTabVisible;
            data.MessagesOpenToEveryone = messagesOpenToEveryone;
            data.IsEmailNotificationsEnabled = isEmailNotificationsEnabled;
            data.SelectedStyleId = selectedStyleId;
            data.CustomAnswers = customAnswers;
            data.ExtendedProfile = extendedProfile;
            this.UpdateUserProfileAction = data;
        }
    };

    UpdateUserBlockedSettingAction = Class();
    UpdateUserBlockedSettingAction.prototype = {
        initialize: function(userKey, isBlocked) {
            var data = new Object;
            data.UserKey = userKey;
            data.IsBlocked = isBlocked;
            this.UpdateUserBlockedSettingAction = data;
        }
    };

    SearchAction = Class();
    SearchAction.prototype = {
        initialize: function(searchType, searchString, numberPerPage, onPage) {
            var data = new Object();
            data.SearchType = searchType;
            data.SearchString = searchString;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.SearchAction = data;
        }
    };

    // Wrapper to request a watch item page
    WatchItemPage = Class();
    WatchItemPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.WatchItemPage = data;
        }
    };

    // Wrapper to add a watch item
    AddWatchItemAction = Class();
    AddWatchItemAction.prototype = {
        initialize: function(userKey, watchTargetKey, title, url) {
            var data = new Object();
            data.UserKey = userKey;
            data.WatchTargetKey = watchTargetKey;
            data.WatchItemTitle = title;
            data.WatchItemUrl = url;
            this.AddWatchItemAction = data;
        }
    };

    // Wrapper to delete a watch item
    DeleteWatchItemAction = Class();
    DeleteWatchItemAction.prototype = {
        initialize: function(userKey, watchTargetKey) {
            var data = new Object();
            data.UserKey = userKey;
            data.WatchTargetKey = watchTargetKey;
            this.DeleteWatchItemAction = data;
        }
    };

    // Wrapper to request a blog post page
    BlogPostPage = Class();
    BlogPostPage.prototype = {
        initialize: function(blogKey, numberPerPage, onPage, sort, blogPostState, restrictToOwner, includeFuturePosts) {
            var data = new Object();
            data.BlogKey = blogKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            data.BlogPostState = blogPostState;
            if ((typeof (restrictToOwner) == 'undefined') || (restrictToOwner == null)) {
                // Default to false for backwards compatibility
                restrictToOwner = false;
            }
            data.RestrictToOwner = restrictToOwner.toString();
            if ((typeof (includeFuturePosts) == 'undefined') || (includeFuturePosts == null)) {
                // Default to false for backwards compatibility
                includeFuturePosts = false;
            }
            data.IncludeFuturePosts = includeFuturePosts.toString();
            this.BlogPostPage = data;
        }
    };

    // Wrapper to request a blog post page by Tag
    BlogPostsByTagPage = Class();
    BlogPostsByTagPage.prototype = {
        initialize: function(blogKey, tag, numberPerPage, onPage, sort) {
            var data = new Object();
            data.BlogKey = blogKey;
            data.Tag = tag;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.BlogPostsByTagPage = data;
        }
    };


    // Wrapper to request a blog post archive count
    BlogPostArchiveCount = Class();
    BlogPostArchiveCount.prototype = {
        initialize: function(blogKey) {
            var data = new Object();
            data.BlogKey = blogKey;
            this.BlogPostArchiveCount = data;
        }
    };


    // Wrapper to request a blog post archive content page
    BlogPostArchiveContentPage = Class();
    BlogPostArchiveContentPage.prototype = {
        initialize: function(blogKey, month, numberPerPage, onPage, sort) {
            var data = new Object();
            data.BlogKey = blogKey;
            data.Month = month;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.BlogPostArchiveContentPage = data;
        }
    };


    // Wrapper to request a user comment page
    UserCommentPage = Class();
    UserCommentPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, sort, commentsOnly) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            data.CommentsOnly = commentsOnly;
            this.UserCommentPage = data;
        }
    };


    // Wrapper to request blog tag 
    RecentBlogTag = Class();
    RecentBlogTag.prototype = {
        initialize: function(blogKey) {
            var data = new Object();
            data.BlogKey = blogKey;
            this.RecentBlogTag = data;
        }
    };


    // Wrapper to request recent user photo page
    RecentUserPhotoPage = Class();
    RecentUserPhotoPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.RecentUserPhotoPage = data;
        }
    };

    // Wrapper to request recent user video page
    RecentUserVideoPage = Class();
    RecentUserVideoPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.RecentUserVideoPage = data;
        }
    };


    // Wrapper to request recent public gallery page
    RecentPublicGalleryPage = Class();
    RecentPublicGalleryPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.RecentPublicGalleryPage = data;
        }
    };


    // Wrapper to request recent user activity page
    RecentUserActivity = Class();
    RecentUserActivity.prototype = {
        initialize: function(userKey) {
            var data = new Object();
            data.UserKey = userKey;
            this.RecentUserActivity = data;
        }
    };


    // Wrapper to request page of user media submission counts
    UserMediaSubmissionsCountPage = Class();
    UserMediaSubmissionsCountPage.prototype = {
        initialize: function(userKey, mediaType, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.MediaType = mediaType;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.UserMediaSubmissionsCountPage = data;
        }
    };


    // Wrapper to request recent forum discussion page
    RecentForumDiscussionPage = Class();
    RecentForumDiscussionPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.RecentForumDiscussionPage = data;
        }
    };


    // Wrapper to request user group forum page
    UserGroupForumPage = Class();
    UserGroupForumPage.prototype = {
        initialize: function(userKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.UserKey = userKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.UserGroupForumPage = data;
        }
    };

    // Update or create a blog
    UpdateBlogAction = Class();
    UpdateBlogAction.prototype = {
        initialize: function(updateBlog, title, tagline, blogRollEntries, blogType, commentApproval) {
            var data = new Object();
            data.BlogKey = updateBlog;
            data.Title = title;
            data.Tagline = tagline;
            data.BlogRollEntries = blogRollEntries;
            data.BlogType = blogType;
            if ((typeof (commentApproval) == 'undefined' || (commentApproval == null))) {
                // Default to Everyone for backwards compatibility.
                commentApproval = "NoChange";
            }
            data.CommentApproval = commentApproval;
            this.UpdateBlogAction = data;
        }
    };

    // The blogRollEntry used in UpdateBlogAction
    BlogRollEntry = Class();
    BlogRollEntry.prototype = {
        initialize: function(name, url) {
            var data = new Object();
            data.Name = name;
            data.Url = url;
            this.BlogRollEntry = data;
        }
    };

    // Bookmark used in UpdateCommunityGroupAction
    Bookmark = Class();
    Bookmark.prototype = {
        initialize: function(title, link) {
            var data = new Object();
            data.Title = title;
            data.Link = link;
            this.Bookmark = data;
        }
    };

    // CommunityGroupVisibility used in UpdateCommunityGroupAction
    CommunityGroupVisibility = Class();
    CommunityGroupVisibility.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.CommunityGroupVisibility = data;
        }
    };

    // Update or create a blog post, key can be either a post key (update case)
    // or a blog key (create case)
    UpdateBlogPostAction = Class();
    UpdateBlogPostAction.prototype = {
        initialize: function(key, title, body, tags, publishDate, published) {
            var data = new Object();
            data.TargetThis = key;
            data.Title = title;
            data.Body = body;
            data.Tags = tags;
            data.Date = publishDate;
            data.Published = published;
            this.UpdateBlogPostAction = data;
        }
    };

    // Identify a forum discussion with this DiscussionKey 
    DiscussionKey = Class();
    DiscussionKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.DiscussionKey = data;
        }
    };

    // Identify a custom item with this CustomItemKey
    CustomItemKey = Class();
    CustomItemKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CustomItemKey = data;
        }
    };

    // Identify a custom collection with this CustomCollectionKey
    CustomCollectionKey = Class();
    CustomCollectionKey.prototype = {
        initialize: function(key) {
            var data = new Object();
            data.Key = key;
            this.CustomCollectionKey = data;
        }
    };

    // Update or create a custom item in storage
    UpdateCustomItemAction = Class();
    UpdateCustomItemAction.prototype = {
        initialize: function(customItemKey, name, mimeType, displayText, content, includeInRecentActivity) {
            var data = new Object();
            data.CustomItemKey = customItemKey;
            data.Name = name;
            data.MimeType = mimeType;
            data.DisplayText = displayText;
            data.Content = content;
            if ((typeof (includeInRecentActivity) == 'undefined') || (includeInRecentActivity == null)) {
                // Default to true for backwards compatibility
                includeInRecentActivity = true;
            }
            data.IncludeInRecentActivity = includeInRecentActivity
            this.UpdateCustomItemAction = data;
        }
    };

    // Add a new custom collection to storage
    AddCustomCollectionAction = Class();
    AddCustomCollectionAction.prototype = {
        initialize: function(customCollectionKey, customCollectionName) {
            var data = new Object();
            data.CustomCollectionKey = customCollectionKey;
            data.CustomCollectionName = customCollectionName;
            this.AddCustomCollectionAction = data;
        }
    };

    // Insert an item into a custom collection
    InsertIntoCollectionAction = Class();
    InsertIntoCollectionAction.prototype = {
        initialize: function(customCollectionKey, insertThisKey, position) {
            var data = new Object();
            data.CustomCollectionKey = customCollectionKey;
            data.InsertThisKey = insertThisKey;
            data.Position = position;
            this.InsertIntoCollectionAction = data;
        }
    };

    // Remove an item from a custom collection (position can be null to specify to remove all occurrences of item)
    RemoveFromCollectionAction = Class();
    RemoveFromCollectionAction.prototype = {
        initialize: function(customCollectionKey, removeThisKey, position) {
            var data = new Object();
            data.CustomCollectionKey = customCollectionKey;
            data.RemoveThisKey = removeThisKey;
            data.Position = position;
            this.RemoveFromCollectionAction = data;
        }
    };

    // Get a page of items out of a custom collection
    CustomCollectionPage = Class();
    CustomCollectionPage.prototype = {
        initialize: function(customCollectionKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.CustomCollectionKey = customCollectionKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.CustomCollectionPage = data;
        }
    };


    // Get a page of items out of a custom collection
    EditorMessageRequest = Class();
    EditorMessageRequest.prototype = {
        initialize: function() {
            this.EditorMessageRequest = new Object();
        }
    };

    // Retrieve a user's tags for the given content type
    UserTags = Class();
    UserTags.prototype = {
        initialize: function(userKey, contentType) {
            var data = new Object();
            data.UserKey = userKey;
            data.ContentType = contentType;
            this.UserTags = data;
        }
    };


    // Get an item's ContentPolicy
    GetContentPolicyAction = Class();
    GetContentPolicyAction.prototype = {
        initialize: function(targetKey, userTier, action) {
            var data = new Object();
            data.TargetKey = targetKey;
            data.UserTier = userTier;
            data.ContentPolicyActionType = action;
            this.GetContentPolicyAction = data;
        }
    }

    // Set an item's ContentPolicy
    SetContentPolicyAction = Class();
    SetContentPolicyAction.prototype = {
        initialize: function(targetKey, userTier, action, policy) {
            var data = new Object();
            data.TargetKey = targetKey;
            data.UserTier = userTier;
            data.ContentPolicyActionType = action;
            data.ContentPolicy = policy;
            this.SetContentPolicyAction = data;
        }
    }

    ContentPolicy = Class();
    ContentPolicy.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.ContentPolicy = data;
        }
    };

    ContentPolicyActionType = Class();
    ContentPolicyActionType.prototype = {
        initialize: function(name) {
            var data = new Object();
            data.Name = name;
            this.ContentPolicyActionType = data;
        }
    };

    // Updates a Forum's meta data
    UpdateForumAction = Class();
    UpdateForumAction.prototype = {
        initialize: function(forumKey, title, description) {
            var data = new Object();
            data.ForumKey = forumKey;
            data.Title = title;
            data.Description = description;
            this.UpdateForumAction = data;
        }
    };

    //Adds/Updates a Forum Discussion's meta data. If the key is a ForumKey, it will be added as a new Discussion.
    //If the key is a ForumDiscussionKey, the existing forum discussion will be updated.
    UpdateForumDiscussionAction = Class();
    UpdateForumDiscussionAction.prototype = {
        initialize: function(key, title, body, isQuestion, isPoll, section, categories) {
            var data = new Object();
            data.TargetThis = key;
            data.Title = title;
            data.Body = body;
            data.IsQuestion = typeof (isQuestion) == 'string' ? isQuestion : (isQuestion ? "true" : "false");
            data.IsPoll = typeof (isPoll) == 'string' ? isPoll : (isPoll ? "true" : "false");
            if (typeof (section) != "undefined") {
                data.Section = section;
            }
            if (typeof (categories) != "undefined") {
                data.Categories = categories;
            }
            this.UpdateForumDiscussionAction = data;
        }
    };

    //Adds/Updates a Forum Post's meta data. If the key is a ForumDiscussionKey, it will be added as a new Post.
    //If the key is a ForumPostKey, the existing forum post will be updated.
    UpdateForumPostAction = Class();
    UpdateForumPostAction.prototype = {
        initialize: function(key, title, body, isQuestion) {
            var data = new Object();
            data.TargetThis = key;
            data.Title = title;
            data.Body = body;
            data.IsQuestion = isQuestion;
            this.UpdateForumPostAction = data;
        }
    };

    //Updates a Forum Discussion's Sticky flag
    ForumToggleDiscussionStickyAction = Class();
    ForumToggleDiscussionStickyAction.prototype = {
        initialize: function(discussionKey) {
            var data = new Object();
            data.DiscussionKey = discussionKey;
            this.ForumToggleDiscussionStickyAction = data;
        }
    };

    //Opens/Closes a Forum Discussion
    ForumToggleDiscussionClosedAction = Class();
    ForumToggleDiscussionClosedAction.prototype = {
        initialize: function(discussionKey) {
            var data = new Object();
            data.DiscussionKey = discussionKey;
            this.ForumToggleDiscussionClosedAction = data;
        }
    };

    //Retrieves a paginated list of Discussions for a particular Forum
    ForumDiscussionsPage = Class();
    ForumDiscussionsPage.prototype = {
        initialize: function(forumKey, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.ForumKey = forumKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.ForumDiscussionsPage = data;
        }
    };

    //Retrieves a paginated list of Posts for a particular Forum
    ForumPostsPage = Class();
    ForumPostsPage.prototype = {
        initialize: function(forumDiscussionKey, numberPerPage, oneBasedOnPage, sort, findPostKey) {
            var data = new Object();
            data.DiscussionKey = forumDiscussionKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            data.FindPostKey = findPostKey;
            this.ForumPostsPage = data;
        }
    };

    //Retrieves a paginated list of forums for a particular category
    ForumCategoriesPage = Class();
    ForumCategoriesPage.prototype = {
        initialize: function(numberPerPage, oneBasedOnPage) {
            var data = new Object();
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            this.ForumCategoriesPage = data;
        }
    };

    //Retrieves a paginated list of forums for a particular category
    ForumsPage = Class();
    ForumsPage.prototype = {
        initialize: function(categoryKey, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.ForumCategoryKey = categoryKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.ForumsPage = data;
        }
    };

    ForumSearchAction = Class();
    ForumSearchAction.prototype = {
        initialize: function(searchKey, searchString, numberPerPage, onPage) {
            var data = new Object();
            data.TargetThis = searchKey;
            data.SearchString = searchString;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.ForumSearchAction = data;
        }
    };

    // Retrieves a paginated list of community groups
    CommunityGroupPage = Class();
    CommunityGroupPage.prototype = {
        initialize: function(numberPerPage, oneBasedOnPage, sort, section) {
            var data = new Object();
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            if ((typeof (section) == 'undefined') || (section == null)) {
                // Default section to All
                section = new Section("All");
            }
            data.Section = section;
            this.CommunityGroupPage = data;
        }
    };

    // Retrieves a paginated list of community groups
    CommunityGroupMembership = Class();
    CommunityGroupMembership.prototype = {
        initialize: function(groupKey, userKey) {
            var data = new Object();
            data.CommunityGroupKey = groupKey;
            data.UserKey = userKey;
            this.CommunityGroupMembership = data;
        }
    };


    // Retrieves a paginated list of community groups
    CommunityGroupMembershipPage = Class();
    CommunityGroupMembershipPage.prototype = {
        initialize: function(key, numberPerPage, oneBasedOnPage, sort, membershipFilter) {
            var data = new Object();
            data.Key = key;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            data.MembershipFilter = membershipFilter;
            this.CommunityGroupMembershipPage = data;
        }
    };

    // Retrieves a paginated list of registrants
    CommunityGroupRegistrantPage = Class();
    CommunityGroupRegistrantPage.prototype = {
        initialize: function(key, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.CommunityGroupKey = key;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.CommunityGroupRegistrantPage = data;
        }
    };

    // Retrieves a paginated list of banned users
    CommunityGroupBannedUserPage = Class();
    CommunityGroupBannedUserPage.prototype = {
        initialize: function(key, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.CommunityGroupKey = key;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.CommunityGroupBannedUserPage = data;
        }
    };

    // Retrieves a paginated list of invited users
    CommunityGroupInvitedUserPage = Class();
    CommunityGroupInvitedUserPage.prototype = {
        initialize: function(key, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.CommunityGroupKey = key;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.CommunityGroupInvitedUserPage = data;
        }
    };



    // Creates a new or updates an existing community group
    UpdateCommunityGroupAction = Class();
    UpdateCommunityGroupAction.prototype = {
        initialize: function(key, title, description, categories, visibility, bookmarks, section, photoKey) {
            var data = new Object();
            data.CommunityGroupKey = key;
            data.Title = title;
            data.Description = description;
            data.Categories = categories;
            data.Visibility = visibility,
        data.Bookmarks = bookmarks;
            data.Section = section;
            data.PhotoKey = photoKey;
            this.UpdateCommunityGroupAction = data;
        }
    };

    // Updates an existing commnity group's bookmarks
    UpdateCommunityGroupBookmarksAction = Class();
    UpdateCommunityGroupBookmarksAction.prototype = {
        initialize: function(key, bookmarks) {
            var data = new Object();
            data.CommunityGroupKey = key;
            data.Bookmarks = bookmarks;
            this.UpdateCommunityGroupBookmarksAction = data;
        }
    };

    // Creates or updates a user's membership in a group, with options to ban the user from the group.
    UpdateCommunityGroupMembershipAction = Class();
    UpdateCommunityGroupMembershipAction.prototype = {
        initialize: function(communityGroupKey, userKey, membershipTier, isBanned, banMessage) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            data.MembershipTier = membershipTier;
            data.IsBanned = isBanned;
            data.BanMessage = banMessage;
            this.UpdateCommunityGroupMembershipAction = data;
        }
    };

    // Enables a user to request membership in a community group or an admin to invite a non-member.
    RequestCommunityGroupMembershipAction = Class();
    RequestCommunityGroupMembershipAction.prototype = {
        initialize: function(communityGroupKey, userKey, message) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.UserKey = userKey;
            data.Message = message;
            this.RequestCommunityGroupMembershipAction = data;
        }
    };
    
    // allows a manager or admin to send a mass message to members of the group
    CommunityGroupSendGroupMessageAction = Class();
    CommunityGroupSendGroupMessageAction.prototype = {
        initialize: function(communityGroupKey, subject, body){
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;  
            data.Subject = subject;
            data.Body = body;
            this.CommunityGroupSendGroupMessageAction = data;
        }
    };


    // allows a users preferences for a specific community group to be created or updated
    UpdateCommunityGroupUserPrefsAction = Class();
    UpdateCommunityGroupUserPrefsAction.prototype = {
        initialize: function(communityGroupKey, userKey, enableGroupDigestMessages, enableGroupManagerMessages, preferredForumPostSortOrder){
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;  
            data.UserKey = userKey;
            data.EnableGroupDigestMessages = enableGroupDigestMessages;
            data.EnableGroupManagerMessages = enableGroupManagerMessages;
            data.PreferredForumPostSortOrder = preferredForumPostSortOrder;
            this.UpdateCommunityGroupUserPrefsAction = data;
        }
    };


    // retrieves a users's preferences for a specific community group
    CommunityGroupUserPrefs = Class();
    CommunityGroupUserPrefs.prototype = {
        initialize: function(communityGroupKey, userKey){
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;  
            data.UserKey = userKey;
            this.CommunityGroupUserPrefs = data;
        }
    };


    //Retrieves a paginated list of Events for a particular EventSetKey
    EventsPage = Class();
    EventsPage.prototype = {
        initialize: function(eventSetKey, startDate, endDate, numberPerPage, oneBasedOnPage, sort) {
            var data = new Object();
            data.EventSetKey = eventSetKey;
            data.StartDate = startDate;
            data.EndDate = endDate;
            data.NumberPerPage = numberPerPage;
            data.OnPage = oneBasedOnPage;
            data.Sort = sort;
            this.EventsPage = data;
        }
    };

    // Update or creates an Event, key can be either an EventKey (update case)
    // or an EventSetKey (create case)
    UpdateEventAction = Class();
    UpdateEventAction.prototype = {
        initialize: function(key, title, description, location, bookmarkName, bookmarkUrl, startDate, endDate, utcOffset) {
            var data = new Object();
            data.TargetThis = key;
            data.Title = title;
            data.Description = description;
            data.Location = location;
            data.BookmarkName = bookmarkName;
            data.BookmarkUrl = bookmarkUrl;
            data.StartDate = startDate;
            data.EndDate = endDate;
            data.UtcOffset = utcOffset;
            this.UpdateEventAction = data;
        }
    };


    // Retrieve a paginated list of recent group activities
    RecentMiniFeedActivity = Class();
    RecentMiniFeedActivity.prototype = {
        initialize: function(communityGroupKey, onPage, numberPerPage) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.OnPage = onPage;
            data.NumberPerPage = numberPerPage
            this.RecentMiniFeedActivity = data;
        }
    }

    //Retrieve a list of Most Active Users in a CommunityGroup
    CommunityGroupMostActiveMembers = Class();
    CommunityGroupMostActiveMembers.prototype = {
        initialize: function(communityGroupKey, age, maximumNumberOfMembers) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.Age = age;
            data.MaximumNumberOfMembers = maximumNumberOfMembers
            this.CommunityGroupMostActiveMembers = data;
        }
    }

    // perform a search for content within a specific community group
    CommunityGroupSearchAction = Class();
    CommunityGroupSearchAction.prototype = {
        initialize: function(communityGroupKey, searchType, searchString, numberPerPage, onPage) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.SearchType = searchType;
            data.SearchString = searchString;
            data.OnPage = onPage;
            data.NumberPerPage = numberPerPage;
            this.CommunityGroupSearchAction = data;
        }
    }

    // perform a search for content within a specific community group
    RequestDeleteCommunityGroupAction = Class();
    RequestDeleteCommunityGroupAction.prototype = {
        initialize: function(communityGroupKey, deleteReason) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.DeleteReason = deleteReason;
            this.RequestDeleteCommunityGroupAction = data;
        }
    }

    CommunityGroupRecentForumDiscussions = Class();
    CommunityGroupRecentForumDiscussions.prototype = {
        initialize: function(communityGroupKey, age, maximumNumberOfDiscussions) {
            var data = new Object();
            data.CommunityGroupKey = communityGroupKey;
            data.Age = age;
            data.MaximumNumberOfDiscussions = maximumNumberOfDiscussions;
            this.CommunityGroupRecentForumDiscussions = data;
        }
    }


    SystemTimeInfo = Class();
    SystemTimeInfo.prototype = {
        initialize: function() {
            var data = new Object();
            this.SystemTimeInfo = data;
        }
    }

    PrivateMessageFolderList = Class();
    PrivateMessageFolderList.prototype = {
        initialize: function() {
            var data = new Object();
            this.PrivateMessageFolderList = data;
        }
    }


    PrivateMessage = Class();
    PrivateMessage.prototype = {
        initialize: function(folderID, messageID) {
            var data = new Object();
            data.FolderID = folderID;
            data.MessageID = messageID;
            this.PrivateMessage = data;
        }
    }

    PrivateMessagePage = Class();
    PrivateMessagePage.prototype = {
        initialize: function(folderID, numberPerPage, onPage, messageReadState) {
            var data = new Object();
            data.FolderID = folderID;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.MessageReadState = messageReadState;
            this.PrivateMessagePage = data;
        }
    }

    PrivateMessageSendAction = Class();
    PrivateMessageSendAction.prototype = {
        initialize: function(subject, body, recipientList) {
            var data = new Object();
            data.Subject = subject;
            data.Body = body;
            data.RecipientList = recipientList;
            this.PrivateMessageSendAction = data;
        }
    }

    PrivateMessageMoveMessageAction = Class();
    PrivateMessageMoveMessageAction.prototype = {
        initialize: function(sourceFolderID, destinationFolderID, messageIDList) {
            var data = new Object();
            data.SourceFolderID = sourceFolderID;
            data.DestinationFolderID = destinationFolderID;
            data.MessageIDList = messageIDList;
            this.PrivateMessageMoveMessageAction = data;
        }
    }

    PrivateMessageDeleteMessageAction = Class();
    PrivateMessageDeleteMessageAction.prototype = {
        initialize: function(sourceFolderID, messageIDList) {
            var data = new Object();
            data.SourceFolderID = sourceFolderID;
            data.MessageIDList = messageIDList;
            this.PrivateMessageDeleteMessageAction = data;
        }
    }

    PrivateMessageEmptyTrashAction = Class();
    PrivateMessageEmptyTrashAction.prototype = {
        initialize: function() {
            var data = new Object();
            this.PrivateMessageEmptyTrashAction = data;
        }
    }


    PrivateMessageCreateFolderAction = Class();
    PrivateMessageCreateFolderAction.prototype = {
        initialize: function() {
            var data = new Object();
            data.FolderID = "Inbox";
            this.PrivateMessageCreateFolderAction = data;
        }
    }

    FirstUnreadPost = Class();
    FirstUnreadPost.prototype = {
        initialize: function(discussionKey, numberPerPage, sort) {
            var data = new Object();
            data.DiscussionKey = discussionKey;
            data.NumberPerPage = numberPerPage;
            data.Sort = sort;
            this.FirstUnreadPost = data;
        }
    }

    LatestPost = Class();
    LatestPost.prototype = {
        initialize: function(discussionKey, numberPerPage, sort) {
            var data = new Object();
            data.DiscussionKey = discussionKey;
            data.NumberPerPage = numberPerPage;
            data.Sort = sort;
            this.LatestPost = data;
        }
    }

    UpdateDiscussionLastReadAction = Class();
    UpdateDiscussionLastReadAction.prototype = {
        initialize: function(discussionKey, postKey, forceUpdate) {
            var data = new Object();
            data.DiscussionKey = discussionKey;
            if (postKey) {
                data.ForumPostKey = postKey;
            }
            if (forceUpdate) {
                data.ForceUpdate = true;
            }
            else {
                data.ForceUpdate = false;
            }
            this.UpdateDiscussionLastReadAction = data;
        }
    }

    UpdateForumAllReadAction = Class();
    UpdateForumAllReadAction.prototype = {
        initialize: function(forumKey) {
            var data = new Object();
            data.ForumKey = forumKey;
            this.UpdateForumAllReadAction = data;
        }
    }

    UpdateCategoryAllReadAction = Class();
    UpdateCategoryAllReadAction.prototype = {
        initialize: function(categoryKey) {
            var data = new Object();
            data.ForumCategoryKey = categoryKey;
            this.UpdateCategoryAllReadAction = data;
        }
    }

    UpdateExternalUserIdAction = Class();
    UpdateExternalUserIdAction.prototype = {
        initialize: function(externalSiteName, externalSiteUserId, forUser) {
            var data = new Object();
            data.ExternalSiteName = externalSiteName;
            data.ExternalSiteUserId = externalSiteUserId;
            data.ForUser = forUser;
            this.UpdateExternalUserIdAction = data;
        }
    }

    UpdateSubscriptionAction = Class();
    UpdateSubscriptionAction.prototype = {
        initialize: function(key, subscribe) {
            var data = new Object();
            data.SubscribeTo = key;
            data.Subscribe = subscribe;
            this.UpdateSubscriptionAction = data;
        }
    }

    UpdatePollAction = Class();
    UpdatePollAction.prototype = {
        initialize: function(pollOnKey, question, answers) {
            var data = new Object();
            data.PollOnKey = pollOnKey;
            data.Question = question;
            data.Answers = answers;
            this.UpdatePollAction = data;
        }
    }

    TogglePollIsClosedAction = Class();
    TogglePollIsClosedAction.prototype = {
        initialize: function(pollKey) {
            var data = new Object();
            data.ToggleThisPoll = pollKey;
            this.TogglePollIsClosedAction = data;
        }
    }

    PostPollAnswerAction = Class();
    PostPollAnswerAction.prototype = {
        initialize: function(pollToAnswer, indexOfAnswer) {
            var data = new Object();
            data.PollToAnswer = pollToAnswer;
            data.IndexOfAnswer = indexOfAnswer;
            this.PostPollAnswerAction = data;
        }
    }

    PollPage = Class();
    PollPage.prototype = {
        initialize: function(pollOnKey, numberPerPage, onPage, sort) {
            var data = new Object();
            data.PollOnKey = pollOnKey;
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Sort = sort;
            this.PollPage = data;
        }
    }

    CheckFilteredWords = Class();
    CheckFilteredWords.prototype = {
        initialize: function(keyValueDictionary) { // key is the string ID, value is the string to be checked - formatted like { "key1":"string1", "key2":"string2" }.
            var data = new Object();
            data.WordDictionary = keyValueDictionary;
            this.CheckFilteredWords = data;
        }
    }

    //Points&Badging
    AwardPointsAction = Class();
    AwardPointsAction.prototype = {
        initialize: function(userKey, points, currencyType) {
            var data = new Object();
            data.UserKey = userKey;
            data.Points = points;
            data.CurrencyType = currencyType;
            this.AwardPointsAction = data;
        }
    }

    BadgeFamily = Class();
    BadgeFamily.prototype = {
        initialize: function(badgeFamilyKey) {
            var data = new Object();
            data.BadgeFamilyKey = badgeFamilyKey;
            this.BadgeFamily = data;
        }
    }

    BadgeFamilies = Class();
    BadgeFamilies.prototype = {
        initialize: function() {
            var data = new Object();
            this.BadgeFamilies = data;
        }
    }

    BadgingEventAction = Class();
    BadgingEventAction.prototype = {
        initialize: function(activityName, activityTags, userTags) {
            var data = new Object();
            data.ActivityName = activityName;
            data.ActivityTags = activityTags
            data.UserTags = userTags;
            this.BadgingEventAction = data;
        }
    }

    GrantBadgeAction = Class();
    GrantBadgeAction.prototype = {
        initialize: function(userKey, badgeFamilyKey, badgeKey) {
            var data = new Object();
            data.UserKey = userKey;
            data.BadgeFamilyKey = badgeFamilyKey
            data.BadgeKey = badgeKey;
            this.GrantBadgeAction = data;
        }
    }

    Leaderboard = Class();
    Leaderboard.prototype = {
        initialize: function(leaderboardKey) {
            var data = new Object();
            data.LeaderboardKey = leaderboardKey;
            this.Leaderboard = data;
        }
    }

    Leaderboards = Class();
    Leaderboards.prototype = {
        initialize: function() {
            var data = new Object();
            this.Leaderboards = data;
        }
    }

    LeaderboardRankingsPage = Class();
    LeaderboardRankingsPage.prototype = {
        initialize: function(leaderboardKey, oneBasedOnPage) {
            var data = new Object();
            data.LeaderboardKey = leaderboardKey;
            data.OnPage = oneBasedOnPage;
            this.LeaderboardRankingsPage = data;
        }
    }

    RevokeBadgeAction = Class();
    RevokeBadgeAction.prototype = {
        initialize: function(userKey, badgeFamilyKey, badgeKey) {
            var data = new Object();
            data.UserKey = userKey;
            data.BadgeFamilyKey = badgeFamilyKey
            data.BadgeKey = badgeKey;
            this.RevokeBadgeAction = data;
        }
    }

    PointsAndBadgingRuleValidationAction = Class();
    PointsAndBadgingRuleValidationAction.prototype = {
        initialize: function(rules) {
            var data = new Object();
            data.Rules = rules;
            this.PointsAndBadgingRuleValidationAction = data;
        }
    }

    AbuseItemPage = Class();
    AbuseItemPage.prototype = {
        initialize: function(numberPerPage, onPage, section, maxReportsPerItem) {
            var data = new Object();
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            data.Section = section;
            data.MaxReportsPerItem = maxReportsPerItem;
            this.AbuseItemPage = data;
        }
    }

    AbuseItem = Class();
    AbuseItem.prototype = {
        initialize: function(targetKey) {
            var data = new Object();
            data.TargetKey = targetKey;
            this.AbuseItem = data;
        }
    }

    ClearAbuseAction = Class();
    ClearAbuseAction.prototype = {
        initialize: function(targetKey) {
            var data = new Object();
            data.TargetKey = targetKey;
            this.ClearAbuseAction = data;
        }
    }

    SetCommentBlockingStateAction = Class();
    SetCommentBlockingStateAction.prototype = {
        initialize: function(commentKey, blockingState) {
            var data = new Object();
            data.CommentKey = commentKey;
            data.CommentBlockingState = blockingState;
            this.SetCommentBlockingStateAction = data;
        }
    }
    //Community feed
    CommunityFeedRequest = Class();
    CommunityFeedRequest.prototype = {
        initialize: function(activityForTypes, count) {
            var data = new Object();
            data.ActivityForTypes = activityForTypes;
            data.Count = count;
            this.CommunityFeedRequest = data;
        }
    }

    // updates the flag on individual content as to
    // whether or not the content will be included in
    // discovery results
    UpdateDiscoveryFilterFlagOnContentAction = Class();
    UpdateDiscoveryFilterFlagOnContentAction.prototype = {
        initialize: function(content, excludeContentFlag, siteList) {
            var data = new Object();
            data.DiscoveryFilterFlagExcludeThisContent = content;
            data.ExcludeContentFlag = excludeContentFlag;
            data.SiteList = siteList;
            this.UpdateDiscoveryFilterFlagOnContentAction = data;
        }
    };

    SendTwitterMessageAction = Class();
    SendTwitterMessageAction.prototype = {
        initialize: function(message, url, template) {
            var data = new Object();
            data.Message = message;
            data.Url = url;
            data.Template = template;
            this.SendTwitterMessageAction = data;
        }
    }

    UserTwitterStatus = Class();
    UserTwitterStatus.prototype = {
        initialize: function(userKey) {
            var data = new Object();
            data.UserKey = userKey;
            this.UserTwitterStatus = data;
        }
    }


    UserTwitterFriends = Class();
    UserTwitterFriends.prototype = {
        initialize: function(numberPerPage, onPage) {
            var data = new Object();
            data.NumberPerPage = numberPerPage;
            data.OnPage = onPage;
            this.UserTwitterFriends = data;
        }
    }

    UserExtendedPrefs = Class();
    UserExtendedPrefs.prototype = {
        initialize: function(userKey) {
            var data = new Object();
            data.UserKey = userKey;
            this.UserExtendedPrefs = data;
    	}
    }
    FriendFeedRequest = Class();
    FriendFeedRequest.prototype = {
        initialize: function(forUserKey, pageNumber, includeTypes) {
            var data = new Object();
            data.ForUserKey = forUserKey;
            data.PageNumber = pageNumber;
            data.IncludeTypes = includeTypes;
            this.FriendFeedRequest = data;
        }
    }
    
    AddFriendFeedReactionRequest = Class();
    AddFriendFeedReactionRequest.prototype = {
        initialize: function(reactionOnKey, authorUserKey, body) {
            var data = new Object();
            data.ReactionOnKey = reactionOnKey;
            data.AuthorKey = authorUserKey;
            data.Body = body;
            this.AddFriendFeedReactionRequest = data;
	}
    }
    
    UpdateUserExtendedPrefAction = Class();
    UpdateUserExtendedPrefAction.prototype = {
        initialize: function(name, value) {
            var data = new Object();
            data.PrefName = name;
            data.PrefValue = value;
            this.UpdateUserExtendedPrefAction = data;
        }
    }
    
    UpdateUserPathRequest = Class();
    UpdateUserPathRequest.prototype = {
        initialize: function(userKey, path){
            var data = new Object();
            data.User = userKey;
            data.Path = path;
            this.UpdateUserPathRequest = data;
	}
    }
    
    DeleteFriendFeedReactionRequest = Class();
    DeleteFriendFeedReactionRequest.prototype = {
        initialize: function(onFeedActivityKey, reactionKey) {
            var data = new Object();
            data.ReactionOnKey = onFeedActivityKey;
            data.ReactionKey = reactionKey;
            this.DeleteFriendFeedReactionRequest = data;
        }
    }
    
    UsersForPathRequest = Class();
    UsersForPathRequest.prototype = {
        initialize: function(forPath, includeSubPaths){
            var data = new Object();
            data.Path = forPath;
            data.IncludeSubPaths = includeSubPaths;
            this.UsersForPathRequest = data;
	}
    }
    
    SetFriendFeedUserVisibilityRequest = Class();
    SetFriendFeedUserVisibilityRequest.prototype = {
        initialize: function(feedOwner, forUser, isVisible){
            var data = new Object();
            data.FeedOwnerUserKey = feedOwner;
            data.ForUserKey = forUser;
            data.Visible = isVisible;
            this.SetFriendFeedUserVisibilityRequest = data;
        }
    }
    
    HiddenFriendFeedUsersRequest = Class();
    HiddenFriendFeedUsersRequest.prototype = {
        initialize: function(forUserKey){
            var data = new Object();
            data.ForUserKey = forUserKey;
            this.HiddenFriendFeedUsersRequest = data;
	}
    }
    
    PathForUserRequest = Class();
    PathForUserRequest.prototype = {
        initialize: function(forUserKey){
            var data = Object();
            data.User = forUserKey;
            this.PathForUserRequest = data;
        }
    }
	CommentRequest = Class();
	CommentRequest.prototype = {
		initialize: function(commentKey, lookInModeration) {
			var data = Object();
			data.CommentKey = commentKey;
			data.LookInModeration = lookInModeration;
			this.CommentRequest = data;
		}
	}
    
    SendYahooUpdateMessageAction = Class();
    SendYahooUpdateMessageAction.prototype = {
        initialize: function(message, url, template) {
            var data = new Object();
            data.Message = message;
            data.Url = url;
            data.Template = template;
            this.SendYahooUpdateMessageAction = data;
        }
    }
    
    SendLinkedInUpdateMessageAction = Class();
    SendLinkedInUpdateMessageAction.prototype = {
		initialize: function(message, url, template) {
			var data = new Object();
			data.Message = message;
			data.Url = url;
			data.Template = template;
			this.SendLinkedInUpdateMessageAction = data;
		}
    }
    
    SendLinkedInNetworkUpdateMessageAction = Class();
    SendLinkedInNetworkUpdateMessageAction.prototype = {
		initialize: function(message, url, template) {
			var data = new Object();
			data.Message = message;
			data.Url = url;
			data.Template = template;
			this.SendLinkedInNetworkUpdateMessageAction = data;
		}
    }
    
    UserLinkedInProfile = Class();
    UserLinkedInProfile.prototype = {
        initialize: function(userKey) {
            var data = new Object();
            data.UserKey = userKey;
            this.UserLinkedInProfile = data;
        }
    }
    
    UserLinkedInUniqueId = Class();
    UserLinkedInUniqueId.prototype = {
		initialize: function(userKey) {
			var data = new Object();
			data.UserKey = userKey;
			this.UserLinkedInUniqueId = data;
		}
    }
    
    ForumViewTrackingAction = Class();
    ForumViewTrackingAction.prototype = {
		initialize: function(discussionKey) {
			var data = new Object();
			data.DiscussionKey = discussionKey;
			this.ForumViewTrackingAction = data;
		}
    }

})();
