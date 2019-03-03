<?php
$vote_average = $_POST['vote_average'];

$send = mail("mail@gmail.com", "Оценка продукта", "Оценка:".$vote_average);
if ($send) {  
  return true;
} else { 
  return false;
}