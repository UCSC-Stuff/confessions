<html>
<body>
			<?php
            if (get_magic_quotes_gpc()) {
                $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
                while (list($key, $val) = each($process)) {
                    foreach ($val as $k => $v) {
                        unset($process[$key][$k]);
                        if (is_array($v)) {
                            $process[$key][stripslashes($k)] = $v;
                            $process[] = &$process[$key][stripslashes($k)];
                        } else {
                            $process[$key][stripslashes($k)] = stripslashes($v);
                        }
                    }
                }
                unset($process);
            }
            ?>
			<?php
            $hostname = "UCSConfessions.db.8405179.hostedresource.com";
            $username = "UCSConfessions";
            $dbname = "UCSConfessions";

            $password = "Arch1e##";
            $usertable = "Test";
            $confession = "CFS";
			$IP = "IP";
			$TS = "TS";
			$ipaddress = $_SERVER["REMOTE_ADDR"];
			
			$con=mysqli_connect("$hostname","$username","$password","$dbname");

			if (mysqli_connect_errno()) {
				 echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
        
            mysql_connect($hostname, $username, $password) OR DIE ("Unable to 
            connect to database! Please try again later.");
            mysql_select_db($dbname);
            
			$cfspost = mysqli_real_escape_string($con, $_POST['Confession']);
			$timepost = mysqli_real_escape_string($con, $_POST['age']);
			

				$sql="INSERT INTO Test ($confession, $IP, $TS)
				VALUES ('$cfspost', '$ipaddress', NOW())";
				
				
				if (!mysqli_query($con,$sql)) {
				  die('Error: ' . mysqli_error($con));
				}
				echo "Your confession has been posted";
			
			
			mysqli_close($con); ?>
            <script>
			setTimeout(function () {
			 window.location.href="index.html" 
			
			},1500);</script>

</body>
</html>