<!DOCTYPE HTML>
<html>

<head>
    <title>
        Generate a n-digit number using JavaScript
    </title>
    <style>
        body {
            text-align: center;
        }

        h1 {
            color: green;
        }

        #geeks {
            color: green;
            font-size: 29px;
            font-weight: bold;
        }
    </style>
</head>

<body style="text-align:center;">
    <p>
        Click on the button to generate
          random 6 digit number
    </p>
    <button onclick="gfg();">
        click here
    </button>
    <p id="geeks">
    </p>
    <script>
        let down = document.getElementById('geeks');

        function gfg() {
            down.innerHTML = ("" + Math.random()).substring(2, 8);
        } 
    </script>
</body>

</html>
