const IDS = ["third", "second", "first", "ground"];

console.log(window.innerHeight);

document.addEventListener("wheel", function (ev) {
  var pos = document.documentElement.scrollTop || document.body.scrollTop;

  var id = Math.round(pos / window.innerHeight);

  IDS.map((i, index) => {
    var curr = document.getElementById(i + "-btn");

    if (index === id) {
      curr.className = "active floor";
    } else {
      curr.className = "floor ";
    }

    // // active id
    // if (i === id) {
    //   curr.className = "active floor";
    // } else {
    //   curr.className = "floor ";
    // }
  });
});

window.smoothScroll = function (target, id) {
  var scrollContainer = target;

  // change class!
  IDS.map((i) => {
    var curr = document.getElementById(i + "-btn");

    // active id
    if (i === id) {
      curr.className = "active floor";
    } else {
      curr.className = "floor ";
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

  console.log("target", targetY);

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
