<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "", "", "");

$result = $conn->query("SELECT `Last Name`, `First Name`, `MI`, `Street name`, `City`, `State`, `Zip Code`, `Home Phone`, `Cell Phone`, `Email`, `Job Title`, `Department`, `Work Station`, `Supervisor`, `Dept Head`, `SS`, `DOB`, `Injury Date`, `Injury Time`, `Body Injury`, `Exact Location`, `Description`, `How Prevent`, `Witnesses`, `Reoccurring`, `Sought Medical`, `Doctor Name`, `Doctor Phone`, `Doctor Fax`, `Signature`, `Signature Date` FROM injury_report");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"lname":"'  . $rs["Last Name"] . '",';
    $outp .= '"fname":"'  . $rs["First Name"] . '",';
    $outp .= '"mi":"'   . $rs["MI"]        . '",';
    $outp .= '"street":"'   . $rs["Street name"]        . '",';
    $outp .= '"city":"'   . $rs["City"]        . '",';
    $outp .= '"state":"'   . $rs["State"]        . '",';
    $outp .= '"zip":"'   . $rs["Zip Code"]        . '",';
    $outp .= '"hphone":"'   . $rs["Home Phone"]        . '",';
    $outp .= '"cphone":"'   . $rs["Cell Phone"]        . '",';
    $outp .= '"email":"'. $rs["Email"]     . '",';
    $outp .= '"jobtitle":"'   . $rs["Job Title"]        . '",';
    $outp .= '"dept":"'   . $rs["Department"]        . '",';
    $outp .= '"worklocation":"'. $rs["Work Station"]     . '",';
    $outp .= '"supervisor":"'. $rs["Supervisor"]     . '",';
    $outp .= '"depthead":"'. $rs["Dept Head"]     . '",';
    $outp .= '"ss":"'. $rs["SS"]     . '",';
    $outp .= '"dob":"'. $rs["DOB"]     . '",';
    $outp .= '"dinjured":"'. $rs["Injury Date"]     . '",';
    $outp .= '"tinjured":"'. $rs["Injury Time"]     . '",';
    $outp .= '"partinjured":"'. $rs["Body Injury"]     . '",';
    $outp .= '"exactlocation":"'. $rs["Exact Location"]     . '",';
    $outp .= '"injurydescription":"'. $rs["Description"]     . '",';
    $outp .= '"howtoprevent":"'. $rs["How Prevent"]     . '",';
    $outp .= '"witnesses":"'. $rs["Witnesses"]     . '",';
    $outp .= '"reoccurring":"'. $rs["Reoccurring"]     . '",';
    $outp .= '"medicalattention":"'. $rs["Sought Medical"]     . '",';
    $outp .= '"doctorname":"'. $rs["Doctor Name"]     . '",';
    $outp .= '"doctorphone":"'. $rs["Doctor Phone"]     . '",';
    $outp .= '"doctorfax":"'. $rs["Doctor Fax"]     . '",';
    $outp .= '"empsigninature":"'. $rs["Signature"]     . '",';
    $outp .= '"dt":"'. $rs["Signature Date"]     . '"}';
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?> 
