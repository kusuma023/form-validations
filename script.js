function validate(x){
					var name = document.getElementById("name");
					var email = document.getElementById("mail");
					var password = document.getElementById("password");
					var ConfirmPassword = document.getElementById("finalpassword");
					switch(x){
						case "name-error" : if(name.value.length<4){
												document.getElementById(x).innerText = "please enter minimum characters";
												document.getElementById("name").style.border = "2px solid red"; 
												document.getElementById("correct-name").innerHTML =" ";
											}
											else{ 
												document.getElementById(x).innerText = " ";
												document.getElementById("correct-name").innerHTML = `<i class='fa-solid fa-circle-check'></i>`;
												document.getElementById("name").style.border = "2px solid #5bcb5b"; 
											}
											break;
						case "mail-error" : if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
												document.getElementById(x).innerText = "please enter a valid format";
												document.getElementById("mail").style.border = "2px solid red"; 
												document.getElementById("correct-email").innerHTML =" ";
											}
											else{
												document.getElementById(x).innerText = " ";
												document.getElementById("correct-email").innerHTML = `<i class='fa-solid fa-circle-check'></i>`;
												document.getElementById("mail").style.border = "2px solid #5bcb5b"; 
											}
											break;
						case "password-error" : if(password.value.length<6 || !password.value.match(/[@#$%&]/)){
													document.getElementById(x).innerText = "The password should contain atleast 6 characters with a special symbol";
													document.getElementById("password").style.border = "2px solid red"; 
													document.getElementById("correct-password").innerHTML =" ";
												}
												else{
													document.getElementById(x).innerText = " ";
													document.getElementById("correct-password").innerHTML = `<i class='fa-solid fa-circle-check'></i>`;
													document.getElementById("password").style.border = "2px solid #5bcb5b"; 
												}
												break;
						default :   if(password.value != ConfirmPassword.value){
										document.getElementById(x).innerText = "The password is not matched";
										document.getElementById("finalpassword").style.border = "2px solid red"; 
										document.getElementById("matched-pw").innerHTML =" ";
									}
									else{
										document.getElementById(x).innerText = " ";
										document.getElementById("matched-pw").innerHTML = `<i class='fa-solid fa-circle-check'></i>`;
										document.getElementById("finalpassword").style.border = "2px solid #5bcb5b"; 
									}
					}
				}
				function errormsg(x){
					var name = document.getElementById("name");
					var email = document.getElementById("mail");
					var password = document.getElementById("password");
					var ConfirmPassword = document.getElementById("finalpassword");
					switch(x){
						case "name-error" : if(name.value.length==0){
												document.getElementById(x).innerText="This field is required";
												document.getElementById("name").style.border = "2px solid red"; 
											}
											break;
						case "mail-error" : if(email.value.length==0){
												document.getElementById(x).innerText="This field is required";
												document.getElementById("mail").style.border = "2px solid red"; 
											}
											break;
						case "password-error" : if(password.value.length==0){
													document.getElementById(x).innerText="This field is required";
													document.getElementById("password").style.border = "2px solid red";
												}
												break;
						default :   if(ConfirmPassword.value.length==0){
										document.getElementById(x).innerText="This field is required";
										document.getElementById("finalpassword").style.border = "2px solid red";
									}
					}
				}
				function finalcheck(event) {
					if (document.getElementById("name").value === "" || 
						document.getElementById("mail").value === "" ||
						document.getElementById("password").value === "" || 
						document.getElementById("finalpassword").value === "" ||
						!document.querySelector("input[name='agreement']").checked) {
							event.preventDefault();
							document.getElementById("submit-error").innerText = "Please fill out all required fields.";
							return false;
					}
					else{
						document.getElementById("submit-error").innerText = " ";
					}
					return true;
				}
