function demoExternalalert() {
    alert("Internal Alert")
  }

 function demoExternalconfirm() {
    if (confirm("Are you sure...")) {
        alert("YESSS");
    }
    else{
        alert("NOOO");
    }
 }
 function demoExternalprompt() {
    var fName=prompt("Enter Firstname here...");
    var lname=prompt("Enter lastname here...");
    alert(fName+ "" +lName)
 }