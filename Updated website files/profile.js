const firebaseConfig = {
    apiKey: "AIzaSyB2H8JFJ6hSLZxfoN2OJrUDYhUBQwzjNaY",
    authDomain: "linder-e8cfd.firebaseapp.com",
    databaseURL: "https://linder-e8cfd-default-rtdb.firebaseio.com",
    projectId: "linder-e8cfd",
    storageBucket: "linder-e8cfd.appspot.com",
    messagingSenderId: "980963225738",
    appId: "1:980963225738:web:b80b474ac36a69d2b0bd73",
    measurementId: "G-NY0774TKRJ"
  };
firebase.initializeApp(firebaseConfig);



var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress =  document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");
 function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}


function uploadImage(){

    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";
            }


        })


    })
    
    
}