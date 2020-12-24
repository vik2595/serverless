// Function to submit Contact Form data to API
function submitToAPI(e) {
	e.preventDefault();
	var randNum = (Math.random()*100)+1
    var randID = Math.round(randNum).toString();
    
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var desc = document.getElementById("message").value;

// Basic contact form Verification
	if (name=="" || email=="" || desc=="")
	 {
		 alert("Please Fill All Required Field");
		 return false;
		 
	 }
	 
	 nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1}[A-Z]{1}[a-z]{2,20}/;
	 if(!nameRE.test(name)) {
		 alert("Entered name is not in valid format!! Try 'Jeff Bezos' ;)");
			 return false;
	 }
	 
	 emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 if(!emailRE.test(email)) {
		 alert("Email Address entered, is not valid");
			 return false;
	 }

	var data = {
		id: randID,
	   	name : name,
	   	email : email,
	   	desc : desc
	 };
	 console.log(data);

	 var xmlhttp = new XMLHttpRequest();
//Copy your API GATEWAY URL IN LINE 41
	 xmlhttp.open("OPTIONS", "<COPY YOUR API GATEWAY URL>");
	 xmlhttp.setRequestHeader("Content-Type", "application/json");
	 xmlhttp.send(JSON.stringify(data));
	 xmlhttp.onreadystatechange = () => {
		 if (xmlhttp.readyState === 4) {
			 var response = JSON.parse(xmlhttp.responseText);
			 if (xmlhttp.status === 200) {
				 console.log('successful');
				 document.getElementById("contact").innerHTML = "<h3>Thank you for your message<br>our team will get back to you soon!!</h3>";
				 window.location.href = "#index";
			 } else {
				 console.log('failed');
			 }
		 }
	 }
 } 