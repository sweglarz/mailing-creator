{
    const imageElement = document.querySelector(".js-creationImage");

    const checkSizeOfUploadedImage = () => {
        const imageBox = document.querySelector(".js-box");

        imageElement.addEventListener("load", () => {
            if (imageElement.height > 700) {
                imageBox.classList.add("creation__box--biggerImage");
            } else {
                imageBox.classList.remove("creation__box--biggerImage")
            }
        });
    }

    const addNewImage = (event) => {
        event.preventDefault();
        const inputElement = document.querySelector(".js-creationInput");
        const [file] = inputElement.files;
        if (file) {
            imageElement.src = URL.createObjectURL(file)
        };
        checkSizeOfUploadedImage();
    }

    const creationInit = () => {
        const creationForm = document.querySelector(".js-creationForm");
        creationForm.addEventListener("submit", addNewImage);
    }
    creationInit();

    const chooseBase = (base, urlHolder, altHolder) => {

        if (base.value === "wp") {
            return htmlString = `
<html>
<head>
    <title>WP</title>
    <meta http-equiv="Content-Type" content="text/html" charset="ISO-8859-2">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <table max-width="600" border="0" align="center" cellpadding="0" cellspacing="0" id="Table_01">
            <tr>
                <td><a href="<KLIK>${urlHolder}</KLIK>" target="_blank">
                    <img src="cid:1.jpg" alt="${altHolder}"
                    title="&#8658; Kliknij, by dowiedziec sie wiecej! &#8656;"
                    style="display:block; max-width: 600px; width: 100%;" border="0"></a>
                </td>
            </tr>
        </table>
    </body>
</html>`
        } else if (base.value === "onet") {
            return htmlString =
                `<html>
<head>
    <title>ONET</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <table max-width="600" border="0" align="center" cellpadding="0" cellspacing="0" id="Table_01">
            <tr>
                <td><a href="${urlHolder}" target="_blank">
                    <img src="1.jpg" alt="${altHolder}"
                    title="&#8658; Kliknij, by dowiedziec sie wiecej! &#8656;"
                    style="display:block; max-width: 600px; width: 100%;" border="0"></a>
                </td>
            </tr>
        </table>
    </body>
</html>`
        } else {
            return htmlString =
                `<html>
<head>
    <title>INTERIA</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <table max-width="600" border="0" align="center" cellpadding="0" cellspacing="0" id="Table_01">
            <tr>
                <td><a href="${urlHolder}" target="_blank">
                    <img src="1.jpg" alt="${altHolder}"
                    title="&#8658; Kliknij, by dowiedziec sie wiecej! &#8656;"
                    style="display:block; max-width: 600px; width: 100%;" border="0"></a>
                </td>
            </tr>
        </table>
    </body>
</html>`
        }
    }

    const prepareImage = () => {
        let imagePath = imageElement.src;
        let fileName = "1.jpg";

        saveAs(imagePath, fileName);
    }

    const prepareIndex = () => {
        const urlHolder = document.querySelector(".js-url").value;
        const altHolder = document.querySelector(".js-alt").value;
        const base = document.querySelector(".js-base");
        chooseBase(base, urlHolder, altHolder);

        const blob = new Blob([htmlString], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "index.html");
    }

    const downloadCreation = () => {
        prepareImage()
        prepareIndex();
    }

    const showMessage = () => {
        const alert = document.querySelector(".js-alert");
        if (imageElement.src === "https://sweglarz.github.io/mailing-creator/img/background.jpg") {
            alert.textContent = "Musisz przesłać kreację!"
        } else {
            alert.textContent = "";
            downloadCreation();
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        showMessage();
    }

    const settingsInit = () => {
        const settingsForm = document.querySelector(".js-settingsForm");
        settingsForm.addEventListener("submit", onFormSubmit);
    }
    settingsInit();
}