<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$body = "<p>Имя: " . $name . "</p>";
$body .= "<p>Телефон: " . $phone . "</p>";
$body .= "<p>Сообщение: " . $message . "</p>";


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$res = mail('cosmetology.odessa@gmail.com', 'Заявка с cosmetolog-odessa.com', $body, $headers );

echo $res;


?>
