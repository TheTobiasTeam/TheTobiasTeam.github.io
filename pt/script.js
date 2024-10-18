let childDivs;
let views;

function changeMainView(path) {
  for (const childDiv of childDivs) {
    childDiv.style.display = "none";
  }
  const content = document.getElementById(path);
  content.style.display = "block";
  for (const link of document.querySelectorAll("nav > a")) {
    link.classList.remove("active");
  }
  document.querySelector(`nav > a[href=\"#${path}\"]`).classList.add("active");
}

function changeTab() {
  let path = location.hash.toString();
  if (path === "#" || !path) {
    path = "#home";
  }
  path = path.slice(1);
  if (["home", "bookmarklets", "downloadable", "proxies"].includes(path)) {
    changeMainView(path);
  } else {
    for (const view of views) {
      view.style.display = "none";
      // path is to valid bookmarklet
      if (view.id === path) {
        // show bookmarklets page
        changeMainView("bookmarklets");
        view.style.display = "block";
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if ((navigator.language || navigator.userLanguage).indexOf("en") === 0) {
    window.location.replace("/");
  }
  childDivs = document.querySelectorAll("main > div");
  views = document.querySelectorAll("div#bookmarklet-view > div");
  changeTab();
});

window.addEventListener("hashchange", () => {
  changeTab();
});
