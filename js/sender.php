<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "zaslg0642@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заява з сайту";

    
	
	$msg="
    Ім'я: $name /n
    Телефон: $phone /n
    Пошта: $email /n
    Побажання: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Форма полетіла!</p>
