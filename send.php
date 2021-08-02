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
echo $name;
echo "<br>";
echo $surname;
if (mail("elleto.life@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$phone))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>