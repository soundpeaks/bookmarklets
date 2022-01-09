<?php 

$html = <<<html
<!doctype HTML>
<style>html, body {text-align: center; font-family: sans-serif;}</style>
<h1>Bookmarlets from Sound Peaks</h1>
<p>Drag'n'drop links onto your bookmar toolbar of the internet browser.</p>

html;

$files = [
	['youtube-most-viewed.js', 'Creates a playlist of recent videos sorted by popularity', '▶️ YouTube Recent Most Viewed'],
	['youtube-play-recent.js', 'Creates a playlist of recent videos that are visible on the page at the moment', '▶️ YouTube Play Recent'],
	['instagram-press-next.js', 'Open an instagram photo and it will click next for you', '👉 Instagram - Auto Next'],
	['general-auto-scroll-down.js', 'Srolls page down every X seconds', '👇 Auto Scroll Down'],
];

foreach ($files as $file) {
	$strings = file($file[0]);
	$string_concat = '';
	foreach ($strings as $string) {
        $string = trim($string);
        //echo $string . PHP_EOL;
        $string = str_replace("\n", "", $string);
        $string = str_replace("\t", "", $string);
        $string = str_replace("  ", " ", $string);
        $string = str_replace("  ", " ", $string);
        if (substr($string, 0, 2) == '//') $string = "";
        $string_concat .= $string;
	}
	
	$rand = rand(0, 100);
	$n_string = "<h2>{$file[1]}</h2>\n<a href=\"javascript: function f$rand() {" . $string_concat . "} f$rand();\">{$file[2]}</a>";
	$html .= "\n\n" . $n_string;
}

file_put_contents('index.html', $html);