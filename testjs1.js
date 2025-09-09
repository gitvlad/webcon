// Custom JS w WEBCON BPS 2025
$(document).ready(function () {
    // znajdź kontrolkę formularza po jej ID systemowym
    var nameField = formControls.get("TXT_Name");
    var resultField = formControls.get("TXT_Result");

    if (nameField && resultField) {
        // podpięcie eventu "on change"
        nameField.onChange(function (ctrl) {
            var value = ctrl.getValue();
            resultField.setValue("You entered: " + value);
        });
    } else {
        console.warn("Nie znaleziono pól TXT_Name albo TXT_Result");
    }
});
