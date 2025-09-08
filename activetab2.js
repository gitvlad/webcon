<script>
(function () {
  var fieldName = "AttText9"; // <-- tu wpisz swój technical name

  function setActiveTab() {
    var active = document.querySelector('.tabs li.active a, .tabs a.active');
    if (active) {
      var id = active.getAttribute('href');
      if (id && id.startsWith('#')) {
        id = id.substring(1); // usunięcie #
      }
      webcon.fields.setValue(fieldName, id || active.innerText.trim());
    }
  }

  // przy starcie
  setActiveTab();

  // przy kliknięciu w zakładkę
  document.addEventListener('click', function (e) {
    if (e.target.closest('.tabs li, .tabs a')) {
      setTimeout(setActiveTab, 50);
    }
  });
})();
</script>
