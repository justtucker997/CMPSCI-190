<?php
srand ((doubleval (microtime ()) * 1000000));
$price = 50 + rand (0, 5000) / 100;
echo "$price";
?>
