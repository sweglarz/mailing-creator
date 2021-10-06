{
    const imageElement = document.querySelector(".js-creationImage");

    const showTextOverTheCreation = (yourText) => {
        const creationText = document.querySelector(".js-imageText");
        creationText.innerText = `${yourText}`
        creationText.innerText !== "" ? creationText.classList.add("creation__imageText") : creationText.classList.remove("creation__imageText");
    };

    const yourTextOverTheCreation = () => {
        const yourText = document.querySelector(".js-text").value;
        yourText.value !== "" ? showTextOverTheCreation(yourText) : "";
    }

    const checkSizeOfUploadedImage = () => {
        const imageBox = document.querySelector(".js-box");

        imageElement.addEventListener("load", () => {
            if (imageElement.height > 450) {
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
        yourTextOverTheCreation()
    }

    const creationInit = () => {
        const creationForm = document.querySelector(".js-creationForm");
        creationForm.addEventListener("submit", addNewImage);
    }
    creationInit();

    const chooseBase = (base, urlHolder, altHolder, yourText) => {

        if (base.value === "wp") {
            htmlString = `
<html>
<head>
    <title>WP</title>
    <meta http-equiv="Content-Type" content="text/html" charset="ISO-8859-2">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <h1 style="display: block; font-size: 18px; max-width: 580px; margin: 0 auto; padding: 20px 10px; text-align: center; font-weight: 400">${yourText}</h1>
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
            htmlString = `
<html>
<head>
    <title>ONET</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <h1 style="display: block; font-size: 18px; max-width: 580px; margin: 0 auto; padding: 20px 10px; text-align: center; font-weight: 400">${yourText}</h1>
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
            htmlString = `
<html>
<head>
    <title>INTERIA</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</head>
    <body>
        <h1 style="display: block; font-size: 18px; max-width: 580px; margin: 0 auto; padding: 20px 10px; text-align: center; font-weight: 400">${yourText}</h1>
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
        const yourText = document.querySelector(".js-text").value;

        chooseBase(base, urlHolder, altHolder, yourText);
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