// $('#register').click(function(){
// 	//console.log('hey');
        
//          //prevent a form from submitting if no email
//           if((document.getElementById("firstname").value == "")){
//             document.getElementById("error_firstname").innerHTML = "Provide your firstname";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("lastname").value == "")){
//             document.getElementById("error_lastname").innerHTML = "Provide your lastname";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("email").value == "")){
//             document.getElementById("email_error").innerHTML = "provide us your email";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("password").value == "" )){
//             document.getElementById("password_error").innerHTML = "password field can't be empty";
//             //to STOP the form from submiting
//             return false;
//           }
//           // checks if password matches
//           if((document.getElementById("password-conf").value !== document.getElementById("password").value)){
//             document.getElementById("passwordConf_error").innerHTML = "password does not match";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("gender").value == "")){
//             document.getElementById("gender_error").innerHTML = "Select a gender";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("dob").value == "")){
//             document.getElementById("dob_error").innerHTML = "select a date";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("state").value == "")){
//             document.getElementById("state_error").innerHTML = "select a state";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("Community").value == "")){
//             document.getElementById("Community_error").innerHTML = "select community";
//             //to STOP the form from submiting
//             return false;
//           }
//           if((document.getElementById("tradeInterest").value == "")){
//             document.getElementById("tradeInterest_error").innerHTML = "select trade";
//             //to STOP the form from submiting
//             return false;
//           }
//           else{
//             //reset and allow the form to submit
//             document.getElementById("errorMessage").innerHTML = "";
//             return true;
//           }
//  // });