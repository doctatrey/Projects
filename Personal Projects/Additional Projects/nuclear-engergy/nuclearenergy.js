function compareEnergy() {
    // Parse input values
    const nuclearInstall = parseFloat(document.getElementById('nuclear-install').value);
    const nuclearMaintenance = parseFloat(document.getElementById('nuclear-maintenance').value);
    const nuclearOutput = parseFloat(document.getElementById('nuclear-output').value);

    const renewableInstall = parseFloat(document.getElementById('renewable-install').value);
    const renewableMaintenance = parseFloat(document.getElementById('renewable-maintenance').value);
    const renewableOutput = parseFloat(document.getElementById('renewable-output').value);

    // Check for NaN values
    if (isNaN(nuclearInstall) || isNaN(nuclearMaintenance) || isNaN(nuclearOutput) ||
        isNaN(renewableInstall) || isNaN(renewableMaintenance) || isNaN(renewableOutput)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Assume a 30-year lifespan for both
    const lifespan = 30;

    // Calculate total costs and outputs
    const totalNuclearCost = nuclearInstall + (nuclearMaintenance * lifespan);
    const totalNuclearOutput = nuclearOutput * lifespan;
    const costPerKWhNuclear = totalNuclearCost / totalNuclearOutput;

    const totalRenewableCost = renewableInstall + (renewableMaintenance * lifespan);
    const totalRenewableOutput = renewableOutput * lifespan;
    const costPerKWhRenewable = totalRenewableCost / totalRenewableOutput;

    // Display results
    const results = `
        <h2>Results</h2>
        <p><strong>Nuclear Energy:</strong></p>
        <p>Total Cost: $${totalNuclearCost.toFixed(2)}</p>
        <p>Total Energy Output: ${totalNuclearOutput.toFixed(2)} kWh</p>
        <p>Cost per kWh: $${costPerKWhNuclear.toFixed(4)}</p>
        <p><strong>Renewable Energy:</strong></p>
        <p>Total Cost: $${totalRenewableCost.toFixed(2)}</p>
        <p>Total Energy Output: ${totalRenewableOutput.toFixed(2)} kWh</p>
        <p>Cost per kWh: $${costPerKWhRenewable.toFixed(4)}</p>
    `;
    document.getElementById('results').innerHTML = results;

    // Log data to console for debugging
    console.log("Cost per kWh (Nuclear):", costPerKWhNuclear);
    console.log("Cost per kWh (Renewable):", costPerKWhRenewable);

    // Create chart
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nuclear Energy', 'Renewable Energy'],
            datasets: [{
                label: 'Cost per kWh ($)',
                data: [costPerKWhNuclear, costPerKWhRenewable],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
