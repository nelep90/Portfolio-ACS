<?php
try{
      $bdd = new PDO('mysql:host=localhost;dbname=nenadp_portfolio;charset=utf8','nenadp','5yaNIFGBsT');
}
catch(Exeption $e)
{      
	die('Erreur:'.$e->getMessage());
}