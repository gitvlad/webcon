<script>
  $(document).ready(function () {
    // Funkcja zapisująca aktywną zakładkę do pola ActiveTab
    function setActiveTab() {
      var activeTab = $(".tabs li.active").text().trim();
      if (activeTab) {
        WEBCON.Form.setFieldValue("ActiveTab", activeTab);
      }
    }

    // Wywołanie przy starcie formularza
    setActiveTab();

    // Obsługa kliknięcia w zakładkę
    $(document).on("click", ".tabs li", function () {
      setTimeout(setActiveTab, 100); // małe opóźnienie, żeby zdążył się przełączyć "active"
    });
  });
</script>
