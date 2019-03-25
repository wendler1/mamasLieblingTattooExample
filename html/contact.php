<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mamas Liebling</title>
  <link href="../css/normalize.css" rel="stylesheet" />
  <link href="../css/main.css" rel="stylesheet" />
  <script src="../js/scrollbar.js" type="text/javascript"></script>
</head>

<body>


    <div id="hero">
      <div id="header1">

        <nav class="navbar-header">
          <ul>
            <img src="../img/logo.jpg" alt="Logo" id="logo-header"/>
            <li>
              <a href="./index.html">home</a>
            </li>
            <li>
              <a href="./about.html">about</a>
            </li>
            <li>
              <a href="./artists.html">artists</a>
            </li>
            <li>
              <a href="./gallery.html">gallery</a>
            </li>
            <li>
              <a class="active" href="#">contact</a>
            </li>
            <a class="logo-header"></a>
            </a>
          </ul>

        </nav>

      </div>


    <div id="contact-us">
        <?php
            $anrede = $_REQUEST['anrede'];
            $mail = $_REQUEST['mail'];
            $name = $_REQUEST['name'];
            $nachname = $_REQUEST['nachname'];
            $nachricht = $_REQUEST['nachricht'];

            $empfaenger = "andreas.wiedl90@gmail.com";
            $absender = $mail;

            $betreffwebmaster = "Kontaktanfrage ($name)";
            $koerperwebmaster = "$name $nachname hat folgendende Kontaktanfrage gestellt: \n\n".
            "\n\n
            Kontaktdaten: \n
            \tName:   $anrede $name $nachname \n
            \teMail:  $mail \n
            \n\n" .
            $nachricht;

            $betreffkunde = "Ihre Kontaktanfrage bei Mamas Liebling";
            $koerperkunde = "Sie $name $nachname haben folgendende Kontaktanfrage gestellt: \n\n".
            "\n\n
            Kontaktdaten: \n
            \tName:   $anrede $name $nachname \n
            \teMail:  $mail \n
            \n\n" .
            $nachricht;

            $abgesandt = "<br /><h1>Kontaktbestaetigung</h1><p>Vielen Dank fuer ihre Anfrage<br><br><br></p>";

            mail("$empfaenger","$betreffwebmaster", "$koerperwebmaster\n", "FROM: $absender\n");
            mail("$mail","$betreffkunde", "$koerperkunde\n", "FROM: $absender\n");
            echo $abgesandt;


        ?>
    </div>



    <div id="footer">

      <h3>Mamas Liebling Tattoo Studio</h3>
      <div id="footer-datenschutz">
        <ul>
          <li>Impressum</li>
          <li>AGB</li>
          <li>Datenschutz</li>
        </ul>
      </div>
      <div id="social-media">
        <img src="../img/instagram.png" alt="fb"/>
        <img src="../img/facebook.png" alt="fb"/>

      </div>

    </div>


</body>

</html>
