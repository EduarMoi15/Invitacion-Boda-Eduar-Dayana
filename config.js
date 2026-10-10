/*
==========================================================
    CONFIGURACIÓN - BODA EDUAR & DAYANA
==========================================================

    Este archivo contiene toda la información editable
    de la invitación.

    Si posteriormente quieres cambiar una fecha,
    fotografía, enlace, nombre, etc., podrás hacerlo
    desde aquí sin modificar el HTML.
==========================================================
*/

const CONFIG = {

    // =====================================================
    // NOVIOS
    // =====================================================

    wedding: {

        groom: "Eduar",

        bride: "Dayana",

        fullNames: "Eduar & Dayana",

        initials: "E & D",

        date: "2026-12-13T16:00:00",

        dateText: "13 de diciembre de 2026",

        verse: "Todo lo puedo en Cristo que me fortalece",

        verseReference: "Filipenses 4:13"

    },


    // =====================================================
    // IMÁGENES
    // =====================================================

    images: {

        // Imagen utilizada como fondo de la portada
        background: "assets/img/fondo.jpg",

        // Fotografía principal de los novios
        cover: "assets/img/portada.jpg",

        // Fotografías adicionales
        gallery: [

            "assets/nosotros/foto1.jpg",

            "assets/nosotros/foto2.jpg",

            "assets/nosotros/foto3.jpg"

        ]

    },


    // =====================================================
    // MÚSICA
    // =====================================================

    music: {

        file: "assets/audio/musica.mp3",

        // Volumen entre 0 y 1
        volume: 0.35,

        // Repetir cuando termine
        loop: true

    },


    // =====================================================
    // CEREMONIA Y RECEPCIÓN
    // =====================================================

    event: {

        place: "Quinta Sol y Luna",

        city: "Chalchuapa, Santa Ana",

        ceremonyTime: "4:00 PM",

        ceremonyTime24: "16:00",

        receptionTime: "6:00 PM",

        receptionTime24: "18:00",

        address: "X8P5+9WM, Chalchuapa, Santa Ana"

    },


    // =====================================================
    // MAPAS
    // =====================================================

    location: {

        googleMaps:
            "https://maps.app.goo.gl/cPcdnsnV3a5ADszg9",

        waze:
            "https://www.waze.com/ul?q=Quinta%20Sol%20y%20Luna%2C%20Chalchuapa%2C%20Santa%20Ana"

    },


    // =====================================================
    // PADRES
    // =====================================================

    parents: {

        bride: {

            father: "Ernesto Osorio",

            mother: "Gloria de Osorio"

        },

        groom: {

            father: "",

            mother: "Rosa Elizabeth Anzora"

        }

    },


    // =====================================================
    // ÁLBUM COLABORATIVO
    // =====================================================

    album: {

        url:
            "https://photos.app.goo.gl/GWLerRCGW3UwDz9D7",

        qr:
            ""

    },


    // =====================================================
    // CÓDIGO DE VESTIMENTA
    // =====================================================

    dressCode: {

        title: "Elegante / Formal",

        mainColors: [

            "Blanco",

            "Verde Olivo",

            "Beige",

            "Rosa Pastel",

            "Celeste"

        ],

        avoid: [

            "Negro",

            "Blanco como color predominante"

        ]

    },


    // =====================================================
    // CONFIGURACIÓN RSVP
    // =====================================================

    rsvp: {

        enabled: true,

        // Este será el máximo predeterminado mientras
        // no se haya identificado una invitación.

        defaultMaxGuests: 2,

        // URL que posteriormente utilizaremos para
        // enviar los datos a Google Sheets mediante
        // Google Apps Script.

        googleScriptUrl: ""

    },


    // =====================================================
    // CALENDARIO
    // =====================================================

    calendar: {

        title: "Boda Eduar & Dayana",

        description:
            "Celebración de la boda de Eduar y Dayana",

        location:
            "Quinta Sol y Luna, Chalchuapa, Santa Ana"

    }

};