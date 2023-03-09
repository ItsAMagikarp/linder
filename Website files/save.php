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

    $conn = new mysqli('localhost', 'root','','test')
    if($conn->connect_error){
        die('Connection Failed:'.$conn->connect_error);
    }else{
        $stmt = $conn->preprare("insert into registration(Fname, Lname, email, number, pass, gender)
            value(?, ?, ?, ?, ?, ?) ");
        $stmt->bind_param("sssiss", $Fname, $Lname, $email, $number, $pass, $gender);
        $stmt->execute();
        echo "registration Successful...";
        $stmt->close();
        $conn->close();
    }
?>