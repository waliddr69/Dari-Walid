<?php

error_reporting(E_ALL);
ini_set("display_errors",1);
include "connect.php";



$fullname = $_POST["fullname"];
$email = $_POST["email"];
$message = $_POST["message"];

$insertQuery = "INSERT INTO users (fullname,email,message)
                VALUES(?,?,?) ";

$stmt = $conn->prepare($insertQuery);

if($stmt){
    $stmt->bind_param("sss",$fullname,$email,$message);
    $stmt->execute();
    echo"Form submitted successfully!";
    $stmt->close();

}else{
    echo"error :".$conn->error;
}

$conn->close();

?>