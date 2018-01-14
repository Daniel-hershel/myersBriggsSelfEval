
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIM6Pj4FJioYNm9YOQdXvebKa-NHYEmIg",
    authDomain: "mbtiselfeval.firebaseapp.com",
    databaseURL: "https://mbtiselfeval.firebaseio.com",
    projectId: "mbtiselfeval",
    storageBucket: "",
    messagingSenderId: "924034186347"
  };


/* Snitialize firebase app */

let firebaseApp = firebase.initializeApp(config);

/* Set a variable to access the database of that app */

let db = firebaseApp.database();

let databaseUrl = db.ref("cohort");

var app = new Vue({
   el: "#app",

  data() {
    return {
      
      coleSelfValOne: 50,
      coleSelfValTwo: 50,
      coleSelfValThree: 50,
      coleSelfValFour: 50,
      coleSelfValFive: 50,
      dsb: 85,
      dsbSelfValTwo: 50,
      dsbSelfValThree: 50,
      dsbSelfValFour: 50,
      dsbSelfValFive: 50,
      nataliaSelfValOne: 50,
      nataliaSelfValTwo: 50,
      nataliaSelfValThree: 50,
      nataliaSelfValFour: 50,
      nataliaSelfValFive: 50,
    
    };
  },
firebase: function () {

    return {
    source: databaseUrl
  }
  },
  methods: {
    showScores: function() {

      },

    showValue: function(entry, event){

       let entryKey = entry['.key']
       let whichOne = event.srcElement.className
       let newValue = event.srcElement.value

      // console.log(event.srcElement.value)
      // console.log(event)

      databaseUrl.child(entry['.key']).child(whichOne).set(newValue);

    }

    }, //end methods
     
  created: function() {
    console.log(this)
    console.log(databaseUrl)
    
  },
 

  })