function searchUser() {

    let input = document.getElementById("search").value.toLowerCase();
    let table = document.getElementById("userTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let name = rows[i].getElementsByTagName("td")[1];

        if (name) {
            let text = name.textContent.toLowerCase();

            if (text.includes(input)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}