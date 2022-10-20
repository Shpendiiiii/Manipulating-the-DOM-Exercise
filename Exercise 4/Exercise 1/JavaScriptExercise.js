class Film {
  constructor(title, description, actors, rating, image, runtime) {
    this.title = title;
    this.description = description;
    this.actors = actors;
    this.rating = rating;
    this.image = image;
    this.runtime = runtime;
  }
  displayTitle() {
    return this.title;
  }
  displayRating() {
    return this.rating;
  }

  displayDetails() {
    return `Runtime: ${this.runtime}, Description: ${this.description}`;
  }
}
var actorsList = [];
var filmArray = [];

class filmList extends Film {
  constructor(movie, actors) {
    super(actors);
    this.movie = movie;
  }
  add(movie) {
    try {
      if (movie instanceof Film) {
        filmArray.push(movie);
      } else {
        throw "Not an instantied object";
      }
    } catch (e) {
      console.error(e);
    }
    //this method checks if the object is an instance
    //of the Film class and if it is, it will add it to the filmArray array
  }

  printOut() {
    for (var i = 0; i < filmArray.length; i++) {
      console.log(filmArray[i]);
    }
  }

  swabs(index) {
    try {
      if (typeof index === "number" && index <= filmArray.length) {
        console.log(filmArray[index]);
      } else {
        throw "Not a valid index";
      }
    } catch (e) {
      console.error(e);
    }
  }

  isciPoPlayer(actorName) {
    var regex1 = new RegExp(actorName, "g" + "i");
    for (var i = 0; i < filmArray.length; i++) {
      for (var x = 0; x < filmArray[i].actors.length; x++) {
        const found = filmArray[i].actors[x].match(regex1);
        if (found != null) {
          actorsList.push(filmArray[i].title);
        }
      }
    }
  }
}

class Program {
  static test() {
    // let film1 = new Film(
    //   "Dont Look Up",
    //   "Short movie",
    //   ["Shpend", "Aliu"],
    //   9.99,
    //   "Imazh"
    // );
    // let film3 = new Film(
    //   "Titaniku",
    //   "Short movie",
    //   ["Hej", "Aliu"],
    //   9.99,
    //   "Imazh"
    // );
    // console.log(film2.displayDetails());
    // let testFilm = new filmList();
    // testFilm.add(film1);
    // testFilm.add(film2);
    // console.log(filmArray);
    // testFilm.add(film3);
    // testFilm.isciPoPlayer("shpend");
    // console.log("Films: " + actorsList.join("; "));
    // testFilm.printOut();
  }
}

Program.test();
let data = [];

const addData = (ev) => {
  ev.preventDefault();
  // var form = document.getElementById("filmForm");

  // var inputi = form.getElementsByTagName("input");
  var checkTitle = document.forms["filmForm"]["title"].value;
  var checkDesc = document.forms["filmForm"]["shortDesc"].value;
  var re = /^[A-Za-z\s':,]+$/;
  console.log(checkDesc);
  if (checkDesc == "" || checkTitle == "" || !re.test(checkTitle)) {
    alert("Fill the fields correctly");
    return false;
  } else {
    var personalInfo = {
      movieTitle: document.getElementById("title").value,
      shortDesc: document.getElementById("shortDesc").value,
      actor: document
        .getElementById("actorActress")
        .value.split(/\r?\n/)
        .filter((element) => element),
      assessment: document.getElementById("assessment").value,
      image: document.getElementById("image").value,
      runtime: document.getElementById("runtime").value,
    };
  }

  data.push(personalInfo);

  document.forms[0].reset();

  // console.log(data);
  var film1 = new Film(
    data[0].movieTitle,
    data[0].shortDesc,
    data[0].actor,
    data[0].assessment,
    data[0].image,
    data[0].runtime
  );

  console.log(film1);
  // console.log(film1.title);
  // console.log(film1.actors);
  document.getElementById("titleD").innerText = film1.displayTitle();
  document.getElementById("showRating").innerText = film1.displayRating();
  document.getElementById("showDetails").innerText = film1.displayDetails();
  document.getElementById;
  var img = document.getElementById("thumbnail");
  img.src = film1.image;

  //listing actors
  let listActors = document.getElementById("actorList");
  theList = film1.actors;
  theList.forEach((item) => {
    let listElem = document.createElement("li");
    listElem.innerText = item;
    listActors.appendChild(listElem);

    //getting the rating
  });
};

const rmDiv = (event) => {
  event.preventDefault();
  var item = document.getElementById("showMovies");
  item.remove();
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("delBtn").addEventListener("click", rmDiv);
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sub").addEventListener("click", addData);
});
