<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "bahamas_rides"
echo "string";exit;

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
	echo "string";
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?> 