<?php
$vote_average = $_POST['vote_average'];

$send = mail("roma.bruns2012@gmail.com", "Оценка продукта", "Оценка:".$vote_average);
if ($send) {  
  return true;
} else { 
  return false;
}