<?php 

include "conn.php";

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = 'INSERT INTO admin_accounts (username, email, password)
        VALUES (?, ?, ?)';

$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, 'sss', $username, $email, $password);

mysqli_stmt_execute($stmt);

echo 'Record saved.';
?>