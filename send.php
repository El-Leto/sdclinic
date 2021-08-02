<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$data = $_POST['data'];
$time = $_POST['time'];
$usluga = $_POST['usluga'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$surname = htmlspecialchars($surname);
$phone = htmlspecialchars($phone);
$data = htmlspecialchars($data);
$time = htmlspecialchars($time);
$usluga = htmlspecialchars($usluga);
$message = htmlspecialchars($message);
$name = urldecode($name);
$surname = urldecode($surname);
$phone = urldecode($phone);
$data = urldecode($data);
$time = urldecode($time);
$usluga = urldecode($usluga);
$message = urldecode($message);
$name = trim($name);
$surname = trim($surname);
$phone = trim($phone);
$data = trim($data);
$time = trim($time);
$usluga = trim($usluga);
$message = trim($message);
mail("elleto.life@gmail.com", "Заявка с сайта", "Имя: ".$name."
Фамилия: ".$surname."
Телефон: ".$phone."
Дата: ".$data."
Время: ".$time."
Тема: ".$usluga."
Текст сообщения: ".$message);
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'appointment.html';
header("Location: $redirect");
echo "сообщение успешно отправлено";
exit();
?>