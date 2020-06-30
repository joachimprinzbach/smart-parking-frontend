<template>
  <section>
    <Title text="Unsere allgemeinen Geschäftsbedingungen" />
    <Subtitle>1. Zweck/Geltungsbereich</Subtitle>
    <Content>
      1 Smart Parking ist eine Dienstleistung, über welche man Parkplätze der
      Basler Leben AG (nachfolgend Basler) in den von der Basler bestimmten
      Gebäuden mieten kann. Die vorliegenden AGB gelten als integrierender
      Vertragsbestandteil des Mietverhältnisses.
    </Content>
    <v-divider></v-divider>
    <Subtitle>2. Allgemeine Bestimmungen</Subtitle>
    <Content>
      1 In den Gebäuden des vermieteten Parkplatzes gelten, wenn nicht
      abweichend geregelt, das eidgenössische Strassenverkehrsgesetz (SVG) vom
      19. Dezember 1958 und die entsprechenden Verordnungen.
    </Content>
    <v-divider></v-divider>
    <Subtitle>3. Nutzungsvorschriften</Subtitle>
    <Content>
      1 Fahrzeuge dürfen nur innerhalb der durch den Nutzer reservierten und
      durch die Basler bestimmten Parkfelder innerhalb der Markierung abgestellt
      werden. Nach Ende der Mietzeit sind die Parkfelder unverzüglich
      freizugeben. Widerrechtlich oder verkehrsbehindernd parkierte Fahrzeuge
      können gebührenpflichtig weggeschafft oder blockiert werden.
    </Content>
    <Content>
      2 Das unnötige Verweilen in den Parkhäusern sowie jede sachfremde
      Benutzung der Parkfelder und Einrichtungen (z.B. Lagern von Waren,
      Reparieren oder Waschen von Autos, Verursachen von Verunreinigungen,
      Befahren mit Spiel- und Sportgeräten) sind untersagt.
    </Content>
    <Content>
      3 Das Verteilen von Werbematerialien und das Plakatieren sind verboten.
    </Content>
    <Content>4 Das Rauchen in den Parkhäusern ist verboten.</Content>
    <Content>
      5 Den Weisungen der Basler sowie deren Verwaltung, ist Folge zu leisten.
    </Content>
    <Content>
      6 Durch das Reservieren eines Parkplatzes akzeptiert der Mieter die
      jeweils für die Einstellhalle anwendbare Hausordnung.
    </Content>
    <Content>
      7 Die Basler resp. die Verwaltung der Einstellhalle ist berechtigt, die
      ihr infolge Missachtung dieser Vorschriften entstehenden Aufwände den
      Verursacherinnen oder den Verursachern zu belasten.
    </Content>
    <v-divider></v-divider>
    <Subtitle>4. Reservieren und Buchen</Subtitle>
    <Content>
      1 Der Nutzer stellt eine Reservationsanfrage für einen definierten
      Zeitraum in der gewünschten Einstellhalle. Der Nutzer hat mit der
      Reservationsanfrage keinen Anspruch auf einen Parkplatz.
    </Content>
    <Content>
      2 Falls ein Parkplatz zur gewünschten Zeit vorhanden ist, erhält der
      Nutzer eine Reservationsbestätigung für einen bestimmten Parkplatz für den
      gewählten Zeitraum. Wenn die Reservationsbestätigung auf einen festen
      Parkplatz mit Parkplatznummer verweist, ist diese bindend. Ein Parkieren
      ausserhalb dieses Parkplatzes ist nicht gestattet.
    </Content>
    <Content>
      3 Die Basler übernimmt keinerlei Haftung für die Verfügbarkeit des
      Parkplatzes und allfällige damit verbundene Folgekosten. Dies gilt
      insbesondere, wenn dieser widerrechtlich belegt ist. Bei Verfügbarkeit und
      nach Rücksprache mit der Basler kann der Nutzer einen Ausweichparkplatz
      reservieren.
    </Content>
    <Content>
      4 Unfälle mit Personenschäden sind der Polizei zu melden.
    </Content>
    <Content>
      5 Beschädigungen und Defekte in den Einstellhallen und ihrer Einrichtungen
      (Schranken, Kassen, Lifte, Beleuchtung, Signale usw.) sind der Basler,
      resp. der zuständigen Verwaltung zu melden.
    </Content>
    <v-divider></v-divider>
    <Subtitle>5. Tarife</Subtitle>
    <Content>
      1 Die Gebühren werden durch Smart Parking erhoben und richten sich nach
      der ununterbrochenen Mietzeit.
    </Content>
    <ul>
      <li>Der Basistarif beträgt CHF 2. -pro angefangene Stunde.</li>
      <li>
        Ab einer Mietzeit von 5 Stunden bis 24 Stunden gilt der maximale
        Tagestarif von CHF 10.-.
      </li>
    </ul>
    <Content>
      2 In den Gebühren ist die gesetzlich geschuldete Mehrwertsteuer enthalten.
    </Content>
    <v-divider></v-divider>
    <Subtitle>6. Haftungsbestimmungen</Subtitle>
    <Content>
      1 Die Benutzung der Parkhäuser erfolgt auf eigene Verantwortung und
      eigenes Risiko. Fahrzeuge und Personen werden nicht bewacht.
    </Content>
    <Content>
      2 Für Unfälle sowie Personen- und Sachschäden wird jede Haftung der Basler
      abgelehnt.
    </Content>
    <Content>
      3 Für Diebstähle und Sachbeschädigungen durch Dritte und für Schäden
      infolge von äusseren Einflüssen (Feuer, Explosion, Wasser, Eis, Schnee
      usw.) wird jede Haftung der Basler abgelehnt.
    </Content>
    <v-divider></v-divider>
    <Subtitle>7. Gerichtsstand</Subtitle>
    <Content>
      Der Gerichtsstand für sämtliche Rechtsstreitigen aus dem Mietverhältnis
      ist Basel.
    </Content>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Title from "@/app/components/common/Title.vue"
import Subtitle from "@/app/components/common/Subtitle.vue"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Title,
    Subtitle,
    Content,
  },
})
</script>
