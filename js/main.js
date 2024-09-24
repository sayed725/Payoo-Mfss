document.getElementById('donate-now').addEventListener('click',function(){
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation')
    const myDonation = GetInputFieldValueById('my-donation')
    console.log(myBalance,donation,myDonation)


if (isNaN(myDonation) || (myDonation <= 0) || myDonation > myBalance || myDonation ===''){
    alert('Invalid Amount')
    return
}

const totalDonation = donation + myDonation
document.getElementById('donation').innerText = totalDonation.toFixed(2);

const myNewBalance = myBalance - myDonation
document.getElementById('my-balance').innerText = myNewBalance.toFixed(2); 

document.getElementById('my_modal_1').showModal();


const historySection = document.createElement('div');
historySection.className = 'text-start px-10 py-6 border-2 border-slate-200 rounded-lg mt-5'
historySection.innerHTML =`

<h5 class="title font-bold mb-4">${myDonation} Taka is Donated for famine-2024 at Feni, Bangladesh</h5>
 <p class="normal bg-slate-100">${new Date().toDateString()} ${new Date().toTimeString()} </p>
`

document.getElementById('history-section').appendChild(historySection);



})