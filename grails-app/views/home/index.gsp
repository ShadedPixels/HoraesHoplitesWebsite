<!DOCTYPE html>
<html>
<head>
<title>Dev Template</title>
<link rel="stylesheet" type="text/css"
	href='<g:resource dir="css" file="dev_page.css" />'></link>

</head>

<body>
	<div class="DevShowHide">
		<a onclick="ToggleDev(this)">Toggle Dev</a>
	</div>

	<div class="dev_area">
		<header class="dev_header">
			<h1>Dev</h1>
			<nav class="dev_nav">
				<ul>
					<a href="#"><li>Helpful Links</li></a>
					<a href="#"><li>Helpful Links</li></a>
					<a href="#"><li>Helpful Links</li></a>
				</ul>
			</nav>
		</header>
		<section class="build_info_area">
			<g:each in="${builds.reverse()}" var="build">
				<div class="build_info_msg">
				<p class="buildNo">${build[0] }</p>
				<p class="commit_msg">${build[1]}</p>
				<hr>
			</div>
			</g:each>
			<!-- Template 
			<div class="build_info_msg">
				<p class="buildNo">Build #</p>
				<p class="commit_msg">Commit Message...</p>
				<hr>
			</div>
			<!-- Placeholders 
			<div class="build_info_msg">
				<p class="buildNo">Build #1.2</p>
				<p class="commit_msg">Lorem ipsum dolor sit amet.</p>
				<hr>
			</div>
			<div class="build_info_msg">
				<p class="buildNo">Build #1.1</p>
				<p class="commit_msg">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.</p>
				<hr>
			</div>
			<div class="build_info_msg">
				<p class="buildNo">Build #1.0</p>
				<p class="commit_msg">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Aliquam convallis erat nunc, in venenatis urna
					accumsan nec. Proin commodo, velit a dignissim luctus, tortor odio
					consectetur lectus, quis congue mauris.</p>
				<hr>
			</div> -->
		</section>

		<section class="build_comment_area">
			<!-- Template -->
			<div class="build_comment">
				<p class="dev_name">Name</p>
				<p class="message">Dev Message...</p>
				<hr>
			</div>
			<!-- Placeholders -->
			<div class="build_comment">
				<p class="dev_name">Chad</p>
				<p class="message">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Praesent mauris augue, egestas sed lacus sed,
					consectetur sollicitudin justo. Cras feugiat.</p>
				<hr>
			</div>
			<div class="build_comment">
				<p class="dev_name">Mark</p>
				<p class="message">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Sed quis velit vitae augue.</p>
				<hr>
			</div>
			<div class="build_comment">
				<p class="dev_name">Zwendu Pheonix</p>
				<p class="message">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.</p>
				<hr>
			</div>
		</section>
	</div>
	<script src='<g:resource dir="javascripts" file="dev_page.js"/>' async
		type="text/javascript"></script>

	<section class="main">
		<h1>Lorem Ipsum</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Suspendisse faucibus dictum felis, vitae malesuada tortor cursus eu.
			Nam sodales lorem ex, a laoreet purus tristique in. Aliquam sodales
			vulputate dui, ut rhoncus lectus lobortis at. Integer hendrerit eu mi
			tempus consectetur. Maecenas quis tempor neque. Aliquam fringilla eu
			enim at hendrerit. Nunc nec pellentesque libero. Phasellus dapibus
			ullamcorper dapibus. Nullam nec diam ipsum. Mauris ante tellus,
			porttitor eu vestibulum id, venenatis eget dolor.</p>
		<p>Ut dapibus purus aliquet, pellentesque felis vehicula,
			consectetur ipsum. Ut malesuada ut ante molestie dignissim. Donec
			augue est, tristique non arcu ac, hendrerit tincidunt lorem. Nunc sit
			amet purus tellus. Mauris ac diam vel sem egestas maximus. Sed eget
			dictum purus, sit amet mollis tellus. Morbi hendrerit mauris diam,
			sed venenatis libero tempor et. Integer porttitor ante sed gravida
			imperdiet. Donec ac elementum lacus. Maecenas eu auctor nisl. Proin
			lobortis elementum eros et eleifend. Sed a est sed lorem vulputate
			aliquet et et nibh. Mauris ultrices dui dolor, ullamcorper bibendum
			turpis consectetur sit amet. Morbi est purus, mattis non lacus ac,
			dignissim scelerisque augue. Curabitur et lacus fringilla, pulvinar
			nulla porttitor, condimentum metus. Nulla suscipit ligula elementum
			magna vehicula, non condimentum nulla porttitor.</p>
		<p>Integer pharetra aliquet enim a faucibus. Nullam interdum risus
			risus, non mollis erat rutrum a. Etiam mattis, elit vel aliquam
			porttitor, diam elit convallis velit, in venenatis mauris tortor sed
			leo. Nam quis commodo diam, tristique congue metus. Praesent maximus
			varius est, a pellentesque augue eleifend nec. Ut sit amet sapien
			tincidunt, hendrerit nisl at, mattis nibh. Duis eu diam sed orci
			tincidunt imperdiet quis eget eros.</p>
		<p>Maecenas eget malesuada tellus. Aliquam interdum suscipit
			ipsum, eu commodo nunc. Proin ut tellus nec nulla aliquet convallis
			vitae quis nibh. Nunc laoreet purus at tortor elementum, vel pulvinar
			nunc faucibus. Sed et orci eleifend, ornare urna ac, pharetra dolor.
			Pellentesque ex libero, dictum nec feugiat pellentesque, commodo nec
			justo. Nulla blandit laoreet tortor, id faucibus dolor dapibus ac.
			Mauris congue tincidunt nisi id luctus.</p>
		<p>Sed volutpat velit eu vulputate aliquam. Pellentesque luctus
			facilisis tristique. Vivamus convallis urna sapien, at eleifend sem
			finibus feugiat. Mauris eleifend, nisi sit amet lobortis finibus,
			mauris sapien ultricies sapien, non sollicitudin justo mi in quam.
			Vestibulum volutpat lectus at urna ornare imperdiet. Maecenas a massa
			efficitur nisi mollis tristique ut vitae dui. Maecenas a tincidunt
			arcu, ut vulputate odio. Ut lobortis erat a commodo tempor.</p>
	</section>
</body>

</html>