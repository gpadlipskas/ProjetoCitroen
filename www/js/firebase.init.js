angular.module('firebaseConfig', ['firebase'])

    .run(function () {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA3JrSAD9ldQP6U0kYy0oMlaP23ZeBwnp8",
            authDomain: "projetocitroenauth.firebaseapp.com",
            databaseURL: "https://projetocitroenauth.firebaseio.com",
            projectId: "projetocitroenauth",
            storageBucket: "projetocitroenauth.appspot.com",
            messagingSenderId: "95268864401"
        };
        firebase.initializeApp(config);

    })