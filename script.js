var PlayerData = [
    {
        name: "Virat",
        team: "india",
        role: "batsman",
        battingStyle: "Right-handed bat", id: 1
        
    },
    {
        name: "Rahul",
        team: "india",
        role: "batsman",
        battingStyle: "Right-handed bat",id: 2
    },
];

function displayTableData() {
    var html = "<table border ='1|1' class='table'>";

    setTimeout(() => {
        html += "<thead>";
        html += "<tr>";
        html += "<td>" + 'S.no' + "</td>";
        html += "<td>" + 'PlayerName' + "</td>";
        html += "<td>" + 'Team' + "</td>";
        html += "<td>" + 'Role' + "</td>";
        html += "<td>" + 'BattingSytle' + "</td>";
        html += "<td>" + 'Action' + "</td>";
        html += "</tr>";
        html += "</thead>";
        for (var i = 0; i < PlayerData.length; i++) {
            var sno = i + 1;
            html += "<tr>";
            html += "<td>" + sno + "</td>";
            html += "<td>" + PlayerData[i].name + "</td>";
            html += "<td>" + PlayerData[i].team + "</td>";
            html += "<td>" + PlayerData[i].role + "</td>";
            html += "<td>" + PlayerData[i].battingStyle + "</td>";
            html += "<td>" + `<button type="button" class="btn btn-danger" onclick='removeItems(${PlayerData[i].id})'>remove </button>` + "</td>";

            html += "</tr>";

        }
        html += "</table>";
        document.getElementById("table").innerHTML = html
    }, 200);
}
displayTableData();



function addOnClick() {
    var name = document.getElementById('PlayerName').value;
    var team = document.getElementById('Team').value;
    var role = document.getElementById('Role').value;
    var battingStyle = document.getElementById('BattingStyle').value;
    

    if (name && team && role && battingStyle) {
        let id = PlayerData.length + 1;
        PlayerData.push({ name: name, team: team, role: role, battingStyle: battingStyle, id: id })
        displayTableData();
        clearItems();
    }

}

function clearItems() {

    document.getElementById('PlayerName').value = "";
    document.getElementById('Team').value = "";
    document.getElementById('Role').value = "";
    document.getElementById('BattingStyle').value = "";

}
function removeItems(rec) {
    console.log(rec)
    var filt = PlayerData.filter((a, i) => {
        if (rec == a.id) {
            PlayerData.splice(i, 1);
            displayTableData();
        }
    })
    console.log(PlayerData);
}