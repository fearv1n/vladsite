//заміна класів на одній сторінці

// var changelangugua = document.getElementById("langugua");
// var changelangugeng = document.getElementById("langugeng");

// var changeshapkaua = document.getElementById("shapkaua");
// var changeshapkaeng = document.getElementById("shapkaeng");


// changelangugua.addEventListener("click", function() {

//     changeshapkaua.classList.toggle("hide");
//     changeshapkaeng.classList.toggle("hide");

// });

// changelangugeng.addEventListener("click", function() {

//     changeshapkaua.classList.toggle("hide");
//     changeshapkaeng.classList.toggle("hide");

// });








document.addEventListener("DOMContentLoaded", function() {

//зміна мови на всіх сторінках

    var changelangugua = document.getElementById("langugua");
    var changelangugeng = document.getElementById("langugeng");
    var changeshapkaua = document.getElementById("shapkaua");
    var changeshapkaeng = document.getElementById("shapkaeng");
  


    changelangugua.addEventListener("click", function() {
      changeshapkaua.classList.toggle("hide");
      changeshapkaeng.classList.toggle("hide");
  
      localStorage.setItem("changeshapkauacganged", changeshapkaua.classList.contains("hide"));
      localStorage.setItem("changeshapkaengcganged", changeshapkaeng.classList.contains("hide"));
    });
  



    changelangugeng.addEventListener("click", function() {
      changeshapkaua.classList.toggle("hide");
      changeshapkaeng.classList.toggle("hide");
  
      localStorage.setItem("changeshapkauacganged", changeshapkaua.classList.contains("hide"));
      localStorage.setItem("changeshapkaengcganged", changeshapkaeng.classList.contains("hide"));
    });
  



    if (localStorage.getItem("changeshapkauacganged") === "true") {
      changeshapkaua.classList.add("hide");
      changeshapkaeng.classList.remove("hide");
      console.log("changeshapkauacganged")
    }
  
    if (localStorage.getItem("changeshapkaengcganged") === "true") {
      changeshapkaeng.classList.add("hide");
      changeshapkaua.classList.remove("hide");
      console.log("changeshapkaengcganged")
    }


 
  



//зміна теми на всіх сторінках


var changetemalightua = document.getElementById("lightua");
var changetemalighteng = document.getElementById("lighteng");
var changetemadarkua = document.getElementById("darkua");
var changetemadarkeng = document.getElementById("darkeng");


//укр зміна
changetemalightua.addEventListener("click", function() {

    changetemalightua.classList.add("hide");
    changetemadarkua.classList.remove("hide");

    changetemalighteng.classList.add("hide");
    changetemadarkeng.classList.remove("hide");

    localStorage.setItem("changetemalightuacganged", changetemalightua.classList.contains("hide"));

    localStorage.removeItem("changetemadarkengcganged");
    localStorage.removeItem("changetemadarkuacganged");
    localStorage.removeItem("changetemalightengcganged");
});

if (localStorage.getItem("changetemalightuacganged") === "true") {
    changetemalightua.classList.add("hide");
    changetemalighteng.classList.add("hide");
    changetemadarkua.classList.remove("hide");
    changetemadarkeng.classList.remove("hide");
    console.log("changetemalightuacganged")
}

changetemadarkua.addEventListener("click", function() {

  changetemalightua.classList.remove("hide");
  changetemadarkua.classList.add("hide");

  changetemalighteng.classList.remove("hide");
  changetemadarkeng.classList.add("hide");

  localStorage.setItem("changetemadarkuacganged", changetemadarkua.classList.contains("hide"));

  localStorage.removeItem("changetemadarkengcganged");
  localStorage.removeItem("changetemalightuacganged");
  localStorage.removeItem("changetemalightengcganged");
});

if (localStorage.getItem("changetemadarkuacganged") === "true") {
  changetemalightua.classList.remove("hide");
  changetemalighteng.classList.remove("hide");
  changetemadarkua.classList.add("hide");
  changetemadarkeng.classList.add("hide");
  console.log("changetemadarkuacganged")
}




//англ зміна
changetemalighteng.addEventListener("click", function() {

  changetemalightua.classList.add("hide");
  changetemadarkua.classList.remove("hide");

  changetemalighteng.classList.add("hide");
  changetemadarkeng.classList.remove("hide");

  //запис інформації до  localStorage
  localStorage.setItem("changetemalightengcganged", changetemalighteng.classList.contains("hide"));

  //очищення інформації з  localStorage
  localStorage.removeItem("changetemadarkengcganged");
  localStorage.removeItem("changetemadarkuacganged");
  localStorage.removeItem("changetemalightuacganged");
});

if (localStorage.getItem("changetemalightengcganged") === "true") {
  changetemalightua.classList.add("hide");
  changetemalighteng.classList.add("hide");
  changetemadarkua.classList.remove("hide");
  changetemadarkeng.classList.remove("hide");
  console.log("changetemalightengcganged")
}

changetemadarkeng.addEventListener("click", function() {

changetemalightua.classList.remove("hide");
changetemadarkua.classList.add("hide");

changetemalighteng.classList.remove("hide");
changetemadarkeng.classList.add("hide");

localStorage.setItem("changetemadarkengcganged", changetemadarkeng.classList.contains("hide"));

localStorage.removeItem("changetemalightengcganged");
localStorage.removeItem("changetemadarkuacganged");
localStorage.removeItem("changetemalightuacganged");
});

if (localStorage.getItem("changetemadarkengcganged") === "true") {
changetemalightua.classList.remove("hide");
changetemalighteng.classList.remove("hide");
changetemadarkua.classList.add("hide");
changetemadarkeng.classList.add("hide");
console.log("changetemadarkengcganged")
}












});