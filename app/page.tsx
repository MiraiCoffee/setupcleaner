export default function Page() {
  const services = [
    {
      title: 'Nettoyage PC',
      description: 'Nettoyage complet pour améliorer les performances et la durée de vie.',
      price: '40€',
    },
    {
      title: 'Clavier / Souris',
      description: 'Nettoyage des périphériques pour une meilleure hygiène.',
      price: '10€',
    },
    {
      title: 'Montage PC',
      description: 'Assemblage propre et optimisé de votre configuration.',
      price: '80€ à 100€',
    },
    {
      title: 'Remplacement',
      description: 'Changement de composants (RAM, GPU, SSD…).',
      price: '30€ à 60€',
    },
  ];

  const reviews = [
    {
      name: 'Client satisfait',
      rating: 5,
      text: 'Service rapide et très propre. Mon PC est comme neuf.',
    },
    {
      name: 'Cliente satisfaite',
      rating: 5,
      text: 'Montage impeccable et bons conseils.',
    },
    {
      name: 'Avis vérifié',
      rating: 4,
      text: 'Travail sérieux et propre.',
    },
  ];

const stars = (count: number) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#4a372d]">
      <header className="sticky top-0 z-50 border-b border-[#d9c7b7] bg-[#f7f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-semibold">SetupCleaner</p>
            <p className="text-sm text-[#7a6155]">Nettoyage & montage PC</p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="transition hover:opacity-70">
              Services
            </a>
            <a href="#realisations" className="transition hover:opacity-70">
              Réalisations
            </a>
            <a href="#avis" className="transition hover:opacity-70">
              Avis
            </a>
            <a href="#contact" className="transition hover:opacity-70">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Donnez une seconde vie à votre PC
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5448]">
              Nettoyage, montage et optimisation avec un travail propre et professionnel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-[#8b6b5c] px-6 py-3 text-white shadow-sm transition hover:scale-[1.02]"
              >
                Devis
              </a>

              <a
                href="https://www.tiktok.com/@setup_cleaner"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#a98b79] px-6 py-3 transition hover:bg-white/60"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#dbcabc] bg-white/70 p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between px-2">
              <div>
                <p className="text-sm font-semibold text-[#4a372d]">Feed réalisations</p>
                <p className="text-xs text-[#7a6155]">Avant / Après en scroll vertical</p>
              </div>
              <a
                href="https://www.tiktok.com/@setup_cleaner"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#ccb7a7] px-3 py-1 text-xs text-[#6d5448] transition hover:bg-white"
              >
                Voir TikTok
              </a>
            </div>

            <div className="h-[520px] snap-y snap-mandatory space-y-4 overflow-y-auto rounded-[1.5rem] pr-1 scroll-smooth">
              <div className="snap-start overflow-hidden rounded-[1.5rem] bg-[#111] shadow-md">
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="h-[420px] w-full object-contain bg-black"
                  >
                    <source src="/realisations/montage-pc.mp4" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>

                  <div className="absolute left-4 top-4 rounded-full bg-[#8b6b5c] px-3 py-1 text-xs font-semibold text-white shadow">
                    Après
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/55 px-4 py-3 text-white backdrop-blur-sm">
                    <p className="text-sm font-semibold">Résultat final</p>
                    <p className="mt-1 text-xs text-white/85">
                      Machine propre, poste net et setup remis en valeur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="snap-start overflow-hidden rounded-[1.5rem] bg-white shadow-md">
                <div className="relative">
                  <img
                    src="/realisations/avant-nettoyage.jpg"
                    alt="Avant nettoyage"
                    className="h-[420px] w-full object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#ead8c8] px-3 py-1 text-xs font-semibold text-[#5a4338] shadow">
                    Avant
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/45 px-4 py-3 text-white backdrop-blur-sm">
                    <p className="text-sm font-semibold">État avant intervention</p>
                    <p className="mt-1 text-xs text-white/85">
                      Aperçu du setup avant nettoyage complet et remise en état.
                    </p>
                  </div>
                </div>
              </div>

              <div className="snap-start overflow-hidden rounded-[1.5rem] border border-dashed border-[#ccb7a7] bg-[#f8f3ed] shadow-sm">
                <div className="flex h-[420px] items-center justify-center px-6 text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#ccb7a7] text-[#8b6b5c]">
                      +
                    </div>
                    <p className="text-sm font-semibold text-[#5b463b]">Ajoute une autre réalisation</p>
                    <p className="mt-2 text-xs text-[#7a6155]">
                      Une photo, un avant/après ou une autre vidéo pour enrichir le feed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-3xl font-semibold">Services</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-[#dbcabc] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6d5448]">{service.description}</p>
                <p className="mt-4 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-3xl font-semibold">Avant / Après</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-[#dbcabc] bg-white shadow-lg">
              <div className="bg-[#e8d8ca] px-4 py-3 text-sm font-semibold uppercase text-[#6d5448]">
                Avant
              </div>

              <img
                src="/realisations/avant-nettoyage.jpg"
                alt="Avant nettoyage"
                className="h-[450px] w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">État avant intervention</h3>
                <p className="mt-2 text-sm text-[#6d5448]">
                  Machine encrassée avant nettoyage complet.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#dbcabc] bg-white shadow-lg">
              <div className="bg-[#8b6b5c] px-4 py-3 text-sm font-semibold uppercase text-white">
                Après
              </div>

              <div className="flex justify-center bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="max-h-[450px] w-auto"
                >
                  <source src="/realisations/montage-pc.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">Résultat après intervention</h3>
                <p className="mt-2 text-sm text-[#6d5448]">
                  PC nettoyé, plus propre et optimisé.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="avis" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-3xl font-semibold">Avis clients</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#dbcabc] bg-white p-6 shadow-sm"
              >
                <p className="text-lg text-[#8b6b5c]">{stars(review.rating)}</p>
                <p className="mt-4 leading-7 text-[#5b463b]">“{review.text}”</p>
                <p className="mt-5 text-sm font-medium text-[#7a6155]">— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-3xl font-semibold">Contact</h2>

          <div className="rounded-3xl border border-[#dbcabc] bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#7a6155]">Téléphone</p>
                <a href="tel:0619193868" className="text-lg font-medium hover:underline">
                  06 19 19 38 68
                </a>
              </div>

              <div>
                <p className="text-sm text-[#7a6155]">Email</p>
                <a
                  href="mailto:setupcleaner@outlook.fr"
                  className="text-lg font-medium hover:underline"
                >
                  setupcleaner@outlook.fr
                </a>
              </div>

              <div>
                <p className="text-sm text-[#7a6155]">TikTok</p>
                <a
                  href="https://www.tiktok.com/@setup_cleaner"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  @setup_cleaner
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}