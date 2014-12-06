<pre>
<?php

function getDirectoryList($dir, &$dirs) {

	if ($handle = opendir($dir)) {

	    /* This is the correct way to loop over the directory. */
	    while (false !== ($entry = readdir($handle))) {
	    	if($entry != "." && $entry != ".."):
	        	$dirs[] = $dir . '/' . $entry;

	        	if(!empty($entry)) {
		        	getDirectoryList($dir . '/' . $entry, $dirs);
		        }
	    	endif;
	    }

	    closedir($handle);

	    return true;
	}

	return false;
}

$dirs = array();
$res = getDirectoryList('data', $dirs);

$files = array();

foreach($dirs as $id=>$file) {
	$info = pathinfo($file);
	if(!empty($info['filename']) && !empty($info['extension'])):
		echo '{ name: "'.$info['filename'].'", '."\t\t\t".'type: "image", '."\t\t\t".'src: "'.$file.'" },' . "\n";
	endif;
}