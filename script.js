let btnEl = document.getElementById("btn");
let inputEl = document.getElementById("dob")
let resultEl = document.getElementById("result")

function calculateAge(){
    let birthdayValue = inputEl.value;
   if(birthdayValue === ""){
    alert("please enter your birthday")
   }else{
    let currentDate = new Date();
    let birthday = new Date(birthdayValue);
    
    let age = currentDate.getFullYear() - birthday.getFullYear();
    let month = currentDate.getMonth() - birthday.getMonth();
    if(month < 0 || (month === 0 && currentDate.getDate() < birthday.getDate())) {
        age--
    }
    resultEl.innerText = `your age is ${age} ${age > 0 ? "years" : "year"} old`
   }

    


    return age;
}


btnEl.addEventListener("click", calculateAge)