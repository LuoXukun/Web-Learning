function sortByAge() {
    var table = document.getElementsByTagName('table')[0];
    var rows = table.getElementsByTagName('tr');
    var switching = true;
    var shouldSwitch;

    while(switching) {
        switching = false;
        for(var i = 1; i < rows.length - 1; i ++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName('td')[1];
            var y = rows[i+1].getElementsByTagName('td')[1];
            if(parseInt(x.innerText) > parseInt(y.innerText)) {
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