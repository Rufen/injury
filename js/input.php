<?php
	$mysqli = new mysqli("localhost", "injury", "injury", "injury");
	//Object Oriented $mysqli = new mysqli("localhost", "name", "psw", "dbname");
	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	$data = json_decode(file_get_contents("php://input"));	
	$lname = $mysqli->real_escape_string($data->lname);
	$fname = $mysqli->real_escape_string($data->fname);
	$mi = $mysqli->real_escape_string($data->mi);
	$street = $mysqli->real_escape_string($data->street);
	$city = $mysqli->real_escape_string($data->city);	
	$state = $mysqli->real_escape_string($data->state);
	$zip = $mysqli->real_escape_string($data->zip);	
	$hphone = $mysqli->real_escape_string($data->hphone);
	$cphone = $mysqli->real_escape_string($data->cphone);		
	$email = $mysqli->real_escape_string($data->email);
	$jobtitle = $mysqli->real_escape_string($data->jobtitle);
	$dept = $mysqli->real_escape_string($data->dept);
	$worklocation = $mysqli->real_escape_string($data->worklocation);
	$supervisor = $mysqli->real_escape_string($data->supervisor);
	$depthead = $mysqli->real_escape_string($data->depthead);
	$ss = $mysqli->real_escape_string($data->ss);
	$dob = $mysqli->real_escape_string($data->dob);
	$injury_it = $mysqli->real_escape_string($data->injury_it);
	$injury_hr_concate = $mysqli->real_escape_string($data->injury_hr_concate);
	$partinjured = $mysqli->real_escape_string($data->partinjured);
	$exactlocation = $mysqli->real_escape_string($data->exactlocation);
	$injurydescription = $mysqli->real_escape_string($data->injurydescription);
	$howtoprevent = $mysqli->real_escape_string($data->howtoprevent);
	$witnesses = $mysqli->real_escape_string($data->witnesses);
	$reoccurring = $mysqli->real_escape_string($data->reoccurring);
	$medicalattention = $mysqli->real_escape_string($data->medicalattention);
	$doctorname = $mysqli->real_escape_string($data->doctorname);
	$doctorphone = $mysqli->real_escape_string($data->doctorphone);
	$doctorfax = $mysqli->real_escape_string($data->doctorfax);
	$empsigninature = $mysqli->real_escape_string($data->empsigninature);
	$signature_dt = $mysqli->real_escape_string($data->signature_dt);
		// Break $date into month, day and year for storage
				$parts = getdate(strtotime($injury_dt));
				$month = $parts['mon'];
				$day = $parts['mday'];
				$year = $parts['year'];
				
		
				// Format date and time into proper format for storage in MySQL
				//$datetime = date('Y-m-d H:i:s', mktime($hour, $minute, 0, $month, $day, $year));
				$datetime = date_format($injury_dt, 'Y-m-d');
	/* this query with escaped $city will work */
	if ($mysqli->query("INSERT into injury_report (`Last Name`, `First Name`, `MI`, `Street name`, `City`, `State`, `Zip Code`, `Home Phone`, `Cell Phone`, `Email`, `Job Title`, `Department`, `Work Station`, `Supervisor`, `Dept Head`, `SS`, `DOB`, `Injury Date`, `Injury Time`, `Body Injury`, `Exact Location`, `Description`, `How Prevent`, `Witnesses`, `Reoccurring`, `Sought Medical`, `Doctor Name`, `Doctor Phone`, `Doctor Fax`, `Signature`, `Signature Date`) VALUES ('".$lname."','".$fname."','".$mi."','".$street."','".$city."','".$state."','".$zip."','".$hphone."','".$cphone."','".$email."','".$jobtitle."','".$dept."','".$worklocation."','".$supervisor."','".$depthead."','".$ss."','".$dob."','".$injury_it."','".$injury_hr_concate."','".$partinjured."','".$exactlocation."','".$injurydescription."','".$howtoprevent."','".$witnesses."','".$reoccurring."','".$medicalattention."','".$doctorname."','".$doctorphone."','".$doctorfax."','".$empsigninature."','".$signature_dt."')")) {
		printf("%d Row inserted.\n", $mysqli->affected_rows);
	}

	$mysqli->close();
	//mysql_query("INSERT INTO employee(`Employee ID`, `First Name`, `Last Name`) VALUES ('".$empno."','".$fname."','".$lname."')");
?>