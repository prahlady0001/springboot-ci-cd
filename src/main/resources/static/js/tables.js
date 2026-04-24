function filterTable() {

    let input = document.getElementById("searchBox").value.toLowerCase();
    let table = document.getElementById("dataTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let rowText = rows[i].innerText.toLowerCase();

        if (rowText.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Sort Table
function sortTable(n) {

    let table = document.getElementById("dataTable");
    let rows = Array.from(table.rows).slice(1);

    let asc = table.getAttribute("data-sort") !== "asc";

    rows.sort((a, b) => {

        let A = a.cells[n].innerText;
        let B = b.cells[n].innerText;

        return asc ? A.localeCompare(B) : B.localeCompare(A);
    });

    rows.forEach(row => table.appendChild(row));

    table.setAttribute("data-sort", asc ? "asc" : "desc");
}