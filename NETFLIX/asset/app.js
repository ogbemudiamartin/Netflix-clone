const headers = document.querySelectorAll(".faq-header");

headers.forEach((head) => {
  let hidden = true;

  header.addeventlisteaner("click", () => {
    if (hidden) {
      headers.forEach((head) => {
        head.nextSibling.nextSibling.classlist.add("hidden");
        head.children[1].innerHTML = "&#10011;";
      });
      header.nextSibling.nextSibling.classlist.remove("hidden");
      header.children[1].innerHTML = "&#10005;";
      hidden = false;
    } else {
      header.nextSibling.nextSibling.classlist.add("hidden");
      header.children[1].innerHTML = "&#10005;";
      hidden = true;
    }
  });
});
