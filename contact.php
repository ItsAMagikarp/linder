
<link rel="stylesheet" href="data.css">
<?php

   
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $data = fopen("data/data.txt","a") or die("Cannot open the file");
    fwrite($data, "$fname, $lname, $email,  $subject\n");
    echo "<h1>The data has been submitted</h1>";
    fclose($data);

    $conn = new mysqli('localhost', 'root','','test')
    if($conn->connect_error){
        die('Connection Failed:'.$conn->connect_error);
    }else{
        $stmt = $conn->preprare("insert into registration(fname, lname, email, subject)
            value(?, ?, ?, ?, ?, ?) ");
        $stmt->bind_param("sssiss", $Fname, $Lname, $email, $subject;
        $stmt->execute();
        echo "registration Successful...";
        $stmt->close();
        $conn->close();
    }
?>
