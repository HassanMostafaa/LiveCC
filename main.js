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



 function myFunc1() {
     h11.innerHTML = input1.value
 }

 function myFunc2() {
     h12.innerHTML = input2.value
 }

 function myFunc3() {
     h13.innerHTML = input3.value
 }

 function myFunc4() {
     h14.innerHTML = input4.value
 }

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

     validation();
     dateValidation();


 })


 function validation() {
     if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input1.value.length < 4 || input2.value.length < 4 || input3.value.length < 4 || input4.value.length < 4) {
         alert("Please Fill in all The Forms");
     }
     if (isNaN(input1.value) || isNaN(input2.value) || isNaN(input3.value) || isNaN(input4.value)) {
         alert("CC Number Must be Integer Numbers");
     }
 }

 function dateValidation() {
     if (year.value.length > 2 || month.value.length > 2 || month.value > 12 || year.value > 20 || year.value == "" || month.value == "") {
         alert("Please Fill In the right Date Info")
     }
 }