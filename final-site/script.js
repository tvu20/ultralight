const IDS = ["third", "second", "first", "ground"];

var currentFloor = "third";

const mapFloors = {
  third: 0,
  second: 1,
  first: 2,
  ground: 3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;

    if (intersecting) {
      currentFloor = entry.target.id.split("-card")[0];
    }
  });
});

observer.observe(document.getElementById("third-card"));
observer.observe(document.getElementById("second-card"));
observer.observe(document.getElementById("first-card"));
observer.observe(document.getElementById("ground-card"));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
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
};

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

  document.body.setAttribute("data-status", status);
}

updateTimeStatus(); // Call the function to set initial status

// Update status every second
setInterval(updateTimeStatus, 1000);
