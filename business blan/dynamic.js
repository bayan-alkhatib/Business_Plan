alert("Welcome to Business Plan Website");

prompt("are you a start up");

var emailAddress="";

//strict user input till email address is inserted
while (emailAddress=="" || emailAddress==null){
emailAddress=prompt("Please insert your email");
console.log(emailAddress);}

var  navBar=prompt("would you prefer further information about Business plan");

if (navBar.toLowerCase()=="yes"){console.log("1")}
else{console.log("0")};

confirm ("we encourage you to visit the links in the navigation bar");

/*<input type="text" name="fullName" onkeypress="return (event.charCode > 64 && 
event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" ></input>*/
document.write("<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.business-ideas-connection.com%2Fimages%2F973xNxBIC_VisualBizPlanSample.png.pagespeed.ic.E9UTVvDmOs.png&f=1&nofb=1'/>")