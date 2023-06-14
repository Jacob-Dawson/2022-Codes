<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main Temp</title>
        <style>
            body{

                font-family: 'Arial';
                padding: 0;
                margin: 0;
                background-color: white;
                text-align:center;

            }
        </style>
    </head>
    <body>
    </body>
</html>

<?php 

    // https://leetcode.com/problems/gas-station/

    $gas = array(6,5,5);
    $cost = array(2,3,7);
    $totals = [];

    echo "Gas: ".implode(",",$gas)."<br>";
    echo "Cost: ".implode(",",$cost)."<br>";

    for($i = 0; $i < count($gas); $i++){

        $belowZero = false;
        $total = 0;
        $total += $gas[$i];
        echo "".$total."<br>";

        for($j = 0; $j < count($cost); $j++){

            if($j == count($cost)-1){

                $total = $total - $cost[($j+$i)%count($gas)];

            } else {

                $total -= $cost[($j+$i)%count($gas)];

                if($total < 0){

                    $belowZero = true;

                }
                
                $total += $gas[($j+$i+1)%count($gas)];

            }

            echo "".$total."<br>";

            if($total < 0){

                $belowZero = true;

            }

        }

        if($belowZero === true){

            array_push($totals,-1);
            echo "Result: ".$totals[$i]."<br>";

        } else {

            array_push($totals,$total);
            echo "Result: ".$i." (Cost: ".$totals[$i].")<br>";

        }
        
        echo "<br>";

    }
    

    echo "<br>";
    echo "Jay 11/50 (2022)";

?>