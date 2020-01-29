1.	You need to create a web application using Node.js. For front end, any technology is preferred.
2.	Application should be “three-tier architecture”. app layer, web socket layer, db layer. 
3.	App layer will be used for exposing the routes. Web socket layer is for implementing the sockets connection. Db layer is for saving the data in db (anything is preferred).
4.	You might have heard about live streaming of videos. You need to build a basic front-end where a user login in via google oauth. Post this, user can send a YouTube live stream url along with comma separated keywords. Keywords will be sent via separate text box.
5.	The YouTube link will be sent via the post route via app layer. We need to capture all the live comments from the YouTube stream url and send comments to the front-end via the web socket layer. User will be subscribed to the web socket service only upon sending a YouTube stream url. 
6.	If the keywords are present, we need to check if multiple are provided or not. In this case only those comments will be sent to front-end which have those keywords.
7.	Check this against multiple users by accessing the application using different tabs.
8.	The oauth service should be handled at the backend or frontend level whatever is preferred. But the token verification should be done at the backend level too.
9.	Apart from this, all the comments irrespective of keywords must be stored in the database in the comments  (table, document collection etc.) Another one will be session  where users info is stored along with the stream url and the keywords he sent for if present. The comments should be tied using the unique session id.
10.	Lastly create a search route at app service if he wants to later search against a specific session for comments with different keywords. If a user has multiple session. All the session for a given google id will be shown at front-end and the searching for different keywords will be only performed against a particular session.
