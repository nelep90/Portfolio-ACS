<?php
header("Access-Control-Allow-Origin: *");
require_once('./bdd.php');
$req = $bdd->prepare("SELECT image, project_name , description from projects ");
$req->execute();
$response = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($response, JSON_UNESCAPED_UNICODE);



// header("Access-Control-Allow-Origin: *");

// try {
//     $bdd = new PDO('mysql:host=localhost;dbname=portfolio', 'root', 'root');
    
//     $req = $bdd->query('SELECT project_id,project_name,image from projects');
//     $projects = $req->fetchAll(PDO::FETCH_ASSOC);
//     echo json_encode($projects);

// } catch (PDOException $e) {

//     print "Erreur !: " . $e->getMessage() . "<br/>";
//     die();

// }
// ?>
