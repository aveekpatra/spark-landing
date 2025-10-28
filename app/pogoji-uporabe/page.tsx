import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
  title: "Splošni pogoji uporabe | Spark Service",
  description: "Splošni pogoji uporabe spletne strani in storitev podjetja Spark Service.",
};

export default function TermsOfUsePage() {
  return (
    <main>
      <HeroHeader />
      
      <div className="min-h-screen bg-background font-sans">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 mt-16 text-gray-900">
              Splošni pogoji uporabe
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-12">
              <div>
                <p className="text-sm text-gray-600 mb-8">
                  Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI')}
                </p>
              </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Splošne določbe</h2>
              <p>
                Ti splošni pogoji uporabe (v nadaljevanju &ldquo;Pogoji&rdquo;) urejajo dostop in uporabo spletne strani 
                ter storitev podjetja Spark Service (v nadaljevanju &ldquo;Ponudnik&rdquo;, &ldquo;mi&rdquo;, &ldquo;naš&rdquo;). Z dostopom 
                do naše spletne strani ali uporabo naših storitev se strinjate s temi Pogoji.
              </p>
              <p>
                Če se s temi Pogoji ne strinjate, prosimo, da ne uporabljate naše spletne strani ali storitev.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Definicije</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ponudnik:</strong> Spark Service, podjetje za IT storitve</li>
                <li><strong>Uporabnik:</strong> vsaka fizična ali pravna oseba, ki dostopa do naše spletne strani ali uporablja naše storitve</li>
                <li><strong>Storitve:</strong> vse IT storitve, ki jih ponujamo, vključno z razvojem spletnih strani, aplikacij in tehničnim svetovanjem</li>
                <li><strong>Spletna stran:</strong> naša uradna spletna stran in vsi povezani portali</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Uporaba storitev</h2>
              <h3 className="text-xl font-medium mb-3 text-gray-800">3.1 Dovoljene uporabe</h3>
              <p>
                Naše storitve lahko uporabljate izključno za zakonite namene in v skladu s temi Pogoji. 
                Zavezujete se, da boste upoštevali vsa veljavna pravila in predpise.
              </p>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">3.2 Prepovedane uporabe</h3>
              <p>Prepovedano je:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uporabljati naše storitve za nezakonite dejavnosti</li>
                <li>Kršiti pravice intelektualne lastnine</li>
                <li>Poskušati nepooblaščeno dostopati do naših sistemov</li>
                <li>Širiti zlonamerno programsko opremo ali viruse</li>
                <li>Motiti delovanje naših storitev</li>
                <li>Uporabljati naše storitve za pošiljanje neželene pošte (spam)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Intelektualna lastnina</h2>
              <p>
                Vsa vsebina na naši spletni strani, vključno z besedili, slikami, logotipi, dizajnom in 
                programsko kodo, je zaščitena z avtorskimi pravicami in drugimi pravicami intelektualne 
                lastnine. Ta vsebina je last Spark Service ali naših licencedajalcev.
              </p>
              <p>
                Brez našega pisnega dovoljenja ne smete kopirati, reproducirati, distribuirati, objavljati 
                ali kako drugače uporabljati naše zaščitene vsebine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Omejitev odgovornosti</h2>
              <p>
                Naše storitve so na voljo &ldquo;takšne, kot so&rdquo; in &ldquo;kot so dostopne&rdquo;. V največji možni meri, 
                ki jo dovoljuje veljavno pravo, izključujemo vse garancije, izrecne ali nakazane.
              </p>
              <p>
                Spark Service ne prevzema odgovornosti za:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Neposredne, posredne, naključne ali posledične škode</li>
                <li>Izgubo dobička, podatkov ali poslovnih priložnosti</li>
                <li>Prekinitve storitev zaradi tehničnih motenj</li>
                <li>Dejanja tretjih oseb</li>
                <li>Napake ali netočnosti v vsebini</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Razpoložljivost storitev</h2>
              <p>
                Trudimo se zagotoviti neprekinjeno delovanje naših storitev, vendar ne moremo garantirati 
                100% razpoložljivosti. Storitve lahko začasno prekinemo zaradi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rednega vzdrževanja</li>
                <li>Tehničnih motenj</li>
                <li>Višje sile</li>
                <li>Varnostnih razlogov</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Varstvo osebnih podatkov</h2>
              <p>
                Obdelava osebnih podatkov je urejena v našem Pravilniku o zasebnosti, ki je sestavni del 
                teh Pogojev. Z uporabo naših storitev se strinjate z obdelavo vaših osebnih podatkov v 
                skladu s tem pravilnikom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Prekinitev uporabe</h2>
              <p>
                Pridržujemo si pravico, da kadarkoli in brez predhodnega obvestila prekinemo ali omejimo 
                dostop do naših storitev, če:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kršite te Pogoje</li>
                <li>Vaše dejanje ogroža varnost naših sistemov</li>
                <li>To zahteva veljavna zakonodaja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Spremembe pogojev</h2>
              <p>
                Pridržujemo si pravico do spremembe teh Pogojev kadarkoli. O pomembnih spremembah vas 
                bomo obvestili preko naše spletne strani ali po elektronski pošti. Nadaljnja uporaba 
                naših storitev po objavi sprememb pomeni, da se s spremembami strinjate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Reševanje sporov</h2>
              <p>
                Vsi spori, ki bi nastali v zvezi s temi Pogoji ali uporabo naših storitev, se rešujejo 
                po slovenskem pravu. Pristojno je sodišče v Ljubljani.
              </p>
              <p>
                Pred uveljavljanjem sodnih zahtevkov si prizadevamo spore rešiti sporazumno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Kontaktni podatki</h2>
              <p>
                Za vprašanja v zvezi s temi Pogoji nas lahko kontaktirate:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Spark Service</strong></p>
                <p>E-pošta: info@sparkservice.si</p>
                <p>Telefon: +386 XX XXX XXX</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Končne določbe</h2>
              <p>
                Če se katera od določb teh Pogojev izkaže za neveljavno, to ne vpliva na veljavnost 
                preostalih določb. Ti Pogoji predstavljajo celoten sporazum med vami in nami glede 
                uporabe naših storitev.
              </p>
              <p>
                Ti Pogoji so bili nazadnje posodobljeni dne {new Date().toLocaleDateString('sl-SI')}.
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
      
      <FooterSection />
    </main>
  );
}