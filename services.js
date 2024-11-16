document.getElementById('addServiceBtn').addEventListener('click', function() {
    var serviceName = document.getElementById('newService').value.trim();
    var servicePrice = document.getElementById('newPrice').value.trim();
    
    // Check if both the service name and price are entered
    if (serviceName === '' || servicePrice === '') {
        document.getElementById('error-message').style.display = 'block'; // Display error message
    } else {
        // Hide the error message if inputs are valid
        document.getElementById('error-message').style.display = 'none';
        
        var tableBody = document.getElementById('services-list');
        var newRow = document.createElement('tr');
        
        // Create and add the new service name cell
        var serviceCell = document.createElement('td');
        serviceCell.textContent = serviceName;
        newRow.appendChild(serviceCell);
        
        // Create and add the new price cell
        var priceCell = document.createElement('td');
        priceCell.textContent = servicePrice;
        newRow.appendChild(priceCell);
        
        // Append the new row to the table body
        tableBody.appendChild(newRow);
        
        // Clear the input fields after adding the service
        document.getElementById('newService').value = '';
        document.getElementById('newPrice').value = '';
    }
});

document.getElementById('removeServiceBtn').addEventListener('click', function() {
    var tableBody = document.getElementById('services-list');
    if (tableBody.rows.length > 0) {
        tableBody.deleteRow(tableBody.rows.length - 1);
    }
});
