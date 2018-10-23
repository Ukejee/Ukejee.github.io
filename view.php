<?php
                    $con = mysqli_connect('localhost','root','','yourtutor');
                    $result = mysqli_query($con,"select * from tutor");
                    
              
					 ?>

<!DOCTYPE html>
<html>


<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Tutor Search, Team Webmatterz" />
<meta name="keywords" content="Tutor Search, Team Webmatterz" />
<title> Tutor Search </title>

<link href="styles/fonts.css" rel="stylesheet" type="text/css" />
<link href="styles/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="styles/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css"/>
<link href="styles/site.css" class="type/text" rel="stylesheet" />
<link href="styles/innerStyles.css" class="type/text" rel="stylesheet" />

<!-- #EndEditable -->


<!-- #EndEditable scripts -->



</head>


<body>

	<div id="padder">
		<div class="container-fluid">
			<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
				<p>  <span class="glyphicon glyphicon-phone-alt"> Call Us: </span> +2347033716203 &nbsp; &nbsp;
				 <span class="glyphicon glyphicon-envelope"> Mail Us: </span> info@teamwebmatterz.com.ng </p> 
			</div>
			
			<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
				<p class="text-right">Connect with us: 
					<a href="#" id="fb" target="_blank" title="Like Our Page on facebook"></a>
					<a href="#" id="tw" target="_blank" title="Follow us on twitter"></a>
					<a href="#" id="lin" target="_blank" title="Follow us on linkedin"></a>
	
	
				</p>
			</div>
	
		</div>
	</div>
	
	<header>
		<div class="container-fluid">
				 <div class="row">
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<h1 title="tutor"><a href="index.html"><img class="img-responsive" src="images/logo.png" /></a></h1>
								</div>

							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right">
									 <nav>
												<a class="btn btn-success" href="search"><span class="glyphicon glyphicon-home"></span> Find Tutors!</a>
									 </nav>
							</div>
				 </div>
		</div>
</header>

<div id="innerBanner">
    <div class="container-fluid">
        <h2> Thank You <br> <span> We Found 5 Tutors in your locality </span></h2>
    </div>
</div>

<div id="innerCon">
     <div class="container">
          <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2">
<h2 class="text-center"> Tutors <span> Details </span></h2>
			<table class="table table-striped table-bordered table-hover text-capitalize" style="text-align:center;">		
				<thead> 
					<tr> 
                    <th> ID </th>
					<th> Name </th>
					<th> Telephone </th>
                    <th> Email Address </th>
                    <th> Major </th>
                    <th> State </th>
                    <th> City </th>
                    <th> Locality </th>
                    <th> Class </th>
                    <th> Teaching Experience </th>
					</tr>
				</thead>
				<?php
                while($rows=mysqli_fetch_assoc($result))
                {
                    ?>
                     <tr>
                    <td> <?php echo $rows['id']; ?> </td>
					<td><?php echo $rows['name']; ?> </td>
					<td><?php echo $rows['tel']; ?> </td>
                    <td> <?php echo $rows['email']; ?> </td>
                    <td> <?php echo $rows['major']; ?> </td>
                    <td> <?php echo $rows['state']; ?> </td>
                    <td> <?php echo $rows['city']; ?> </td>
                    <td><?php echo $rows['locality']; ?> </td>
                    <td> <?php echo $rows['class']; ?> </td>
                    <td> <?php echo $rows['experience']; ?> </td>
                </tr>

                <?php
                } 

                ?>
					
			</table>
			</div> 

                 
            </table>
				 
          </div>
     </div>
</div>

</div>

<section style="min-height:200px;">
<div id="indexContact">
	<div class="container-fluid">
			
		<div  class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			<h3> Follow Us On </h3>
			<hr>
		<p>
				<a href="#" id="fb" target="_blank" title="Like Our Page on facebook"></a> 
				<a href="#" id="tw" target="_blank" title="Follow us on twitter"> </a> 
				<a href="#" id="gg" target="_blank" title="Follow us on google++"></a>
			</p>
			<p>&copy; 2018. Tutor Search Project, <br> All right reserved</p>
			<p>Developed by: <a href="#" target="_blank" title="Web Matterz Nigeria" style="margin-left: -20px;"><img src="images/favicon.png" style="border-radius: 10px;"> Team WebMatterz </a></p>

		</div>
		
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" style="margin-left: 0px;">
			<h3> Contact Us </h3>
			<hr>
		<p><span class="glyphicon glyphicon-home"></span> NaijaHack, Lagos state, Nigeria. </p>
		<p><span class="glyphicon glyphicon-envelope"></span> info@teamwebmatterz.com </p> 
		<p><span class="glyphicon glyphicon-earphone"></span>   +2347033716203</p>

		</div>
		
			<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 pull-right">
		<h3> Quick Links </h3>
			<hr>
		<li> <a href="#"> About Us </a> </li>
		<li> <a href="search.html"> Tutor Search </a></li>
		<li> <a href="#"> Contact Us </a></li>
		<li> <a href="#"> Our Policy </a></li>
		</div>		
	</div>
</div>
</section>
<!-- End of IndexContact-->


<script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
<script type="text/javascript" src="scripts/bootstrap.min.js"></script>
<script type="text/javascript" src="scripts/myScript.js"></script>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5bcf486619b86b5920c09ca7/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

</body>


</html>



