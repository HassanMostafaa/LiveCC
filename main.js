 var h11 = document.querySelector(".h11");
 var h12 = document.querySelector(".h12");
 var h13 = document.querySelector(".h13");
 var h14 = document.querySelector(".h14");
 var input1 = document.getElementById('input1');
 var input2 = document.getElementById('input2');
 var input3 = document.getElementById('input3');
 var input4 = document.getElementById('input4');
 var dateY = document.querySelector('.dateNumYear'); //output da el span
 var dateM = document.querySelector('.dateNumMonth'); //output da el span
 var month = document.getElementById('month'); //da el input
 var year = document.getElementById('year'); //da el input



 //  function myFunc1() {

 //  }

 //  function myFunc2() {


 //  }

 //  function myFunc3() {

 //  }

 //  function myFunc4() {
 //      h14.innerHTML = input4.value;
 //  }

 function enterYear() {
     //  if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
     dateY.innerHTML = year.value;

 }

 function enterMonth() {
     //  if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
     dateM.innerHTML = month.value;

 }

 var submitBTN = document.querySelector('.submitBTN');
 var enterBTN = document.querySelector(".enterBTN");
 submitBTN.addEventListener('click', () => {
     if (validation() === true && dateValidation() === true)
         //  validation();
         //  dateValidation();
         alert("SENT")

 })


 function validation() {
     if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input1.value.length < 4 || input2.value.length < 4 || input3.value.length < 4 || input4.value.length < 4) {
         alert("Please Fill in all The Forms");
     }
     if (isNaN(input1.value) || isNaN(input2.value) || isNaN(input3.value) || isNaN(input4.value)) {
         alert("CC Number Must be Integer Numbers");
     } else {
         return (true)
     }
 }

 function dateValidation() {
     if (year.value.length > 2 || month.value.length > 2 || month.value > 12 || year.value > 20 || year.value == "" || month.value == "") {
         alert("Please Fill In the right Date Info")
     } else {
         return (true)
     }
 }

 //---------------------------------------Next SLot-----------

 input1.oninput = function () {
     h11.textContent = input1.value;
     if (input1.value.length == 4) {
         input2.focus()
     } else {
         console.log("works");
     }
 };

 input2.oninput = function () {
     h12.innerHTML = input2.value;
     if (input2.value.length == 4) {
         input3.focus();
     };
 };

 input3.oninput = function () {
     h13.innerHTML = input3.value;
     if (input3.value.length == 4) {
         input4.focus();
     };
 };
 input4.oninput = function () {
     h14.innerHTML = input4.value;
     if (input4.value.length == 4) {
         month.focus();
     };
 };
 month.oninput = function () {
     dateM.innerHTML = month.value;
     if (month.value.length == 2) {
         year.focus();
     };
 }