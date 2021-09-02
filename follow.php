<?php
$name = $_POST['email'];
$name = htmlspecialchars($email);
$name = urldecode($email);
$name = trim($email);
mail("elleto.life@gmail.com", "Подписка с сайта sdclinic.ru", "email: ".$email.";
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
echo "сообщение успешно отправлено";
exit();
?>