const seats = document.querySelectorAll(".seats");
const selectedSeats = [];
const notLimit = 4;
const EverySitearDam = 550;
let TotalP = 0;



function Next(){
    

    const SuccessFullSection=document.getElementById('success');
    SuccessFullSection.classList.remove('hidden')
}

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function () {
        if (seat.classList.contains('bg-green-500')) {
            seat.classList.remove('bg-green-500');

            const availableSeatElement = document.getElementById('sitdown');
            let availableSeat = parseInt(availableSeatElement.innerText);
            availableSeat++;
            availableSeatElement.innerText = availableSeat;


            const seatName = seat.innerText;
            const selectedIndex = selectedSeats.indexOf(seatName);
            if (selectedIndex !== -1) {
                selectedSeats.splice(selectedIndex, 1);
            }

            TotalP -= EverySitearDam;
        } else {
            if (selectedSeats.length >= notLimit) {
                alert(`You can only select  ${notLimit} seats.`);
                return;
            }

            seat.classList.add('bg-green-500');

            const availableSeatElement = document.getElementById('sitdown');
            let availableSeat = parseInt(availableSeatElement.innerText);
            if (availableSeat > 0) {
                availableSeat--;
                availableSeatElement.innerText = availableSeat;

                const seatName = seat.innerText;
                selectedSeats.push(seatName);
                TotalP += EverySitearDam;

                let grandTotalElement = document.getElementById('grand-total');
                let grandTotalText = grandTotalElement.innerText.trim();
                let newGrandTotal = TotalP;
                grandTotalElement.innerText = `BDT ${newGrandTotal}`;

            }
        }


        const selectCount = document.getElementById('seatNumberCount')
        selectCount.innerText = selectedSeats.length;

        const seatTypes = seat.innerText
        const seatContainer = document.getElementById('seat')
        const p = document.createElement("p")
        p.innerText = seatTypes;
        seatContainer.appendChild(p)

        const economy = "AC"
        const economyContainer = document.getElementById('economy')
        const p2 = document.createElement("p")
        p2.innerText = economy;
        economyContainer.appendChild(p2)

        const priceContainer = document.getElementById('price');
        const p3 = document.createElement("p");
        p3.innerText = EverySitearDam;
        priceContainer.appendChild(p3)

        const totalContainer = document.getElementById('total');
        totalContainer.innerText = `BDT ${TotalP}`;


    });
}




