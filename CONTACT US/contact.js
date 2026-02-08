//Local Storage
    $(document).ready(function () {
        // Load saved data from localStorage and populate form fields
        if (localStorage.getItem("Fname")) {
            $("#Fname").val(localStorage.getItem("Fname"));
        }
        if (localStorage.getItem("Lname")) {
            $("#Lname").val(localStorage.getItem("Lname"));
        }
        if (localStorage.getItem("phone")) {
            $("#phone").val(localStorage.getItem("phone"));
        }
        if (localStorage.getItem("email")) {
            $("#email").val(localStorage.getItem("email"));
        }
        if (localStorage.getItem("message")) {
            $("#message").val(localStorage.getItem("message"));
        }

        // Save form data to localStorage on form submit
        $("#joinForm").submit(function (event) {
            event.preventDefault();
            localStorage.setItem("First name", $("#Fname").val());
            localStorage.setItem("Last name", $("#Lname").val());
            localStorage.setItem("Phone", $("#phone").val());
            localStorage.setItem("Email", $("#email").val());
            localStorage.setItem("Message", $("#message").val());
            var form = event.target;
    if (form.checkValidity()) {
        alert('Thank you for joining our GlobalEat family! \nWe will contact you soon!');
        form.reset(); 
    } else {
        alert('Please fill out the form correctly.');
    }            });
    });

    
 //Session Storage
function clickCount(){
  if(sessionStorage.clickcount){
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  }
  else{
    sessionStorage.clickcount =1;
  }
}

