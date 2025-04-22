<?php

    // try {
    //     $conn = mysqli_connect('localhost', 'buwie', 'vendorReg_admin', 'market_vendor');
    // }
    // catch (mysqli_sql_exception) {
    //         echo 'Connection Error: ' . mysqli_connect_error();
  
    // }
    // if ($conn) {
    //     echo "Connected";
    // }
    
    $servername = "localhost";  // Or your database server
    $username = "root";
    $password = "";
    $dbname = "market_vendor";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    




?>