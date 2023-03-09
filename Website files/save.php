<link rel="stylesheet" href="data.css">
<?php
    error_reporting(E_ALL);
    ini_set('display_errors','On');
   
    $Fname = $_POST["Fname"];
    $Lname = $_POST["Lname"];
    $email = $_POST["email"];
    $number = $_POST["pNumber"];
    $pass = $_POST["password"];
    $gender = $_POST["gender"];
    $data = fopen("data/data.txt","a") or die("Cannot open the file");
    fwrite($data, "$Fname, $Lname, $email, $number, $pass\n");
    echo "<h1>The data has been submitted</h1>";
    fclose($data);
?>