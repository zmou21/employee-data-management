//Employee data management

$(document).ready(function () {

	  var config = {
	    apiKey: "AIzaSyA7O7OhYjfqp8fFHVD1ZiHkg2cUUd9xmU4",
	    authDomain: "employee-data-management-21712.firebaseapp.com",
	    databaseURL: "https://employee-data-management-21712.firebaseio.com",
	    projectId: "employee-data-management-21712",
	    storageBucket: "",
	    messagingSenderId: "22029805889"
	  };
	  
	  firebase.initializeApp(config);

	var database = firebase.database();

	// var employeeRef = database.ref("/employee");

	var employeeName = "";
	var role = "";
	var dateStarted;
	var rate;
	var presentDate = 01022018;
	var monthsWorked;
	var totalBilled;

	database.ref().on("child_added", function(snapshot) {

		console.log(snapshot.val())

		// if (snapshot.child("employeeName").exists() && snapshot.child("role").exists() && snapshot.child("rate").exists()
		// && snapshot.child("monthsWorked").exists() && snapshot.child("monthsWorked").exists()) {

		employeeName = snapshot.val().employeeName;
	    role = snapshot.val().role;
	    rate = parseInt(snapshot.val().rate);
	    monthsWorked = parseInt(snapshot.val().monthsWorked);
	    dateStarted = parseInt(snapshot.val().dateStarted);
	    presentDate = parseInt(snapshot.val().presentDate);
	    totalBilled = rate * monthsWorked;


		$("#employee-table > tbody").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + dateStarted + "</td><td>" 
			+ monthsWorked + "</td><td>" +  rate + "</td><td>" + totalBilled + "</td></tr>");

		// }

	}), function(errorObject) {
	  console.log("The read failed: " + errorObject.code);
	};


		// functionality for when user submits form


	$("#formSubmit").on("click", function() {

		event.preventDefault();

		// $("#my-form")[0].reset();

		if (true) {

			employeeName = $("#employeeForm").val().trim();
			role = $("#roleForm").val().trim();
			dateStarted = $("#startForm").val().trim();
			rate = parseInt($("#rateForm").val().trim());
			monthsWorked = presentDate - dateStarted;
			totalBilled = monthsWorked * rate;

			database.ref().push({
				employeeName: employeeName,
				role: role,
				date: dateStarted,
				rate: rate
			});

			console.log(employeeName);
			console.log(role);
			console.log(rate);

			$("#employeeForm").val("");
			$("#roleForm").val("");
			$("#startForm").val("");
			$("#rateForm").val("");

		}
		else {
			alert("Please input acurrate value");
		}

	});



});


//Un-used code

	// employeeRef.on("value", function(snap) {

	//   // Display the viewer count in the html.
	//   // The number of online users is the number of children in the connections list.
	//   $("#connected-viewers").text(snap.numChildren());
	// });



	// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

	// 	// $("#employee-table").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + rate + "</td><td>" + monthsWorked 
	// 	//     + "</td><td>" + dateStarted + "</td><td>" + presentDate + "</td><td>" + totalBilled + "</td></tr>");

	// }); 
