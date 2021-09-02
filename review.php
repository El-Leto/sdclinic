<?php
$name = $_POST['review'];
$name = htmlspecialchars($review);
$name = urldecode($review);
$name = trim($review);
mail("elleto.life@gmail.com", "Отзыв с сайта", "Имя: ".$review.";
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'otzyvy.html';
header("Location: $redirect");
echo "сообщение успешно отправлено";
exit();
?>