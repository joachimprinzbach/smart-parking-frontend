<template>
  <v-container class="terms">
    <h1>Unsere allgemeinen Geschäftsbedingungen</h1>
    <br />
    <h2>1. Zweck/Geltungsbereich</h2>
    <p>
      1 Smart Parking ist eine Dienstleistung, über welche man Parkplätze der
      Basler Leben AG (nachfolgend Basler) in den von der Basler bestimmten
      Gebäuden mieten kann. Die vorliegenden AGB gelten als integrierender
      Vertragsbestandteil des Mietverhältnisses.
    </p>
    <h2>2. Allgemeine Bestimmungen</h2>
    <p>
      1 In den Gebäuden des vermieteten Parkplatzes gelten, wenn nicht
      abweichend geregelt, das eidgenössische Strassenverkehrsgesetz (SVG) vom
      19. Dezember 1958 und die entsprechenden Verordnungen.
    </p>
    <h2>3. Nutzungsvorschriften</h2>
    <p>
      1 Fahrzeuge dürfen nur innerhalb der durch den Nutzer reservierten und
      durch die Basler bestimmten Parkfelder innerhalb der Markierung abgestellt
      werden. Nach Ende der Mietzeit sind die Parkfelder unverzüglich
      freizugeben. Widerrechtlich oder verkehrsbehindernd parkierte Fahrzeuge
      können gebührenpflichtig weggeschafft oder blockiert werden.
    </p>
    <p>
      2 Das unnötige Verweilen in den Parkhäusern sowie jede sachfremde
      Benutzung der Parkfelder und Einrichtungen (z.B. Lagern von Waren,
      Reparieren oder Waschen von Autos, Verursachen von Verunreinigungen,
      Befahren mit Spiel- und Sportgeräten) sind untersagt.
    </p>
    <p>
      3 Das Verteilen von Werbematerialien und das Plakatieren sind verboten.
    </p>
    <p>4 Das Rauchen in den Parkhäusern ist verboten.</p>
    <p>
      5 Den Weisungen der Basler sowie deren Verwaltung, ist Folge zu leisten.
      Durch das Reservieren eines Parkplatzes akzeptiert der Mieter die jeweils
      für das Einstellhalle anwendbare Hausordnung.
    </p>
    <p>
      6 Die Basler resp. die Verwaltung der Einstellhalle ist berechtigt, die
      ihr infolge Missachtung dieser Vorschriften entstehenden Aufwände den
      Verursacherinnen oder den Verursachern zu belasten.
    </p>
    <h2>4. Reservieren und Buchen</h2>
    <p>
      1 Der Nutzer stellt eine Reservationsanfrage für einen definierten
      Zeitraum in der gewünschten Einstellhalle. Der Nutzer hat mit der
      Reservationsanfrage keinen Anspruch auf einen Parkplatz.
    </p>
    <p>
      2 Falls ein Parkplatz zur gewünschten Zeit vorhanden ist, erhält der
      Nutzer eine Reservationsbestätigung für einen bestimmten Parkplatz für den
      gewählten Zeitraum. Wenn die Reservationsbestätigung auf einen festen
      Parkplatz mit Parkplatznummer verweist, ist diese bindend. Ein Parkieren
      ausserhalb dieses Parkplatzes ist nicht gestattet.
    </p>
    <p>
      3 Die Basler übernimmt keinerlei Haftung für die Verfügbarkeit des
      Parkplatzes und allfällige damit verbundene Folgekosten. Dies gilt
      insbesondere, wenn dieser widerrechtlich belegt ist. Bei Verfügbarkeit und
      nach Rücksprache mit der Basler kann der Nutzer einen Ausweichparkplatz
      reservieren.
    </p>
    <p>4 Unfälle mit Personenschäden sind der Polizei zu melden.</p>
    <p>
      5 Beschädigungen und Defekte in den Einstellhallen und ihrer Einrichtungen
      (Schranken, Kassen, Lifte, Beleuchtung, Signale usw.) sind der Basler,
      resp. der zuständigen Verwaltung zu melden.
    </p>
    <h2>5. Tarife</h2>
    <p>
      1 Die Gebühren werden durch Smart Parking erhoben und richten sich nach
      der ununterbrochenen Mietzeit.
    </p>
    <ul>
      <li>Der Basistarif beträgt CHF 2. -pro angefangener Stunde.</li>
      <li>
        Ab einer Mietzeit von 5 Stunden bis 24 Stunden gilt der maximale
        Tagestarif von CHF 10.-.
      </li>
    </ul>
    <p>
      2 In den Gebühren ist die gesetzlich geschuldete Mehrwertsteuer enthalten.
    </p>
    <h2>6. Haftungsbestimmungen</h2>
    <p>
      1 Die Benutzung der Parkhäuser erfolgt auf eigene Verantwortung und
      eigenes Risiko. Fahrzeuge und Personen werden nicht bewacht
    </p>
    <p>
      2 Für Unfälle sowie Personen- und Sachschäden wird jede Haftung der Basler
      abgelehnt.
    </p>
    <p>
      3 Für Diebstähle und Sachbeschädigungen durch Dritte und für Schäden
      infolge von äusseren Einflüssen (Feuer, Explosion, Wasser, Eis, Schnee
      usw.) wird jede Haftung der Basler abgelehnt.
    </p>
    <h2>7. Gerichtstand</h2>
    <p>
      Der Gerichtstand für sämtliche Rechtsstreitigen aus dem Mietverhältnis ist
      Basel.
    </p>
    <h2>8. Datenschutz</h2>
    <p>
      Mit der Nutzung der Dienstleistung der Basler akzeptiert der Nutzer die
      Datenschutzbestimmunen für Mietverhältnisse
      https://www.baloise.ch/de/ueber-uns/datenverarbeitung-mietverhaeltnisse.html
      und bestätigt diese gelesen zu haben.
    </p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle("terms.appBarTitle")
      setHasBackButton(true)
    })

    return {}
  },
})
</script>
