export default {
  locale: {
    en: "Englisch",
    de: "Deutsch",
  },
  common: {
    button: {
      close: "Schliessen",
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
      'Die Umsetzung erfolgt durch das <a target="_blank" href="https://www.baloise.com/de/jobs/blog/rund-um-die-baloise/baloise-it-innovativ-wetten-dass.html">Innovations-Team</a> der Basler Versicherung.',
    first: "1. Finde und buche einen Parkplatz",
    second: "2. Parke so lange du willst",
    third: "3. Bezahle nur die genutzte Parkzeit",
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
      reserve: {
        label: "Jetzt reservieren",
        hint:
          "Du kannst bis zu einer Stunde kostenlos einen Parkplatz reservieren. Sobald du später auf “Tor öffnen” klickst, ist die Buchung kostenpflichtig.",
      },
      navigate: "navigieren",
    },
  },
  booking: {
    isLoading: {
      title: "Bitte warten",
      text: "Deine Buchung wird geladen...",
    },
    form: {
      appBarTitle: "Reservieren",
      subtitle: "Noch 2 Angaben und du hast es geschafft!",
      licensePlate: {
        hint:
          "Deine Buchung wird mit dem Kontrollschild verifiziert. Daher ist es zwingend notwendig, das korrekte Kontrollschild anzugeben, oder vor dem Parkvorgang zu aktualisieren.",
        label: "Kontrollschild",
      },
      mobile: {
        hint:
          "Damit wir deine Buchungsbestätigung per SMS senden und dich in Ausnahmesituationen kontaktieren können.",
        label: "Mobile Nummer",
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
        "Mit dem Klick auf “Reservation starten” akzeptierst du die AGB und Datenschutzrichtlinie von Smart Parking.",
      submit: "Reservation starten",
      alert: {
        title: "Reservation fehlgeschlagen",
        text:
          "Leider ist die Reservation fehlgeschlagen. Überprüfe deine Eingaben. <br /><br />Kann es sein, dass du bereits mit deiner Mobile Nummer eine Reservation/buchung am laufen hast.",
      },
    },
    verification: {
      appBarTitle: "SMS Verifikation",
      subtitle: "Bist Du es?",
      explanation:
        " Zu Deiner Sicherheit möchten wir verifizieren, dass Du es wirklich bist.",
      code: {
        hint:
          "Eine Textnachricht mit einem 6-stelligen Bestätigungscode wurde gerade an {mobile} gesendet.",
        label: "Bestätigungscode",
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
        text:
          "Wenn du auf “Starten” klickst, beginnt dein kostenpflichtiges Parken.<br/><br/>Du kannst parken, solange du willst.<br/>Denk daran, dass du nur während der Öffnungszeiten ins Parkhaus kommst.<br/><br/>Du bezahlst am Ende der Parkzeit.",
        agree: "Starten",
        disagree: "Zurück",
      },
      snackbar: {
        text: "Reservierung wurde erfolgreich beendet.",
      },
    },
    detail: {
      appBarTitle: "Deine Buchung",
      navigate: "ZUM PARKHAUS NAVIGIEREN",
      finish: {
        label: "PARKEN BEENDEN",
        hint:
          "Beende das Parken beim Zurückkehren zum Parkhaus. Du bezahlst, sobald du auf “Parken beenden” geklickt hast.",
      },
      openMainGateForTheFirstTimeHint:
        "Sobald du auf “Tor öffnen” klickst, startet die kostenpflichtige Parkzeit. Du bezahlst, sobald du auf “Parken beenden” geklickt hast.",
      gates: {
        main: {
          label: "TOR ÖFFNEN",
          hint: "",
        },
        pedestrian: {
          label: "FUSSGÄNGER-TOR ÖFFNEN",
          hint:
            "Wo sich der Fussgängereingang befindet, entnimmst du der Bilderreihe.",
        },
      },
      description: "Beschreibung",
      currentParkingTime: "Aktuelle Parkzeit",
      currentParkingCosts: "Aktueller Betrag",
      dialog: {
        title: "Bestätigung",
        text:
          "Bist du sicher, dass du den Parkplatz wieder freigeben möchtest?<br/><br/>Nach dem Beenden hast du keinen Zutritt zum Parkhaus mehr.<br/><br/>Beim Beenden wird der Parkplatz wieder freigegeben.",
        agree: "Beenden",
        disagree: "Zurück",
      },
    },
    payment: {
      appBarTitle: "Zur Kasse",
      title: "Abrechung",
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
      appBarTitle: "Bestätigung",
      title: "Vielen Dank für die Nutzung von Smart Parking",
      subtitle: "Wir wünschen dir eine gute Heimfahrt",
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
}
