// Dinesh_1-clean: tiny, optional script.
// It only sets the footer year. If this file fails to load,
// every section still renders, because no section depends on it.
(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
