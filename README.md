# MovieBrowser
React Native app to search movies descriptions.

# User Stories

The User can:

- [X] Search for movies and view movie details 
- [X] Create an account and save movies to their account

## Notes

User account creation is managed by **Google Firebase** and users can save movies to their account to view later.

The movie ID's are saved to **Google Firestore** and associated with the user's account ID. 

Movie details are fetched from the **OMDb API**.

## Open-source libraries used

- [React Native](https://facebook.github.io/react-native/) - Create native apps for Android and iOS using React
- [OMDb API](http://www.omdbapi.com/) - The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. 
- [Google Firebase](https://firebase.google.com/) - Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.
- [Google Firestore](https://cloud.google.com/firestore/) - Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale.
- [Expo](https://expo.io/) - Expo enables you to build universal native apps using only JavaScript. 
