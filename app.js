// https://www.omnicalculator.com/finance/billable-hours

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const billablevalueRadio = document.getElementById('billablevalueRadio');
const billablerateRadio = document.getElementById('billablerateRadio');
const billabletimeRadio = document.getElementById('billabletimeRadio');

let billablevalue;
let billablerate = v1;
let billabletime = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

billablevalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Billable rate';
  variable2.textContent = 'Billable time';
  billablerate = v1;
  billabletime = v2;
  result.textContent = '';
});

billablerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Billable value';
  variable2.textContent = 'Billable time';
  billablevalue = v1;
  billabletime = v2;
  result.textContent = '';
});

billabletimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Billable value';
  variable2.textContent = 'Billable rate';
  billablevalue = v1;
  billablerate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(billablevalueRadio.checked)
    result.textContent = `Billable value = ${computebillablevalue().toFixed(2)}`;

  else if(billablerateRadio.checked)
    result.textContent = `Billable rate = ${computebillablerate().toFixed(2)}`;

  else if(billabletimeRadio.checked)
    result.textContent = `Billable time = ${computebillabletime().toFixed(2)}`;
})

// calculation

function computebillablevalue() {
  return Number(billablerate.value) * Number(billabletime.value);
}

function computebillablerate() {
  return Number(billablevalue.value) / Number(billabletime.value);
}

function computebillabletime() {
  return Number(billablevalue.value) / Number(billablerate.value);
}