<?php

header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Headers: origin, content-type, accept');  

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bahamas_rides";

$_POST = json_decode(file_get_contents('php://input'), true);


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$email = 'abc@gmai.com';
$password = 'abc';
if(isset($_POST['email']) && isset($_POST['password']) ){
	$email = $_POST['email'];
	$password = $_POST['password'];
}
$sql = "INSERT INTO new (email,password)
VALUES ('".$email."','".$password."')";

if ($conn->query($sql) === TRUE) {
	$data['s'] = true;
    echo json_encode($data);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 