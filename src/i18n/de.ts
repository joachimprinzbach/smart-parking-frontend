export default {
  locale: {
    en: "Englisch",
    de: "Deutsch",
  },
  common: {
    form: {
      required: "Das ist ein Pflichtfeld.",
      length: "Die Eingabe muss aus {amount} Zeichen bestehen.",
      numeric: "Es sind nur Zahlen erlaubt.",
      mobile: "Bitte gib eine gültige Mobile Nummer an. Z.B. 0041 123 45 67",
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
    first: "1. Finde und buche einen Parkplatz",
    second: "2. Parke so lange du willst",
    third: "3. Bezahle nur die genutzte Parkzeit",
    paymentMethods: "Mögliche Zahlungsmethoden",
  },
  contact: {
    appBarTitle: "Kontakt",
    content:
      "Hast Du Fragen oder benötigst Du Unterstützung?<br><br>Gerne sind wir Mo - Fr jeweils von 8:00 - 18:00 für Dich da!",
  },
  about: {
    appBarTitle: "Über uns",
    content:
      "Smart Parking ist ein Kick-Box-Projekt der Basler rund um das Thema Parkplatz-Sharing, das sich momentan in der Bluebox-Phase befindet. Es sollen damit Erfahrungen rund um das Angebot von Parkplätzen gewonnen werden. Es endet bei Widerruf.",
  },
  terms: {
    appBarTitle: "Rechtliche Hinweise",
  },
  object: {
    detail: {
      appBarTitle: "Picasso Platz",
      slots: "{amount} Plätze verfügbar",
      prices: "Preise",
      openingHours: "Öffnungszeiten",
      book: "JETZT BUCHEN",
      navigate: "NAVIGIEREN",
    },
  },
  booking: {
    form: {
      appBarTitle: "Buchen",
      subtitle: "Noch 2 Angaben und du hast es geschafft!",
      licensePlate: {
        hint:
          "Deine Buchung wird mit dem Kontrollschild verifiziert. Daher ist es zwingend notwendig, das korrekte Kontrollschild anzugeben, oder vor dem Parkvorgang zu aktualisieren.",
        label: "Kontrollschild",
      },
      mobile: {
        hint:
          "Damit wir deine Buchungsbestätigung per SMS senden können und wir in Ausnahmesituationen dich kontaktieren können.",
        label: "Mobile Nummer",
      },
      agb:
        "Mit dem Starten akzeptierst du die AGB und Datenschutzrichtlinie von Smart Parking.",
    },
    verification: {
      appBarTitle: "SMS Verifikation",
      subtitle: "Bist du es?",
      explanation:
        " Zu deiner Sicherheit möchte wir sicherstellen, dass du es wirklich bist.",
      token: {
        hint:
          "Eine Textnachricht mit einem 6-stelligen Bestätigungscode wurde gerade an {mobile} gesendet",
        label: "Bestätigungscode",
      },
      next: "Weiter",
      submit: "Buchung starten",
      dialog: {
        title: "Bestätigung",
        text:
          "Wenn du auf “Start” klickst läuft die Parkuhr!<br/>Parke solange du willst.<br/><br/>Denk daran, dass du nur während der Öffnungszeiten ins Parkhaus kommst.<br/><br/>Die Information zum Zutritt, sowie das Beenden der Parkzeit wird dir per SMS zu gesendet.<br/>Du bezahlst am Ende der Parkzeit.",
        agree: "Buchung starten",
        disagree: "Zurück",
      },
    },
    detail: {
      appBarTitle: "Deine Buchung",
      navigate: "NAVIGIEREN",
      openGate: "TOR ÖFFNEN",
      finish: "PARKEN BEENDEN",
      description: "Beschreibung",
      currentParkingTime: "Aktuelle Parkzeit",
      currentParkingCosts: "Aktueller Betrag",
      finishHint: "Beende das Parken beim Zurückkehren zum Parkhaus.",
      dialog: {
        title: "Bestätigung",
        text:
          "Bist du sicher, dass du den Parkplatz wieder freigeben möchtest?<br/><br/>Nach dem Beenden hast du kein Zutritt zum Parkhaus mehr.<br/><br/>Beim Beenden wird der Parkplatz wieder freigegeben.",
        agree: "Beenden",
        disagree: "Zurück",
      },
    },
    payment: {
      appBarTitle: "Zur Kasse",
      start: "Einfahrt",
      end: "Ausfahrt",
      duration: "Parkzeit",
      total: "Betrag",
    },
    confirmation: {
      appBarTitle: "Bestätigung",
    },
  },
}
