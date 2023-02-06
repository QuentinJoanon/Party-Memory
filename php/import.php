<?php
if (isset($_FILES['image'])) {
  $errors = array();
  $file_name = $_FILES['image']['name'];
  $file_size = $_FILES['image']['size'];
  $file_tmp = $_FILES['image']['tmp_name'];
  $file_type = $_FILES['image']['type'];
  $file_ext = strtolower(end(explode('.', $_FILES['image']['name'])));
  
  $extensions = array("jpeg", "jpg", "png");
  
  if (in_array($file_ext, $extensions) === false) {
    $errors[] = "L'extension n'est pas autorisée, choisissez un fichier JPEG ou PNG.";
  }
  
  if ($file_size > 2097152) {
    $errors[] = 'La taille du fichier ne doit pas dépasser 2 MB';
  }
  
  if (empty($errors) == true) {
    move_uploaded_file($file_tmp, "../images/" . $file_name);
    echo "L'image a été téléchargée avec succès.";
  } else {
    print_r($errors);
  }
}
?>
