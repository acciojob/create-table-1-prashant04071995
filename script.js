function insert_Row() {
    //Write your code here
  
    // Get the table by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row at the top of the table
    var newRow = table.insertRow(0);

    // Create the first cell in the new row and set its content
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Create the second cell in the new row and set its content
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
