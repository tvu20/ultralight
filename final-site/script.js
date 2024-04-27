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

const descriptions3 = {
  morning: "Noise: Silent <br/> Company: Few",
  afternoon: "Noise: Plentiful <br/> Company: Plentiful",
  evening: "Noise: Plentiful <br/> Company: Occasional",
  night: "Noise: Audible <br/> Company: Plentiful",
};

const descriptions2 = {
  morning: "Noise: Quiet <br/> Company: Plentiful",
  afternoon: "Noise: Chatter <br/> Company: Plentiful",
  evening: "Noise: Quiet <br/> Company: Occasional",
  night: "Noise: Silent <br/> Company: None",
};

const descriptions1 = {
  morning: "Noise: Footsteps <br/> Company: Occasional",
  afternoon: "Noise: Footsteps <br/> Company: Plentiful",
  evening: "Noise: Footsteps <br/> Company: Plentiful",
  night: "Noise: Quiet <br/> Company: None",
};

const descriptionsg = {
  morning: "Noise: Quiet <br/> Company: Rare",
  afternoon: "Noise: Audible <br/> Company: Occasional",
  evening: "Noise: Deafening <br/> Company: Large Crowd",
  night: "Noise: Silent <br/> Company: None",
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

document.addEventListener('touchstart', function () {
  IDS.map((i) => {
    var curr = document.getElementById(i + "-btn");

    if (i === currentFloor) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator";
    }
  });

  updateArrows();
})

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

function updateLines(value) {
  document.getElementById("line-3").style.left = value;
  document.getElementById("line-2").style.left = value;
  document.getElementById("line-1").style.left = value;
  document.getElementById("line-g").style.left = value;
}

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
  }

  if (status === "night") {
    updateLines("292.5px");
  } else if (status === "morning") {
    updateLines("67.5px");
  } else if (status === "afternoon") {
    updateLines("142.5px");
  } else {
    updateLines("217.5px");
  }

  document.getElementById("third-eval").innerHTML = descriptions3[status];
  document.getElementById("second-eval").innerHTML = descriptions2[status];
  document.getElementById("first-eval").innerHTML = descriptions1[status];
  document.getElementById("ground-eval").innerHTML = descriptionsg[status];
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
