const IDS = ["third", "second", "first", "ground"];

const scroll = function (c, a, b, i) {
  i++;
  if (i > 30) return;
  c.scrollTop = a + ((b - a) / 30) * i;
  setTimeout(function () {
    scroll(c, a, b, i);
  }, 10);
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// updates current position on scroll
document.addEventListener("wheel", function (ev) {
  var pos = document.documentElement.scrollTop || document.body.scrollTop;

  var id = Math.round(pos / window.innerHeight);

  IDS.map((i, index) => {
    var curr = document.getElementById(i + "-btn");

    if (index === id) {
      curr.className = "active elevator";
      // curr.className = "active floor";
    } else {
      curr.className = "elevator ";
      // curr.className = "floor ";
    }
  });
});

// updates current position on click
window.scrollUp = function () {
  var pos = document.documentElement.scrollTop || document.body.scrollTop;

  var newId = Math.max(Math.round(pos / window.innerHeight) - 1, 0);

  var scrollContainer = document.getElementById(IDS[newId]);

  var target = scrollContainer;

  IDS.map((i, idx) => {
    var curr = document.getElementById(i + "-btn");

    // active id
    if (idx === newId) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator ";
    }
  });

  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

// updates current position on click
window.scrollDown = function () {
  var pos = document.documentElement.scrollTop || document.body.scrollTop;

  var newId = Math.min(Math.round(pos / window.innerHeight) + 1, 3);

  var scrollContainer = document.getElementById(IDS[newId]);

  var target = scrollContainer;

  IDS.map((i, idx) => {
    var curr = document.getElementById(i + "-btn");

    // active id
    if (idx === newId) {
      curr.className = "active elevator";
    } else {
      curr.className = "elevator ";
    }
  });

  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
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
