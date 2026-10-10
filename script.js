/* =========================================================
   BODA EDUAR & DAYANA
   SCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("💚 Sitio Boda Eduar & Dayana iniciado");


    /* =====================================================
       ELEMENTOS PRINCIPALES
       ===================================================== */

    const envelopeScreen =
        document.getElementById("envelopeScreen");

    const envelope =
        document.getElementById("envelope");

    const openInvitation =
        document.getElementById("openInvitation");

    const invitation =
        document.getElementById("invitation");

    const music =
        document.getElementById("backgroundMusic");


    /* =====================================================
       ESTADO INICIAL
       ===================================================== */

    document.body.classList.add("locked");

    if (invitation) {
        invitation.classList.remove("visible");
    }


    /* =====================================================
       ABRIR SOBRE
       ===================================================== */

    if (openInvitation) {

        openInvitation.addEventListener("click", () => {

            console.log("💌 Sello presionado");


            /* ---------------------------------------------
               Abrir sobre
               --------------------------------------------- */

            if (envelope) {
                envelope.classList.add("opened");
            }


            /* ---------------------------------------------
               MÚSICA
               --------------------------------------------- */

            if (music) {

                console.log(
                    "🎵 Elemento de música encontrado"
                );

                music.volume = 0.45;
                music.loop = true;
                music.currentTime = 0;

                music.play()
                    .then(() => {

                        console.log(
                            "🎵 Música iniciada correctamente"
                        );

                    })
                    .catch((error) => {

                        console.error(
                            "❌ No se pudo reproducir la música:",
                            error
                        );

                    });

            }


            /* ---------------------------------------------
               Desactivar sello
               --------------------------------------------- */

            openInvitation.style.pointerEvents =
                "none";


            /* ---------------------------------------------
               SECUENCIA DE APERTURA
               --------------------------------------------- */

            setTimeout(() => {

                console.log(
                    "💌 Tarjeta visible"
                );

            }, 1800);


            setTimeout(() => {

                if (envelopeScreen) {
                    envelopeScreen.classList.add(
                        "opened"
                    );
                }

            }, 5000);


            setTimeout(() => {

                document.body.classList.remove(
                    "locked"
                );

                if (invitation) {
                    invitation.classList.add(
                        "visible"
                    );
                }

                console.log(
                    "💍 Invitación abierta"
                );

            }, 5400);

        });

    }


    /* =====================================================
       CUENTA REGRESIVA
       13 DE DICIEMBRE DE 2026 - 4:00 PM
       ===================================================== */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    function updateCountdown() {

        const weddingDate =
            new Date("2026-12-13T16:00:00");

        const now =
            new Date();

        const difference =
            weddingDate.getTime() -
            now.getTime();


        if (difference <= 0) {

            if (daysElement)
                daysElement.textContent = "00";

            if (hoursElement)
                hoursElement.textContent = "00";

            if (minutesElement)
                minutesElement.textContent = "00";

            if (secondsElement)
                secondsElement.textContent = "00";

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference /
                (1000 * 60 * 60)) % 24
            );


        const minutes =
            Math.floor(
                (difference /
                (1000 * 60)) % 60
            );


        const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


        if (daysElement)
            daysElement.textContent =
                String(days).padStart(2, "0");


        if (hoursElement)
            hoursElement.textContent =
                String(hours).padStart(2, "0");


        if (minutesElement)
            minutesElement.textContent =
                String(minutes).padStart(2, "0");


        if (secondsElement)
            secondsElement.textContent =
                String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       GOOGLE APPS SCRIPT
       ===================================================== */

    const APPS_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwDnFq1mjnFw745D2xe_ONfMNmmTKsqZrU0qXCzltNuJT6f-Wu1i1snLuP9h6q-VBH3/exec";


    /* =====================================================
       ELEMENTOS RSVP
       ===================================================== */

    const rsvpForm =
        document.getElementById("rsvpForm");

    const maxGuestsElement =
        document.getElementById("maxGuests");

    const attendanceYes =
        document.getElementById("attendanceYes");

    const attendanceNo =
        document.getElementById("attendanceNo");

    const guestCount =
        document.getElementById("guestCount");

    const guestNames =
        document.getElementById("guestNames");

    const rsvpFeedback =
        document.getElementById("rsvpFeedback");


    /* =====================================================
       IDENTIFICACIÓN DE INVITACIÓN
       ===================================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    /*
       IMPORTANTE:

       La invitación debe abrirse así:

       index.html?t=FAMILIA-MARTINEZ&max=6

       t   = ID único de invitación
       max = máximo de personas
    */

    const invitationId =
        urlParams.get("t") ||
        "SIN-ID";


    let maxGuests =
        parseInt(
            urlParams.get("max") || "2",
            10
        );


    /* =====================================================
       VALIDAR MÁXIMO DE INVITADOS
       ===================================================== */

    if (
        isNaN(maxGuests) ||
        maxGuests < 1
    ) {

        maxGuests = 2;

    }


    if (maxGuests > 20) {

        maxGuests = 20;

    }


    console.log(
        "💌 ID de invitación:",
        invitationId
    );

    console.log(
        "👥 Máximo de invitados:",
        maxGuests
    );


    /* =====================================================
       MOSTRAR MÁXIMO DE INVITADOS
       ===================================================== */

    if (maxGuestsElement) {

        maxGuestsElement.textContent =
            maxGuests;

    }


    /* =====================================================
       GENERAR SELECT DE CANTIDAD
       ===================================================== */

    function populateGuestCount() {

        if (!guestCount) {
            return;
        }

        guestCount.innerHTML = "";


        const defaultOption =
            document.createElement("option");

        defaultOption.value = "";

        defaultOption.textContent =
            "Selecciona una cantidad";

        defaultOption.disabled = true;

        defaultOption.selected = true;

        guestCount.appendChild(
            defaultOption
        );


        for (
            let i = 1;
            i <= maxGuests;
            i++
        ) {

            const option =
                document.createElement(
                    "option"
                );

            option.value = i;

            option.textContent =
                `${i} ${
                    i === 1
                        ? "persona"
                        : "personas"
                }`;

            guestCount.appendChild(
                option
            );

        }

    }


    populateGuestCount();


    /* =====================================================
       GENERAR CAMPOS DE NOMBRES
       ===================================================== */

    function renderGuestInputs(count) {

        if (!guestNames) {
            return;
        }

        guestNames.innerHTML = "";


        for (
            let i = 1;
            i <= count;
            i++
        ) {

            const wrapper =
                document.createElement(
                    "div"
                );

            wrapper.className =
                "guest-name-field";


            const label =
                document.createElement(
                    "label"
                );

            label.setAttribute(
                "for",
                `guest_${i}`
            );

            label.textContent =
                `Nombre invitado ${i}`;


            const input =
                document.createElement(
                    "input"
                );

            input.type = "text";

            input.id =
                `guest_${i}`;

            input.name =
                `guest_${i}`;

            input.className =
                "luxury-input";

            input.required = true;

            input.maxLength = 100;

            input.autocomplete = "name";

            input.placeholder =
                "Nombre y apellido";


            wrapper.appendChild(label);

            wrapper.appendChild(input);

            guestNames.appendChild(
                wrapper
            );

        }

    }


    /* =====================================================
       CAMBIO DE CANTIDAD
       ===================================================== */

    if (guestCount) {

        guestCount.addEventListener(
            "change",
            () => {

                const count =
                    parseInt(
                        guestCount.value,
                        10
                    );


                if (
                    !isNaN(count) &&
                    count >= 1 &&
                    count <= maxGuests
                ) {

                    renderGuestInputs(
                        count
                    );

                }

            }
        );

    }


    /* =====================================================
       ESTADO DE ASISTENCIA
       ===================================================== */

    let attending = "yes";


    /* =====================================================
       SÍ ASISTIRÉ
       ===================================================== */

    if (attendanceYes) {

        attendanceYes.addEventListener(
            "click",
            () => {

                attending = "yes";


                attendanceYes.classList.add(
                    "active"
                );


                if (attendanceNo) {

                    attendanceNo.classList.remove(
                        "active"
                    );

                }


                if (guestCount) {

                    guestCount.disabled =
                        false;

                    guestCount.required =
                        true;

                }


                if (rsvpFeedback) {

                    rsvpFeedback.hidden =
                        true;

                }


                console.log(
                    "✅ Invitado confirmó asistencia"
                );

            }
        );

    }


    /* =====================================================
       NO PODREMOS ASISTIR
       ===================================================== */

    if (attendanceNo) {

        attendanceNo.addEventListener(
            "click",
            () => {

                attending = "no";


                attendanceNo.classList.add(
                    "active"
                );


                if (attendanceYes) {

                    attendanceYes.classList.remove(
                        "active"
                    );

                }


                if (guestCount) {

                    guestCount.value = "";

                    guestCount.disabled =
                        true;

                    guestCount.required =
                        false;

                }


                if (guestNames) {

                    guestNames.innerHTML =
                        "";

                }


                if (rsvpFeedback) {

                    rsvpFeedback.hidden =
                        true;

                }


                console.log(
                    "❌ Invitado indicó que no asistirá"
                );

            }
        );

    }


    /* =====================================================
       MENSAJE DE FEEDBACK
       ===================================================== */

    function showRSVPFeedback(
        message,
        type
    ) {

        if (!rsvpFeedback) {
            return;
        }

        rsvpFeedback.textContent =
            message;

        rsvpFeedback.className =
            `rsvp-feedback ${type}`;

        rsvpFeedback.hidden =
            false;

    }


    /* =====================================================
       IFRAME PARA ENVÍO
       ===================================================== */

    const rsvpIframe =
        document.createElement(
            "iframe"
        );

    rsvpIframe.name =
        "rsvpSubmitTarget";

    rsvpIframe.style.display =
        "none";

    document.body.appendChild(
        rsvpIframe
    );


    /* =====================================================
       ENVÍO RSVP
       ===================================================== */

    if (rsvpForm) {

        rsvpForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /* =========================================
                   VARIABLES
                   ========================================= */

                let count = 0;

                let names = [];


                /* =========================================
                   VALIDAR ASISTENCIA
                   ========================================= */

                if (
                    attending === "yes"
                ) {

                    count =
                        parseInt(
                            guestCount?.value,
                            10
                        );


                    if (
                        !count ||
                        count < 1 ||
                        count > maxGuests
                    ) {

                        showRSVPFeedback(
                            "Selecciona cuántas personas asistirán.",
                            "error"
                        );

                        return;

                    }


                    const inputs =
                        guestNames
                            ? guestNames.querySelectorAll(
                                'input[name^="guest_"]'
                            )
                            : [];


                    names =
                        Array.from(
                            inputs
                        )
                        .map(
                            input =>
                                input.value.trim()
                        );


                    if (
                        names.length !== count ||
                        names.some(
                            name => !name
                        )
                    ) {

                        showRSVPFeedback(
                            "Completa el nombre de cada persona que asistirá.",
                            "error"
                        );

                        return;

                    }

                }


                /* =========================================
                   MENSAJE
                   ========================================= */

                const messageElement =
                    document.getElementById(
                        "message"
                    );


                const message =
                    messageElement
                        ? messageElement.value.trim()
                        : "";


                /* =========================================
                   DATOS
                   ========================================= */

                const data = {

                    invitationId:
                        invitationId,

                    maxGuests:
                        maxGuests,

                    attending:
                        attending,

                    guestCount:
                        count,

                    names:
                        JSON.stringify(
                            names
                        ),

                    message:
                        message

                };


                console.log(
                    "📤 Datos que serán enviados:",
                    data
                );


                /* =========================================
                   BOTÓN
                   ========================================= */

                const submitButton =
                    rsvpForm.querySelector(
                        'button[type="submit"]'
                    );


                const originalText =
                    submitButton
                        ? submitButton.textContent
                        : "";


                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.textContent =
                        "ENVIANDO...";

                }


                /* =========================================
                   CREAR FORMULARIO
                   ========================================= */

                const postForm =
                    document.createElement(
                        "form"
                    );


                postForm.method =
                    "POST";

                postForm.action =
                    APPS_SCRIPT_URL;

                postForm.target =
                    "rsvpSubmitTarget";

                postForm.style.display =
                    "none";


                /* =========================================
                   AGREGAR DATOS
                   ========================================= */

                Object.keys(data).forEach(
                    key => {

                        const input =
                            document.createElement(
                                "input"
                            );

                        input.type =
                            "hidden";

                        input.name =
                            key;

                        input.value =
                            data[key];

                        postForm.appendChild(
                            input
                        );

                    }
                );


                document.body.appendChild(
                    postForm
                );


                /* =========================================
                   ENVIAR A GOOGLE APPS SCRIPT
                   ========================================= */

                postForm.submit();


                /* =========================================
                   MENSAJE SEGÚN RESPUESTA
                   ========================================= */

                setTimeout(
                    () => {

                        if (
                            attending === "yes"
                        ) {

                            showRSVPFeedback(
                                "¡Gracias! Hemos recibido tu confirmación de asistencia. 💚",
                                "success"
                            );

                        } else {

                            showRSVPFeedback(
                                "Gracias por avisarnos. Lamentamos que no puedan acompañarnos, pero agradecemos mucho que nos lo hayan hecho saber. 💚",
                                "success"
                            );

                        }


                        /* -------------------------------
                           LIMPIAR FORMULARIO
                           ------------------------------- */

                        rsvpForm.reset();


                        if (guestNames) {

                            guestNames.innerHTML =
                                "";

                        }


                        if (guestCount) {

                            guestCount.disabled =
                                false;

                            guestCount.required =
                                true;

                        }


                        if (attendanceYes) {

                            attendanceYes.classList.add(
                                "active"
                            );

                        }


                        if (attendanceNo) {

                            attendanceNo.classList.remove(
                                "active"
                            );

                        }


                        attending =
                            "yes";


                        if (submitButton) {

                            submitButton.disabled =
                                false;

                            submitButton.textContent =
                                originalText;

                        }


                        postForm.remove();

                    },
                    1500
                );

            }
        );

    }

});