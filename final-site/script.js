// list of floor ids
const IDS = ["third", "second", "first", "ground"];

// current floor
var currentFloor = "third";

// mapping floor to index
const mapFloors = {
  third: 0,
  second: 1,
  first: 2,
  ground: 3,
};

// mapping floor to display name
const floorName = {
  third: "3F",
  second: "2F",
  first: "1F",
  ground: "G",
};

// intersection observer to check which floor is onscreen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;

    if (intersecting) {
      currentFloor = entry.target.id.split("-card")[0];

      const h3 = document.querySelector(".floor-title");
      h3.textContent = floorName[currentFloor];
    }
  });
});

observer.observe(document.getElementById("third-card"));
observer.observe(document.getElementById("second-card"));
observer.observe(document.getElementById("first-card"));
observer.observe(document.getElementById("ground-card"));

// return to top of screen on load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const updateArrows = () => {
  if (currentFloor === "ground") {
    var temp = document.querySelectorAll(".down-btn");

    temp.forEach((e) => {
      e.style.opacity = "0";
    });
  } else if (currentFloor === "third") {
    var temp = document.querySelectorAll(".up-btn");

    temp.forEach((e) => {
      e.style.opacity = "0";
    });
  } else {
    var temp = document.querySelectorAll("button");

    temp.forEach((e) => {
      e.style.opacity = "1";
    });
  }
};

// updates current position on scroll
document.addEventListener("wheel", function () {
  IDS.map((i) => {
    var curr = document.getElementById(i + "-btn");

    if (i === currentFloor) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator";
    }
  });

  updateArrows();
});

// updates current position on click
window.scrollUp = function () {
  var newId = Math.max(mapFloors[currentFloor] - 1, 0);

  var scrollContainer = document.getElementById(IDS[newId]);

  IDS.map((i, idx) => {
    var curr = document.getElementById(i + "-btn");

    // active id
    if (idx === newId) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator ";
    }
  });

  scrollContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });

  if (newId === 0) {
    var temp = document.querySelectorAll(".up-btn");

    temp.forEach((e) => {
      e.style.opacity = "0";
    });
  } else {
    var temp = document.querySelectorAll("button");

    temp.forEach((e) => {
      e.style.opacity = "1";
    });
  }
};

// updates current position on click
window.scrollDown = function () {
  var newId = Math.min(mapFloors[currentFloor] + 1, 3);

  var scrollContainer = document.getElementById(IDS[newId]);

  IDS.map((i, idx) => {
    var curr = document.getElementById(i + "-btn");

    // active id
    if (idx === newId) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator ";
    }
  });

  scrollContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });

  if (newId === 3) {
    var temp = document.querySelectorAll(".down-btn");

    temp.forEach((e) => {
      e.style.opacity = "0";
    });
  } else {
    var temp = document.querySelectorAll("button");

    temp.forEach((e) => {
      e.style.opacity = "1";
    });
  }
};

function updateContent(status) {
  if (status === "evening" || status === "night") {
    document.getElementById("upd").setAttribute("src", "arrow-up-white.png");
    document
      .getElementById("downd")
      .setAttribute("src", "arrow-down-white.png");

    document.getElementById("upm").setAttribute("src", "arrow-up-white.png");
    document
      .getElementById("downm")
      .setAttribute("src", "arrow-down-white.png");
  } else {
  }
}

// updates time of day
function updateTimeStatus() {
  const now = new Date();
  const hour = now.getHours();

  let status = "";

  if (hour >= 6 && hour < 12) {
    status = "morning";
  } else if (hour >= 12 && hour < 17) {
    status = "afternoon";
  } else if (hour >= 17 && hour < 21) {
    status = "evening";
  } else {
    status = "night";
  }

  if (status !== document.body.getAttribute("data-status")) {
    updateContent(status);
  }

  document.body.setAttribute("data-status", status);
}

updateTimeStatus(); // Call the function to set initial status

// Update status every second
setInterval(updateTimeStatus, 1000);

window.onload = function () {
  updateTimeStatus();

  const status = document.body.getAttribute("data-status");

  updateContent(status);
};
