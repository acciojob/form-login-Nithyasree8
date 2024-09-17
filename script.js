function getFormvalue() {
    //Write your code here
	const from =doccument.getElementById("from1";
	const fromData =new FromData(from);
	const firstName =fromData.get("fname");
	const lastName =fromData.get("lname");
	alert(firstName + "" +lastName)
	

}
