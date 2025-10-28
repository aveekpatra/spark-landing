import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main>
      <HeroHeader />
      <div className="min-h-screen bg-background font-sans">
        <div className="container mx-auto px-6 py-24 max-w-4xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-center font-sans mt-16">Pravilnik o zasebnosti</h1>
            
            <div className="space-y-8 mt-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Uvod</h2>
                <p className="mb-4">
                  Ta pravilnik o zasebnosti (v nadaljevanju: "Pravilnik") je namenjen seznanitvi uporabnikov 
                  storitev družbe Spark Service ter drugih oseb (v nadaljevanju: "posamezniki") z nameni in 
                  podlago obdelave osebnih podatkov s strani družbe Spark Service, Kranj, Slovenija 
                  (v nadaljevanju: "Spark Service") ter pravicami posameznikov na tem področju.
                </p>
                <p className="mb-4">
                  Spark Service nudi posebno skrb varnosti vaših osebnih podatkov. Vsi posredovani osebni 
                  podatki so obravnavani zaupno in so uporabljeni le za namen, zaradi katerega so bili 
                  posredovani. Z vašimi osebnimi podatki upravljamo z največjo skrbnostjo, upoštevajoč 
                  veljavno zakonodajo in najvišje standarde njihove obravnave.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Upravljavec osebnih podatkov</h2>
                <p className="mb-4">
                  Upravljavec osebnih podatkov, ki se obdelujejo v skladu s tem Pravilnikom o zasebnosti, je:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p><strong>Spark Service</strong></p>
                  <p>Kranj, Slovenija</p>
                  <p>E-pošta: info@sparkservice.si</p>
                  <p>Telefon: 068 653 596</p>
                  <p>Davčna številka: 93787880</p>
                  <p>Matična številka: 9973770000</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Kategorije posameznikov</h2>
                <p className="mb-4">
                  Ta Pravilnik o zasebnosti je namenjen vsem, ki ste naročili in/ali uporabljate naše storitve, 
                  kot tudi tistim, ki obiščete našo spletno stran.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Osebni podatki, ki jih zbiramo</h2>
                <p className="mb-4">
                  Če ste le obiskovalec spletne strani Spark Service, o vas zbiramo podatke le z uporabo 
                  piškotkov. Če ste uporabnik ali naročnik naših storitev, o vas zbiramo tudi druge osebne 
                  podatke, ki jih potrebujemo za izvajanje storitev:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>ime in priimek</li>
                  <li>kontaktni e-poštni naslov</li>
                  <li>kontaktni telefon</li>
                  <li>IP naslov</li>
                  <li>podatke za izdajo računa (naslov, davčna številka)</li>
                  <li>podatke o storitvi, ki jo potrebujete</li>
                  <li>sporočilo/opis problema ali zahteve</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Nameni obdelave in pravne podlage</h2>
                
                <h3 className="text-xl font-medium mb-3">5.1 Obdelava na podlagi pogodbe</h3>
                <p className="mb-4">
                  Če ste naročili storitve, ki jih ponuja Spark Service (računalniški servis, programiranje, 
                  izdelava spletnih strani, aplikacije), se osebni podatki zbirajo in obdelujejo za namen 
                  sklenitve pogodbe in izvrševanja pravic ter izpolnjevanja obveznosti iz pogodbenega razmerja.
                </p>
                <p className="mb-4">
                  V okviru izvrševanja pogodbenih pravic obdelujemo vaše osebne podatke za naslednje namene:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>identifikacijo posameznika</li>
                  <li>pripravo ponudbe</li>
                  <li>sklenitev pogodbe</li>
                  <li>zagotovitev naročenih storitev</li>
                  <li>obveščanje o spremembah in navodilih</li>
                  <li>reševanje tehničnih težav in reklamacij</li>
                  <li>obračunavanje storitev</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">5.2 Obdelava na podlagi zakonitega interesa</h3>
                <p className="mb-4">
                  Na podlagi zakonitega interesa uporabljamo vaše osebne podatke za:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>odkrivanje in preprečevanje zlorab storitev</li>
                  <li>zagotavljanje stabilnega in varnega delovanja sistemov</li>
                  <li>izvajanje ukrepov informacijske varnosti</li>
                  <li>izboljšanje kakovosti storitev</li>
                  <li>odkrivanje tehničnih okvar</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">5.3 Obdelava na podlagi privolitve</h3>
                <p className="mb-4">
                  Z vašo privolitvijo lahko obdelujemo podatke za:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>obveščanje o ponudbah in ugodnostih</li>
                  <li>pošiljanje novičnika</li>
                  <li>trženjske aktivnosti</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Hramba in izbris podatkov</h2>
                <p className="mb-4">
                  Osebni podatki se hranijo le toliko časa, kolikor je potrebno za doseganje namena, 
                  za katerega so bili zbrani:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Podatki za izvajanje pogodbe: 6 let po prenehanju pogodbe</li>
                  <li>Podatki za trženje (s privolitvijo): do preklica privolitve ali 2 leti neaktivnosti</li>
                  <li>Tehnični podatki (log datoteke): 1 leto</li>
                  <li>Podatki za obračunavanje: 10 let (davčni predpisi)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Piškotki</h2>
                <p className="mb-4">
                  Naša spletna stran uporablja piškotke za izboljšanje uporabniške izkušnje. Piškotki so 
                  majhne besedilne datoteke, ki se shranijo v vašem brskalniku. Uporabljamo:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Nujno potrebni piškotki:</strong> za osnovno delovanje spletne strani</li>
                  <li><strong>Analitični piškotki:</strong> za analizo obiska (Google Analytics)</li>
                  <li><strong>Funkcionalni piškotki:</strong> za shranjevanje vaših nastavitev</li>
                </ul>
                <p className="mb-4">
                  Piškotke lahko kadar koli onemogočite v nastavitvah vašega brskalnika.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Vaše pravice</h2>
                <p className="mb-4">
                  V skladu s Splošno uredbo o varstvu podatkov (GDPR) imate naslednje pravice:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Pravica dostopa:</strong> zahtevate lahko informacije o obdelavi vaših podatkov</li>
                  <li><strong>Pravica popravka:</strong> zahtevate lahko popravek netočnih podatkov</li>
                  <li><strong>Pravica do izbrisa:</strong> zahtevate lahko izbris podatkov (pravica do pozabe)</li>
                  <li><strong>Pravica do omejitve:</strong> zahtevate lahko omejitev obdelave</li>
                  <li><strong>Pravica do prenosljivosti:</strong> zahtevate lahko prenos podatkov</li>
                  <li><strong>Pravica do ugovora:</strong> lahko ugovarjate obdelavi podatkov</li>
                  <li><strong>Pravica do preklica privolitve:</strong> kadar koli lahko prekličete privolitev</li>
                </ul>
                <p className="mb-4">
                  Za uveljavljanje pravic nas kontaktirajte na info@sparkservice.si ali 068 653 596.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Varnost podatkov</h2>
                <p className="mb-4">
                  Vaše osebne podatke varujemo z ustreznimi tehničnimi in organizacijskimi ukrepi:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Šifriranje podatkov pri prenosu (SSL/TLS)</li>
                  <li>Varna shramba podatkov</li>
                  <li>Omejen dostop do podatkov</li>
                  <li>Redne varnostne posodobitve</li>
                  <li>Usposabljanje zaposlenih</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Posredovanje podatkov tretjim osebam</h2>
                <p className="mb-4">
                  Vaše osebne podatke lahko posredujemo naslednjim kategorijam prejemnikov:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Ponudniki IT storitev (gostovanje, e-pošta)</li>
                  <li>Računovodski servis</li>
                  <li>Pravni svetovalci</li>
                  <li>Državni organi (na podlagi zakona)</li>
                </ul>
                <p className="mb-4">
                  Vsi zunanji obdelovalci so pogodbeno zavezani k varovanju vaših podatkov.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Pritožbe</h2>
                <p className="mb-4">
                  Če menite, da obdelujemo vaše osebne podatke nezakonito, lahko vložite pritožbo pri 
                  Informacijskem pooblaščencu Republike Slovenije:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p><strong>Informacijski pooblaščenec RS</strong></p>
                  <p>Dunajska cesta 22, 1000 Ljubljana</p>
                  <p>E-pošta: gp.ip@ip-rs.si</p>
                  <p>Telefon: 01 230 97 30</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Spremembe pravilnika</h2>
                <p className="mb-4">
                  Ta pravilnik lahko spremenimo ali dopolnimo. O vseh pomembnih spremembah vas bomo 
                  obvestili preko e-pošte ali na naši spletni strani. Priporočamo, da pravilnik 
                  občasno pregledate.
                </p>
                <p className="mb-4">
                  <strong>Datum zadnje posodobitve:</strong> {new Date().toLocaleDateString('sl-SI')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Kontakt</h2>
                <p className="mb-4">
                  Za vsa vprašanja v zvezi z obdelavo osebnih podatkov nas lahko kontaktirate:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p><strong>Spark Service</strong></p>
                  <p>E-pošta: info@sparkservice.si</p>
                  <p>Telefon: 068 653 596</p>
                  <p>Naslov: Kranj, Slovenija</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Pravilnik o zasebnosti — Spark Service",
  description: "Pravilnik o zasebnosti in varstvu osebnih podatkov družbe Spark Service v skladu z GDPR.",
};