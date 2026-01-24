<?php
session_start();
include "config/db.php";

if (isset($_POST['login'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['user'] = $user;
        header("Location: dashboard.php");
    } else {
        $error = "Invalid Login Details";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Utility Management System</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="login-body">

<div class="login-box">
    <h2>Login</h2>
    <?php if(isset($error)) echo "<p class='error'>$error</p>"; ?>
    <form method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button name="login">Login</button>
    </form>
</div>

</body>
</html>
