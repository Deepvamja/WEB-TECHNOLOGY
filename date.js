<!DOCTYPE HTML>
<html>

<head>
    <title>
        How to Check Input Date is Equal
        to Today’s Date or not using
        JavaScript?
    </title>

    <style>
        #geeks {
            color: green;
            font-size: 29px;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <b>
        Type the date in given format
        and <br>check if it is same as
        today's date or not.
    </b>

    <br><br>

    Type date: <input id="date" placeholder="mm/dd/yyyy" />
    <br><br>

    <button onclick="gfg();">
        click here
    </button>

    <p id="geeks"></p>

    <script>
        let down = document.getElementById('geeks');

        function gfg() {
            let date =
                document.getElementById('date').value;

            let inpDate = new Date(date);
            let currDate = new Date();

            if (inpDate.setHours(0, 0, 0, 0) ==
                currDate.setHours(0, 0, 0, 0)) {
                down.innerHTML =
                    "The input date is today's date";
            }
            else {
                down.innerHTML = "The input date is"
                    + " different from today's date";
            }
        }
    </script>
</body>

</html>
