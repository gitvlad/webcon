<script>
(function () {
  var fieldName = "AttText9"; // <-- wpisz tutaj technical name pola ukrytego

  function setActiveTab() {
    // znajdź aktywną zakładkę <li class="tab active">
    var activeLi = document.querySelector('li.tab.active div[aria-controls]');
    if (!activeLi) return;

    var tabId = activeLi.getAttribute('aria-controls'); // pobieramy ID z aria-controls
    if (tabId) {
      webcon.fields.setValue(fieldName, tabId); // zapisujemy do pola ukrytego
    }
  }

  // przy starcie formularza
  setActiveTab();

  // przy kliknięciu w zakładkę
  document.addEventListener('click', function (e) {
    if (e.target.closest('li.tab')) {
      setTimeout(setActiveTab, 50); // małe opóźnienie na zmianę klasy active
    }
  });
})();
</script>
