<?php
if(isset($_POST['submit'])){
    $to = "ikp25@drexel.edu";
    $subject = $_POST['subject'];
    $message = "Name: ".$_POST['firstname']." ".$_POST['lastname']."\r\n";
    $message .= "Email: ".$_POST['email']."\r\n";
    $message .= "Message: ".$_POST['subject']."\r\n";
    $headers = "From: ".$_POST['email']."\r\n";
    if(mail($to, $subject, $message, $headers)){
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>
