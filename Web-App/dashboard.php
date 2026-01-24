<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
    <h1>Welcome, <?php echo $_SESSION['user']; ?></h1>
    <a href="logout.php" class="logout">Logout</a>
</header>

<section class="container">
    <div class="card">Notes Management</div>
    <div class="card">Attendance</div>
    <div class="card">Timetable</div>
    <div class="card">Results</div>
</section>

</body>
</html>
