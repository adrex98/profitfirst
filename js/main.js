const btn = document.getElementById('calcular');

btn.addEventListener('click', () => {

    var venta = parseFloat(document.getElementById('venta').value);
    var compras = parseFloat(document.getElementById('compras').value);
    var gastos = parseFloat(document.getElementById('gastos').value);
    var impuestos = parseFloat(document.getElementById('impuestos').value);
    var utilidad_bruta = 0;
    var utilidad_neta = 0;

    //Verificar que todos los campos tienen valores antes de realizar cálculos
    if(isNaN(venta) || isNaN(compras) || isNaN(gastos)) {
        alert('Los campos de Venta, Compras y Gastos deben ser completados!');
    } else {
        utilidad_bruta = venta - compras - gastos;
        document.getElementById('valor-utilidad-bruta').innerHTML = Number(utilidad_bruta.toFixed(2)).toLocaleString('es-ES') + 'Bs.';
    }

    if(isNaN(impuestos)) {
        alert('El campo de Impuestos debe ser completado!');
    } else {
        utilidad_neta = utilidad_bruta - impuestos;
        document.getElementById('valor-utilidad-neta').innerHTML = Number(utilidad_neta.toFixed(2)).toLocaleString('es-ES') + 'Bs.';
    }

});

const saveButton = document.getElementById('save-data');

saveButton.addEventListener('click', () => {

    // Obtén los valores de los inputs
    if(venta.value > 0) {
    const ownerPay = document.getElementById('owner-pay').value;
    const operatingExpenses = document.getElementById('operating-expensas').value;
    const profit = document.getElementById('profit').value;
    const taxes = document.getElementById('taxes').value;
    const profitHold = document.getElementById('profit-hold').value;
    const taxesHold = document.getElementById('taxes-hold').value;
    
// Verifica si los valores son números enteros
if (
    Number.isInteger(Number(ownerPay)) &&
    Number.isInteger(Number(operatingExpenses)) &&
    Number.isInteger(Number(profit)) &&
    Number.isInteger(Number(taxes)) &&
    Number.isInteger(Number(profitHold)) &&
    Number.isInteger(Number(taxesHold))
) {
    // Guarda los valores en el objeto si son enteros
    configData = {
        ownerPay: ownerPay,
        operatingExpenses: operatingExpenses,
        profit: profit,
        taxes: taxes,
        profitHold: profitHold,
        taxesHold: taxesHold
    };
    localStorage.setItem('configData', JSON.stringify(configData));
    // Muestra un mensaje de éxito
    alert('Datos guardados correctamente.');

    document.getElementById('owner-pay').value = "";
    document.getElementById('operating-expensas').value = "";
    document.getElementById('profit').value = "";
    document.getElementById('taxes').value ="";
    document.getElementById('profit-hold').value = "";
    document.getElementById('taxes-hold').value = "";

    // let venta_save = venta.value;
    // let owner_pay_save = venta_save * configData['ownerPay'] / 100;
    // let operating_expensas_save = venta_save * configData['operatingExpenses'] / 100;
    // let profit_save = venta_save * configData['profit'] / 100;
    // let taxes_save = venta_save * configData['taxes'] / 100;
    // let profit_hold_save = venta_save * configData['profitHold'] / 100;
    // let taxes_hold_save = venta_save * configData['taxesHold'] / 100;

    let venta_save = venta.value;
    let owner_pay_save = (venta_save * configData['ownerPay'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let operating_expensas_save = (venta_save * configData['operatingExpenses'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let profit_save = (venta_save * configData['profit'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let taxes_save = (venta_save * configData['taxes'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let profit_hold_save = (venta_save * configData['profitHold'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let taxes_hold_save = (venta_save * configData['taxesHold'] / 100).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});


    //Test
    distrubutionData = {
        name: `Ingreso (100%) ${venta.value}Bs.`,
        children: [
            {name: `Owner Pay (${configData['ownerPay']}%) ${owner_pay_save}`},
            { name: `Operating Expenses (${configData['operatingExpenses']}%) ${operating_expensas_save}Bs.` },
        ]
    }

    var treeData = {
        name: `Ingreso (100%) ${venta.value}Bs.`,
        children: [
          { name: `Owner Pay (${configData['ownerPay']}%) ${owner_pay_save}Bs.`},
          { name: `Operating Expenses (${configData['operatingExpenses']}%) ${operating_expensas_save}Bs.` },
          { name: `Profit (${configData['profit']}%) ${profit_save}Bs.` },
          { name: `Taxes (${configData['taxes']}%) ${taxes_save}Bs.` },
          { name: `Profit HOLD (${configData['profitHold']}%) ${profit_hold_save}Bs.` },
          { name: `Taxes HOLD (${configData['taxesHold']}%) ${taxes_hold_save}Bs.` },
        ],
      }; 

    // A continuación, llamarías a tu función que crea el gráfico de D3,
    // pasándole el objeto treeData recién llenado.
    createTree(treeData);  // Suponiendo que 'createD3Chart' es la función que crea tu gráfico.

    // Mostrar los datos guardados en los elementos span

    document.getElementById('saved-owner-pay').textContent = `${configData['ownerPay']}%`;
    document.getElementById('saved-operating-expensas').textContent = `${configData['operatingExpenses']}%`;
    document.getElementById('saved-profit').textContent = `${configData['profit']}%`;
    document.getElementById('saved-taxes').textContent = `${configData['taxes']}%`;
    document.getElementById('saved-profit-hold').textContent = `${configData['profitHold']}%`;
    document.getElementById('saved-taxes-hold').textContent = `${configData['taxesHold']}%`;
    }
} else {
    // Muestra un mensaje de error si los valores no son enteros
    alert('Por favor, introduce datos en la primera tabla!');
}

    

});

  




