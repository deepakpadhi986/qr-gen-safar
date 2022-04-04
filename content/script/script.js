load();
function load() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  window.oncontextmenu = function () {
    return false;
  }
  $(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
    }
    else if ((event.ctrlKey && event.keyCode == 85)) {
      return false;
    }
  });
}

//create random token
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

//return random token
var token = function () {
  return rand(); // to make it longer
};
var tokval = (document.getElementById("qr-text").value = token().toUpperCase());

// Time
var today = new Date();
var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
let dattim = document.getElementById("qr-t");
dattim.value = dateTime;
var dateval = document.getElementById("qr-t").value;

//generate qr
function generatehii() {
  //token val for input
  var nameval = document.getElementById("qr-name").value;
  var mobval = document.getElementById("qr-mob").value;
  var vechval = document.getElementById("qr-vech").value;
  var final =
    "Booking ID: " + tokval + " \n" +
    "Booking Time: " + dateval + " \n" +
    "Name: " + nameval + " \n" +
    "Mobile: " + mobval + " \n" +
    "Selected Vehicle: " + vechval + " \n" +
    "FROM SAFAR BOOKING SYSTEM";
  console.log(final);

  var qr;
  (function () {
    qr = new QRious({
      element: document.getElementById("qr-code"),
      foreground: "#08253f",
      background: "#fff",
      size: 150,
      //qr value of input generated token
      value: final,
    });
    ("Hey");
  })();

  document.getElementById("btn_convert").addEventListener("click", function () {
    html2canvas(document.getElementById("qr-code"), {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      anchorTag.download = tokval + ".jpg";
      anchorTag.href = canvas.toDataURL();
      anchorTag.target = "_blank";
      anchorTag.click();
    });
  });
}
