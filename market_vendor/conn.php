<?php

    try {
        $conn = mysqli_connect('localhost', 'buwie', 'vendorReg_admin', 'market_vendors');
        echo 'Connection Successful';
    }
    catch (mysqli_sql_exception) {
            echo 'Connection Error: ' . mysqli_connect_error();
  
    }



?>