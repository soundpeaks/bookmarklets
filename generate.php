<?php 

$readme = file_get_contents('index.html');

$files = [
	['youtube-most-viewed.js', 'Creates a playlist of most viewed videos', '▶️ YouTube Most Popular'],
];

foreach ($files as $file) {
	$strings = file($file[0]);
	
	foreach ($strings as $string) {
        $string = trim($string);
        //echo $string . PHP_EOL;
        $string = str_replace("\n", "", $string);
        $string = str_replace("\t", "", $string);
        $string = str_replace("  ", " ", $string);
        $string = str_replace("  ", " ", $string);
        if (substr($string, 0, 2) == '//') $string = "";
        @$string_long .= $string;
	}
	
	$n_string = "<h2>{$file[1]}</h2>\n<a href=\"javascript: function f1() {" . $string_long . "} f1();\">{$file[2]}</a>";
	$readme .= "\n\n" . $n_string;
}

file_put_contents('index.html', $readme);