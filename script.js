
//global variables

let TimeID;
let inputColumn;
let saveBtnElement;

//TODO: Adding code to display the current date in the header of the page.
        //  attaching  date & time to header
const currentDateTime = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = currentDateTime;

//for 24 hour format
const currentHour = moment().format('H');

// time variables
const businessHours = ["8.00 AM", "9.00 AM", "10.00 AM", "11.00 AM", "12.00 PM", "1.00 PM", "2.00 PM", "3.00 PM", "4.00 PM", "5.00 PM", "6.00 PM", "11.00 PM"];
const displayFormat = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23];


//adding Time Blocks 
for (i = 0; i < businessHours.length; i++) {
  let TimeID = $("<p>");
  TimeID.addClass("hour row");
  TimeID.text(businessHours[i]);
  $(".float-left").append(TimeID);
}

// Creating columns, label hour, class hour blocks and schedule block and appending all columns to rows
for (i = 0; i < businessHours.length; i++) {
  let inputColumn = $(`<input type='text' data-hour='${displayFormat[i]}' class='textarea row ${displayFormat[i]}' size='90'placeholder=''/>`);
  $(".float-none").append(inputColumn);

  if (displayFormat[i] == currentHour) {
      $(inputColumn).css('background', '#ccffee');
  } else if (displayFormat[i] > currentHour) {
      $(inputColumn).css('background', '#42f55a');
  }
}

//getting Data in the local storage to check with ChromeDevTools
let userInput8 = localStorage.getItem("key8");
$(".textarea.row.8").val(userInput8)

let userInput9 = localStorage.getItem("key9");
$(".textarea.row.9").val(userInput9)

let userInput10 = localStorage.getItem("key10");
$(".textarea.row.10").val( userInput10)

let  userInput11 = localStorage.getItem("key11");
$(".textarea.row.11").val( userInput11)

let  userInput12 = localStorage.getItem("key12");
$(".textarea.row.12").val( userInput12)

let userKey13 = localStorage.getItem("key13");
$(".textarea.row.13").val(userKey13)

let  userInput14  = localStorage.getItem("key14");
$(".textarea.row.14").val( userInput14 )

let  userInput15  = localStorage.getItem("key15");
$(".textarea.row.15").val( userInput15 )

let  userInput16= localStorage.getItem("key16");
$(".textarea.row.16").val( userInput16)

let  userInput17 = localStorage.getItem("key17");
$(".textarea.row.17").val( userInput17)

let  userInput18 = localStorage.getItem("key18");
$(".textarea.row.18").val( userInput18)

//to check current available slot
let  userInput23 = localStorage.getItem("key23");
$(".textarea.row.23").val( userInput23)

//The Save Button 
for (i = 0; i < businessHours.length; i++) {
  let saveBtnElement = $("<button class='saveBtn saveBtn:hover'/>");
  saveBtnElement.text("Save");
  $(".float-right").append(saveBtnElement);

};

//Storing to local storage 
$("button").click(function () {
  function storeValue(row, key) {
      let userInput = $(row).val(); 
      localStorage.setItem(key, userInput);
  }
  storeValue(".textarea.row.8", "key8")
  storeValue(".textarea.row.9", "key9");
  storeValue(".textarea.row.10", "key10");
  storeValue(".textarea.row.11", "key11");
  storeValue(".textarea.row.12", "key12");
  storeValue(".textarea.row.13", "key13");
  storeValue(".textarea.row.14", "key14");
  storeValue(".textarea.row.15", "key15");
  storeValue(".textarea.row.16", "key16");
  storeValue(".textarea.row.17", "key17");
  storeValue(".textarea.row.23", "key23");
});