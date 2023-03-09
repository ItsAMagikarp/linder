<link rel="stylesheet" href="data.css">
<?php

$data = fopen("data/data.txt","r");
while(!feof($data)){
    $line = fgets($data);
    list($Fname, $Lname, $email, $number, $pass, $gender) = explode(",", $line); 
    echo("<table><th>First Name</th><th>Last name</th><th>Email</th><th>Phone number</th><th>Password</th><tr><td>$Fname</td><td>$Lname</td><td>$email</td><td>$number</td><td>$pass</td></tr></table>");
}
fclose($data);
?>