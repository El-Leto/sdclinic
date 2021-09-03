<?php
$name = $_POST['question'];
$name = htmlspecialchars($question);
$name = urldecode($question);
$name = trim($question);
mail("elleto.life@gmail.com", "Вопрос с сайта", "Имя: ".$question.";
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'vopros-otvet.html';
header("Location: $redirect");
echo "сообщение успешно отправлено";
exit();
?>