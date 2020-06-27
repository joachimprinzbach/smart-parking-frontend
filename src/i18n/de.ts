export default {
  locale: {
    en: "Englisch",
    de: "Deutsch",
  },
  common: {
    button: {
      close: "Schliessen",
      next: "Weiter",
    },
    form: {
      required: "Das ist ein Pflichtfeld.",
      length: "Die Eingabe muss aus {amount} Zeichen bestehen.",
      numeric: "Es sind nur Zahlen erlaubt.",
      mobile: "Bitte gib eine gültige Mobile Nummer an.",
      licensePlate:
        "Bitte gib eine gültiges FZ-Kontrollschild an. Z.B. BS 123456",
    },
    date: {
      month: "{value} Monat",
      months: "{value} Monate",
      day: "{value} Tag",
      days: "{value} Tage",
      hour: "{value} Stunde",
      hours: "{value} Stunden",
      minutes: "{value} Min",
      minute: "{value} Min",
    },
  },
  app: {
    title: "Smart Parking",
  },
  home: {
    appBarTitle: "",
    motto: "“Einfach und bequem parken”",
    bets:
      'Die Umsetzung erfolgt durch das <a target="_blank" href="https://www.baloise.com/de/jobs/blog/rund-Um-die-baloise/baloise-it-innovativ-wetten-dass.html">Innovations-Team</a> der Basler Versicherungen.',
    first: "1. Finde und buche einen Parkplatz",
    second: "2. Parke so lange du willst",
    third: "3. Zahle nur die genutzte Parkzeit",
    paymentMethods: "Mögliche Zahlungsmethoden",
  },
  contact: {
    appBarTitle: "Kontakt",
    content:
      "<b>Basler Leben AG</b><br>Aeschengraben 21<br>Postfach 2275<br>CH-4002 Basel<br><br><b>Handelsregister Basel-Stadt</b><br>Nr. CH-270.3.000.377-5<br>UID: CHE-101.305.342<br>MWST-Nr.: CHE-116.301.152 MWST<br><br><b>Eidgenössische Finanzmarktaufsicht FINMA</b><br>Laupenstrasse 27<br>CH-3003 Bern<br><br>Hast Du Fragen oder benötigst Du Unterstützung?<br><br>Gerne sind wir von Montag bis Freitag jeweils von 8:00 bis 18:00 Uhr für Dich da!",
  },
  about: {
    appBarTitle: "Über uns",
    content:
      "Smart Parking ist ein Pilotprojekt der Basler Versicherungen AG rund um das Thema Parkplatz-Sharing. Dabei sollen Erfahrungen zum Angebot von Parkplätzen gewonnen werden. Das Projekt endet bei Widerruf.<br><br><b>Was ist die Idee?</b><ul><li>Wir ermöglichen das einfache Teilen von Parkplätzen.</li></ul><b>Wieso machen wir das?</b><ul><li>Parkplatzsuche ist lästig. Sie kostet Zeit und Nerven. Jeder Autofahrer kennt das.</li><li>Die Parkplätze in den Immobilien der Basler sind zu wenig ausgelastet.Das verursacht unnötige Kosten.</li><li>Der Suchverkehr ist vermeidbar und belastet die angespannte Situation in den Städten.</li></ul><b>Was ist der Plan?</b><ul><li>Wir wollen einen Prototypen und ein Minimum Viable Product entwickeln und auf Basis der Kundenfeedbacks zur Marktreife bringen.</li><li>In der nächsten Phase möchten wir die Vermarktung in der Schweiz vorbereiten, die Applikation fertig entwickeln und zusammen mit Partnern schweizweit ausrollen.</li><li>Wenn die Lösung schweizweit akzeptiert und verbreitet ist, wollen wir das Angebot auf ausgewählte und profitable europäische Ballungsräume ausweiten.</li></ul>",
  },
  terms: {
    appBarTitle: "Rechtliche Hinweise",
  },
  facility: {
    detail: {
      appBarTitle: "Picasso Platz",
      slots: "{amount} Plätze verfügbar",
      prices: "Preise",
      openingHours: "Öffnungszeiten",
      location: "Standort",
      booking: {
        title: "Bist du schon da? Dann buche direkt!",
        label: "Jetzt buchen",
        hint:
          'Wenn du auf "jetzt buchen" klickst, beginnt dein kostenpflichtiges Parken. Du bezahlst am Ende der Parkzeit.',
      },
      reserve: {
        title: "Parkplatz kostenlos für 60min reservieren?",
        label: "Jetzt reservieren",
        hint:
          "Du kannst bis zu einer Stunde kostenlos einen Parkplatz reservieren. Sobald du später auf “Tor öffnen” klickst, ist die Buchung kostenpflichtig.",
      },
      navigate: "navigieren",
    },
  },
  reservation: {
    form: {
      appBarTitle: "Reservieren",
    },
  },
  booking: {
    isLoading: {
      title: "Bitte warten",
      text: "Deine Buchung wird geladen...",
    },
    form: {
      appBarTitle: "Buchen",
      licensePlate: {
        hint:
          "Deine Buchung wird mit dem Kontrollschild verifiziert. Daher ist es zwingend notwendig, das korrekte Kontrollschild anzugeben, oder vor dem Parkvorgang zu aktualisieren.",
        label: "Kontrollschild",
      },
      mobile: {
        hint:
          "Damit wir deine Buchungsbestätigung per SMS senden und dich in Ausnahmesituationen kontaktieren können.",
        label: "Telefonnummer",
        submit: "Verifizieren",
      },
      prefixes: {
        label: "Vorwahl",
        hint: {
          ch: "Schweiz",
          de: "Deutschland",
          fr: "Frankreich",
        },
      },
      agb:
        "Mit dem Klick auf “starten” akzeptierst du die AGB und Datenschutinformationen.",
      submit: "starten",
      alert: {
        title: "Aktion fehlgeschlagen",
        text:
          "Überprüfe deine Eingaben. <br /><br />Kann es sein, dass du bereits mit deiner Mobile Nummer eine Reservation / Buchung am laufen hast.",
      },
      verification: {
        title: "Verifikation",
      },
      confirmation: {
        title: "Bestätigung",
        reservation: {
          hint:
            "Du kannst bis zu einer Stunde kostenlos einen Parkplatz reservieren. Sobald du später auf “Tor öffnen” klickst, ist die Buchung kostenpflichtig.",
          action: "Reservation starten",
        },
        booking: {
          hint:
            'Wenn du auf "Buchung starten" klickst, beginnt dein kostenpflichtiges Parken. Du bezahlst am Ende der Parkzeit.',
          action: "Buchung starten",
        },
      },
    },
    verification: {
      appBarTitle: "SMS Verifikation",
      subtitle: "Bist Du es?",
      explanation:
        " Zu Deiner Sicherheit möchten wir verifizieren, dass Du es wirklich bist.",
      code: {
        label: "Bestätigungscode",
      },
      mobile: {
        hint:
          "Bitte gebe deinen 6-stelligen Bestätigungscode, welche du per SMS bekommen hast, hier ein.",
      },
      next: "Weiter",
      submit: "Reservation starten",
      alert: {
        title: "Bestätigungscode ungültig!",
        text:
          "Ihre Eingabe war ungültig. Bitte versuch es erneut oder sende dir einen neuen Bestätigungscode zu.",
        button: "Code erneut senden",
      },
      snackbar: {
        text:
          "Ein Textnachricht mit einem neuen Bestätigungscode wurde dir zugesendet.",
      },
    },
    reservation: {
      alertTime:
        "Deine Reservation ist abgelaufen. Navigiere zurück zum Objekt und start eine neue Reservierung.",
      goBackToFacility: "Zurück zum Object",
      box: {
        title: "Dein Reservationsstatus",
        time: "Verbleibende Zeit",
        hint:
          "Sobald die Zeit abgelaufen ist, wird der für Dich reservierte Parkplatz wieder freigegeben.",
      },
      cancel: {
        label: "RESERVATION ABBRECHEN",
        hint:
          "Wenn Du die Reservation nicht mehr benötigst, breche sie bitte hier ab.",
      },
      dialog: {
        title: "Bestätigung",
        text: {
          money:
            "Wenn du auf “Starten” klickst, beginnt dein kostenpflichtiges Parken. Du bezahlst am Ende der Parkzeit.",
          time:
            "Du kannst parken, solange du willst.<br/>Denk daran, dass du nur während der Öffnungszeiten ins Parkhaus kommst.",
        },
        agree: "Starten",
        disagree: "Zurück",
      },
      snackbar: {
        text: "Reservierung wurde erfolgreich beendet.",
      },
    },
    detail: {
      appBarTitle: "Dein Parkplatz",
      navigate: "ZUM PARKHAUS NAVIGIEREN",
      finish: {
        label: "PARKEN BEENDEN",
        hint:
          "Beende das Parken beim Zurückkehren zum Parkhaus. Du bezahlst, sobald du auf “Parken beenden” geklickt hast.",
      },
      openMainGateForTheFirstTimeHint:
        "Sobald du auf “Tor öffnen” klickst, startet die kostenpflichtige Parkzeit. Du bezahlst, sobald du auf “Parken beenden” geklickt hast.",
      gates: {
        title: "Bist du schon da? Dann öffne das Tor!",
        main: {
          label: "TOR ÖFFNEN",
          hint: "",
        },
        pedestrian: {
          label: "FUSSGÄNGER-TOR ÖFFNEN",
          hint:
            "Wo sich der Fussgängereingang befindet, entnimmst du der Bilderreihe.",
        },
        success: "Tor öffnet sich",
        error:
          "Das Tor kann gerade nicht geöffnet werden. Bitte versuch es erneut oder kontaktier uns.",
      },
      description: "Beschreibung",
      currentParkingTime: "Aktuelle Parkzeit",
      currentParkingCosts: "Aktueller Betrag",
      dialog: {
        title: "Bestätigung",
        text:
          "Bist du sicher, dass du den Parkplatz wieder freigeben möchtest?<br/><br/>Nach dem Beenden hast du keinen Zutritt zum Parkhaus mehr.",
        agree: "Beenden",
        disagree: "Zurück",
      },
    },
    payment: {
      appBarTitle: "Abrechung",
      location: "Parkort",
      start: "Einfahrt",
      end: "Ausfahrt",
      duration: "Parkzeit",
      total: "Parkgebühren",
      tax: "Die MWST von 7.7% (CHF {value}) ist im Betrag inbegriffen.",
      submit: "Bezahlen",
      alert: {
        title: "Bezahlung fehlgeschlagen",
        text:
          "Leider ist die Bezahlung fehlgeschlagen. Versuchen es erneut oder kontaktier uns.",
      },
      isLoading: {
        title: "Bezahlung im Gange",
        text:
          "Die Zahlung wird überprüft. Bitte warten du wirst automatisch weitergeleitet.",
      },
    },
    confirmation: {
      appBarTitle: "Vielen Dank",
      title: "Wir wünschen dir <br/>eine gute Heimfahrt",
      receipt: {
        text: "Benötigst du eine Quittung?",
        button: "Quittung per SMS anfordern",
        success: "Quittung wurde erfolgreich per SMS versendet.",
        error:
          "Leider konnte die Quittung nicht versendet werden. Bitte melden dich beim Administrator.",
      },
      feedback: {
        text:
          "Wir freuen uns über ein kurzes Feedback zu deinem Erlebnis mit Smart Parking.",
        button: "Feedback geben",
      },
      linkToHome: "Zur Startseite zurück",
    },
    receipt: {
      title: "Quittung",
      navigate: { home: "Zurück zur Startseite" },
      text:
        'Solltest du Fragen haben, wende dich bitte an <a href="mailto:smart_parking@baloise.ch">smart_parking@baloise.ch</a>',
      taxLabel: "Mehrwertsteuer-Nr.",
      greets: "Freundliche Grüsse Smart Parking",
    },
  },
  notFound: {
    title: "Oops!",
    subtitle: "Es tut uns Leid, diese Seite ist nicht verfügbar",
    content:
      "Buchung nicht gefunden oder einem fehlerhaften Link gefolgt? Kehre zur Startseite zurück und versuch es erneut oder überprüfe deine SMS Nachrichten.",
    linkToHome: "Zur Startseite zurück",
  },
  admin: {
    logout: "Abmelden",
    title: "Admin Dashboard",
    dashboard: {
      title: "Park Objekte",
    },
    navigate: {
      back: "Zurück",
    },
    login: {
      subtitle: "Admin Anmeldung",
      alert: {
        title: "Anmeldung fehlgeschlagen",
        text: "Benutzername oder Passwort ist nicht gültig.",
      },
      username: { label: "Benutzername" },
      password: { label: "Passwort" },
      submit: "Anmelden",
    },
    table: {
      title: "Buchungen",
      search: "Suchen",
      row: {
        title: "Buchungdetails",
      },
      filter: {
        current: "Aktuelle",
        payed: "Bezahlte",
        deleted: "Gelöschte",
      },
      action: {
        detail: "Details",
      },
      detail: {
        id: "Datenbank ID",
        refno: "Referenznummer",
        verifiedAt: "Reservationsstart",
        startedAt: "Buchungsstart",
        stoppedAt: "Buchungsstop",
        payedAt: "Zahlungsdatum",
        link: "Link zur App",
      },
    },
    facility: {
      openGate: {
        success: "Das Tor geht auf",
        error: "Das Tor geht nicht auf",
      },
      capacity: "{free} von {capacity} Plätzen verfügbar",
    },
    booking: {
      state: {
        verified: "Reservation",
        started: "Buchung",
        stopped: "In Bezahlung",
        payed: "Bezahlt",
        deleted: "Gelöscht",
      },
    },
  },
}
