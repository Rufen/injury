<!DOCTYPE HTML>

<html lang="en-US">

<!-- TemplateVersion="1109" -->

<head>

<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<title>Report Coyote Sighting</title>
 
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28662720-1']);
  _gaq.push(['_setDomainName', 'newtonma.gov']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

		<script type="text/javascript">
			function getDocumentHeight() {
				if ($.browser.msie) {
					var $temp = $("<div>").css("position", "absolute").css("left", "-10000px").append($("body").html());

					$("body").append($temp);
					var h = $temp.height();
					$temp.remove();
					return h + 50;
				}
				return $(document).height() + 50;
			}
			$(window).load(function() {
				parent.resizeIframe(getDocumentHeight());
			});
		</script>

<link href="/apps/coyotes/includes/coyote.css" type="text/css" rel="stylesheet" />

</head>

<body id="devbody">

      <style>
	  	#wide-box {
			margin:0 15px;
			font-size:13px;
		}
	  </style>
	
		<div id="wide-box">
		
			<?php
				require("dbinfo.php");
				require("functions.php");
				
				// get posted variables
				$emp_first_name = $_POST['emp_first_name'];
				$emp_last_name = $_POST['emp_last_name'];
				$home_phone = $_POST['home_phone'];
				$home_phone = $_POST['cell_phone'];
				$email = $_POST['email'];
				$st_address = $_POST['st_address'];
				$state = $_POST['state'];
				$zip = $_POST['zip'];
				$date = $_POST['date'];
				$hour = $_POST['hour'];
				$minute = $_POST['minute'];
				$description = $_POST['description'];
								
				// Break $date into month, day and year for storage
				$parts = getdate(strtotime($date));
				$month = $parts['mon'];
				$day = $parts['mday'];
				$year = $parts['year'];
				
				// Add 12 hours if PM, except if 12
				if ($_POST['apm'] == 'am' && $hour == 12) {
					$hour = 0;
				}
				
				if ($_POST['apm'] == 'pm' && $hour != 12) {
					$hour += 12;
				}
				
				
				// Format date and time into proper format for storage in MySQL
				$datetime = date('Y-m-d H:i:s', mktime($hour, $minute, 0, $month, $day, $year));
				
				// Format address and create geocode URL 
				$address = $stNum . " " . $stName . ", Newton MA";
				$address = urlencode($address);
				$geocode = file_get_contents("http://www.google.com/maps/api/geocode/json?address=". $address ."&sensor=true");
				
				// Decode json and get lat, lng, and formatted address
				$output= json_decode($geocode);
				$lat = $output->results[0]->geometry->location->lat;
				$lng = $output->results[0]->geometry->location->lng;
				$formattedAddress = $output->results[0]->formatted_address;
				
				// Strip Newton MA, (ZIP), USA from end
				preg_match('/[A-Za-z0-9\s]*/', $formattedAddress, $formattedAddress);
				$niceAddress = $formattedAddress[0];
				
				// Escape strings before inserting into database
				$name = mysql_real_escape_string($name);
				$phone = mysql_real_escape_string($phone);
				$email = mysql_real_escape_string($email);
				$niceAddress = mysql_real_escape_string($niceAddress);
				$description = mysql_real_escape_string($description);
				
				// Insert SQL statement
				$sql = "INSERT INTO sighting (name, phoneNumber, email, formattedAddress, date, description, lat, lng, reportDate)
					VALUES ('$name', '$phone', '$email', '$niceAddress', '$datetime', '$description', $lat, $lng, NOW())";
								
				// Run SQL if Street Name is present
				if ($stName != "") {
					mysql_query($sql, $connection) or die(mysql_error());
				
			?>
			
			<p>Thank you for reporting a coyote sighting.</p>
            <?php redirect('../report-coyote.php', 5); ?>
			
			<?php
				}
				else {
			?>
			
			<p>Your entry doesn't contain the needed information to be saved.</p>
			<?php redirect('../report-coyote.php', 5); ?>
            		
			<?php
				}
			?>
			
		</div>
		
	   </td></tr></table>


</div>
</td></tr></table></center><div id="cvOvrlyShim" style="display:none;position:absolute;"></div><div id="cvOvrlyWrapper" style="display:none;position:absolute;"><div id="cvOvrlyContainer"><table id="cvOvrlyTable" cellpadding="0" cellspacing ="0" border="0"><tr><td class="tl"></td><td class="t"></td><td class="tr"><a href="JavaScript:hideoverlay();" ><img src="http://www.newtonma.gov/img/blank.gif" alt="" width="65" height="61" border="0"/></a></td></tr><tr><td class="l"></td><td class="c"><iframe id="cvOvrlyIFrame" width="500" height="400" frameborder="0" src="" scrolling="no" ></iframe></td><td class="r"></td></tr><tr><td class="bl"></td><td class="b"></td><td class="br"></td></tr></table></div></div>

</body>

</html>