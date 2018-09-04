function sortTable() {
    var table = document.getElementById('myTable');
    var switching = true;
    var shouldSwitch;

    // 从前往后找到一对相邻的逆序对，并将他们调换，知道找不出这样的逆序对
    while(switching) {
        switching = false;
        var rows = table.getElementsByTagName('tr');

        for(var i = 1; i < rows.length - 1; i ++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[0];
            y = rows[i + 1].getElementsByTagName('td')[0];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if(shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}