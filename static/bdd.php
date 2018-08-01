<?php
try{
      $bdd = new PDO('mysql:host=localhost;dbname=portfolio;charset=utf8','root','root');
}
catch(Exeption $e)
{      
	die('Erreur:'.$e->getMessage());
}