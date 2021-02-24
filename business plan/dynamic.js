alert("Welcome to Business Plan Website");

prompt("are you a start up");

//strict user input till email address is inserted
var emailAddress="";
while 
(emailAddress=="" || emailAddress==null){
emailAddress=prompt("Please insert your email");
console.log(emailAddress);
}

// console answers about: more information about business plan 
var  navBar=prompt("would you prefer further information about Business plan");
if (navBar.toLowerCase()=="yes")
{console.log("1");
}
else
{console.log("0")};

confirm ("we encourage you to visit the links in the navigation bar");

typeofBusinessPlan=prompt('what type of Business Plan you intrested in?');
for (var i=1;i<=4;i++){
    document.write("<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thinklions.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F05%2Ftypes-of-business-plans7.png&f=1&nofb=1'+ i+/>");
}

/*<input type="text" name="fullName" onkeypress="return (event.charCode > 64 && 
event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" ></input>*/

/*var typeofBusinessPlan=prompt('what type of Business Plan you intrested in?');
if (typeofBusinessPlan=='I dont no'){ 
for (var i=1;i<=2;i++){
document.write("<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thinklions.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F05%2Ftypes-of-business-plans7.png&f=1&nofb=1'+ i+/>");

}
}
if (typeofBusinessPlan='the one page business plan'){
    document.write("<img src='https://images.template.net/wp-content/uploads/2015/05/one-page-business-plan-template-PDF.jpg'+'the one page business plan template'+/>");

}
if (typeofBusinessPlan='the mini business plan'){
    document.write("<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.documentsandpdfs.com%2Fwp-content%2Fuploads%2F2016%2F11%2Ffree-basic-Small-Business-Plan-Template.png&f=1&nofb'+'the mini business plan template'+/>");
}
else if (typeofBusinessPlan='comprehensive business plan'){
    document.write("<img src='https://image.slidesharecdn.com/5-comprehensivestrategicbusinessplantemplate-090519191452-phpapp01/95/5-comprehensive-strategic-business-plan-template-7-728.jpg?cb=1242760523'/>");
}*/