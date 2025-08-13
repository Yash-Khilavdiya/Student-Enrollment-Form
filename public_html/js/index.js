/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var connectionToken = "90934932|-31949248815861142|90959422";
var dbName = "SCHOOL";
var relName = "STUDENT";
var baseUrl = "http://api.login2explore.com:5577";
var endPointUrl = '/api/iml';
var irlUrl = '/api/irl';
var imlUrl = "/api/iml";    

//var saveBtn = $("#save_button");
//submitBtn.addEventListener("click", saveRecord,false);

//var updateBtn = $("#update_button");
//updateBtn.addEventListener("click", updateRecord,false);

let saveBtn = document.getElementById('save_button');
let updateBtn = document.getElementById('update_button');
let resetBtn = document.getElementById('reset_button');
saveBtn.addEventListener("click", saveRecord,false);
updateBtn.addEventListener("click", updateRecord,false);

var studentRollNoInput = $("#rollNo").focus();

function getStudent(){
    var rollNo = $("#rollNo").val();
    console.log(rollNo);
    var jsonObj = {
                    "Student Roll No" : rollNo
    };
    console.log(jsonObj);
    var jsonStr = JSON.stringify(jsonObj);
    console.log(jsonStr);
    
    var reqStr = createGET_BY_KEYRequest(connectionToken,dbName,relName,jsonStr);
    console.log(reqStr);
    
    jQuery.ajaxSetup({async: false});
    var response = executeCommandAtGivenBaseUrl(reqStr,baseUrl,irlUrl);
    console.log('response  :', response);
    jQuery.ajaxSetup({async: true});
    
   if(response.status === 200){
       saveBtn.disabled = true;
       updateBtn.disabled = false;
       resetBtn.disabled = false;
       
       var jsonData = JSON.parse(response.data).record;
        localStorage.setItem("rec_no",JSON.parse(response.data).rec_no);
        
        $("#rollNo").prop('disabled', true);
        $("#fullName").val(jsonData["FullName"]);
        console.log(jsonData["FullName"]);
        $("#class").val(jsonData["Class"]);
        $("#birthDate").val(jsonData["Birth Date"]);
        $("#address").val(jsonData["Address"]);
        $("#enrollDate").val(jsonData["Enroll Date"]);
    }
    else{
       saveBtn.disabled = false;
       updateBtn.disabled = true;
       resetBtn.disabled = false;
       $("#fullName").focus();
    }
    
}

function fetchData(){
    var rollNo = $("#rollNo").val();
    console.log(rollNo);
    var fullName = $("#fullName").val();
    console.log(fullName);
    var Class = $("#class").val();
    console.log(Class);
    var birthDate = $("#birthDate").val();
    console.log(birthDate);
    var address = $("#address").val();
    console.log(address);
    var enrollDate = $("#enrollDate").val();
    console.log(enrollDate);
    
    if(rollNo === ""){
        alert("Roll No. is a required Field");
        $("#rollNo").focus();
        return;
    }
    if(fullName === ""){
        alert("Studet Full Name is a required Field");
        $("#fullName").focus();
        return;
    }
    if(Class === ""){
        alert("Class is a required Field");
        $("#class").focus();
       return "";
    }
    if(birthDate === ""){
        alert("Birth Date is a required Field");
        $("#birthDate").focus();
        return "";
    }
    if(address === ""){
        alert("Address is a required Field");
        $("#address").focus();
        return "";
    }
    if(enrollDate === ""){
        alert("Enroll Date is a required Field");
        $("#enrollDate").focus();
        return "";
    }
    
    var jsonObj = {
                "Student Roll No" : rollNo,
                "FullName" : fullName,
                "Class" : Class,
                "Birth Date" : birthDate,
                "Address" : address,
                "Enroll Date" : enrollDate
    };
    console.log(jsonObj);
    return jsonObj;
};

function saveRecord(event){
    event.preventDefault();
    var jsonObj = fetchData();
    if(jsonObj === "" || jsonObj === null){
        return;
    }
    var jsonStr = JSON.stringify(jsonObj);
    console.log(jsonObj);
    
    var reqStr  =  createPUTRequest(connectionToken,jsonStr,dbName,relName);
    console.log(reqStr);
    jQuery.ajaxSetup({async: false});
    var response = executeCommandAtGivenBaseUrl(reqStr,baseUrl,endPointUrl);
    console.log(response);
    jQuery.ajaxSetup({async: true});
    
    resetForm();
}

function updateRecord(event){
    event.preventDefault();
     var jsonObj = fetchData();
    var jsonStr = JSON.stringify(jsonObj);
    console.log(jsonObj);
    
    var reqStr  =  createUPDATERecordRequest(connectionToken,jsonStr,dbName,relName,localStorage.getItem("rec_no"));
    console.log(reqStr);
    jQuery.ajaxSetup({async: false});
    var response = executeCommandAtGivenBaseUrl(reqStr,baseUrl,endPointUrl);
    console.log(response);
    jQuery.ajaxSetup({async: true});
    
    resetForm();
}

function resetForm(){
    $("#rollNo").prop('disabled', false);
    saveBtn.disabled = true;
    updateBtn.disabled = true;
    resetBtn.disabled = true;
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollDate").val("");
    $("#rollNo").focus();
}


