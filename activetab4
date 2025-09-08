<script>
document.addEventListener("DOMContentLoaded", function () {
    console.log("[DEBUG] Skrypt uruchomiony");

    // 🔹 Technical name pola tekstowego, gdzie zapisujemy aktywną zakładkę
    var fieldName = "AttText9";

    // 🔹 Sprawdzenie trybu formularza
    console.log("[DEBUG] Tryb formularza:", WEBCON.FormMode);

    if (WEBCON.FormMode === "Edit" || WEBCON.FormMode === "New") {
        console.log("[DEBUG] Formularz jest w edycji, uruchamiam obsługę zakładek");

        function updateActiveTab() {
            console.log("[DEBUG] Szukam aktywnej zakładki...");
            var activeTab = document.querySelector(".tab.active, .tab--active");

            if (activeTab) {
                var tabId = activeTab.getAttribute("aria-controls");
                var tabName = activeTab.getAttribute("data-name");
                console.log("[DEBUG] Znalazłem aktywną zakładkę:", tabId, tabName);

                if (typeof webcon !== "undefined") {
                    webcon.fields.setValue(fieldName, tabId || tabName || "BRAK");
                    console.log("[DEBUG] Zapisano do pola", fieldName, "wartość:", tabId || tabName);
                } else {
                    console.error("[DEBUG] API webcon nie jest dostępne!");
                }
            } else {
                console.warn("[DEBUG] Nie znaleziono aktywnej zakładki!");
            }
        }

        // 🔹 Uruchomienie przy starcie
        updateActiveTab();

        // 🔹 Reagowanie na kliknięcia w zakładki
        document.querySelectorAll(".tab").forEach(function (tab) {
            tab.addEventListener("click", function () {
                console.log("[DEBUG] Kliknięto zakładkę");
                setTimeout(updateActiveTab, 200); // małe opóźnienie żeby zdążył się ustawić active
            });
        });
    } else {
        console.log("[DEBUG] Formularz nie jest w edycji (tryb:", WEBCON.FormMode, "), skrypt nie działa");
    }
});
</script>
