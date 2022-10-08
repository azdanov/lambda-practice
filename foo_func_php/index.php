<?php
 
require __DIR__ . '/vendor/autoload.php';
 
use Bref\Context\Context;
 
return function ($event, Context $context) {
    echo json_encode(["info" => "this is going to cloudwatch"]);
 
    return json_encode(["message" => sprintf("Hello, %s!", $event['name'] ?? "unknown")]);
};
