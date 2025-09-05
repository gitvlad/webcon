<!-- CSS jstree -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.12/themes/default/style.min.css" />

<!-- JS jQuery i jstree -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.12/jstree.min.js"></script>

<!-- Kontener drzewa -->
<div id="tree-container" style="margin-top:10px;"></div>

<script>
wec.bps.ready(function() {
    // Dane drzewa (można łatwo zmienić lub pobrać z bazy)
    const treeData = [
        { "id": "1", "parent": "#", "text": "Dział IT" },
        { "id": "2", "parent": "1", "text": "Programiści" },
        { "id": "3", "parent": "1", "text": "Administratorzy" },
        { "id": "4", "parent": "#", "text": "Dział HR" }
    ];

    // Inicjalizacja drzewa
    $('#tree-container').jstree({
        'core': {
            'data': treeData,
            'themes': { 'dots': true, 'icons': true }
        },
        'plugins': ["wholerow"] // ułatwia kliknięcia
    });

    // Obsługa kliknięcia w węzeł
    $('#tree-container').on("select_node.jstree", function (e, data) {
        const nodeId = data.node.id;
        const nodeText = data.node.text;

        console.log("Wybrano węzeł:", nodeId, nodeText);

        // Zapis do pola formularza WEBCON (jeżeli istnieje)
        if (typeof FormFields !== 'undefined' && FormFields["TREE_SELECTION"]) {
            FormFields["TREE_SELECTION"].SetValue(nodeId);
        }
    });
});
</script>
