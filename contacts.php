<?php

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

$address = "nicknashoo18@gmail.com";
$sub = "Сообщение с сайта MST";

$mes = "Сообщение с сайта MST.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email";


if (empty($bezspama))
{
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=https://biznessystem.ru');
	echo '
    
    Письмо отправлено, через 5 секунд вы вернетесь на страницу MST';}
else {
	header('Refresh: 5; URL=https://biznessystem.ru');
	echo '
    
    Письмо не отправлено, через 5 секунд вы вернетесь на страницу MST';}
}
exit;
?>