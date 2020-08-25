<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$to = "fileer@gmail.com";
$subject ='Заявка на заказ';
$message = "Заявка была отправлена пользоваталем $name с телефоном $phone";
$headers = "From: $name <$phone>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

