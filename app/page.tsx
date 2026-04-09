export default function Page() {
  const services = [
    {
      title: 'Nettoyage PC',
      description:
        'Nettoyage et dépoussiérage complet de votre ordinateur pour améliorer performances et durée de vie. (40€)',
    },
    {
      title: 'Nettoyage clavier / souris',
      description:
        'Nettoyage minutieux de vos périphériques pour une meilleure hygiène et utilisation. (10€)',
    },
    {
      title: 'Montage PC',
      description:
        'Assemblage complet de votre configuration sur mesure. (80€ à 100€ selon complexité du boîtier)',
    },
    {
      title: 'Remplacement de pièces',
      description:
        'Changement de composants (RAM, carte graphique, alimentation, etc.). (30€ à 60€ selon intervention)',
    },
  ];

  const projects = [
    {
      title: 'Montage PC gaming',
      type: 'Photo / Vidéo',
      description: 'Ajoutez ici une photo ou une courte vidéo avant/après du montage final.',
    },
    {
      title: 'Nettoyage complet',
      type: 'Photo',
      description: 'Idéal pour montrer l’état avant intervention puis le résultat après entretien.',
    },
    {
      title: 'Optimisation système',
      type: 'Vidéo',
      description: 'Montrez les gains en fluidité, temps de démarrage ou organisation du poste.',
    },
  ];

  const reviews = [
    {
      name: 'Client satisfait',
      rating: 5,
      text: 'Service sérieux, rapide et très professionnel. Mon PC est beaucoup plus fluide qu’avant.',
    },
    {
      name: 'Cliente satisfaite',
      rating: 5,
      text: 'Montage impeccable et très bons conseils pour choisir les composants.',
    },
    {
      name: 'Avis vérifié',
      rating: 4,
      text: 'Très bonne expérience, intervention propre et explications claires.',
    },
  ];

  const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#4a372d]">
      <header className="sticky top-0 z-50 border-b border-[#d9c7b7] bg-[#f7f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-semibold tracking-wide">SetupCleaner</p>
            <p className="text-sm text-[#7a6155]">Entretien, montage PC & optimisation</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="transition hover:opacity-70">Services</a>
            <a href="#realisations" className="transition hover:opacity-70">Réalisations</a>
            <a href="#avis" className="transition hover:opacity-70">Avis</a>
            <a href="#contact" className="transition hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#ccb5a3] bg-white/60 px-4 py-2 text-sm text-[#6d5448]">
              Vitrine professionnelle
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Donnez une seconde vie à vos ordinateurs.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5448]">
              Maintenance informatique, montage de PC sur mesure et optimisation de vos machines avec une approche soignée,
              claire et professionnelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-[#8b6b5c] px-6 py-3 text-white shadow-lg transition hover:scale-[1.02]"
              >
                Demander un devis
              </a>
              <a
                href="#realisations"
                className="rounded-2xl border border-[#bfa391] bg-white/80 px-6 py-3 shadow-sm transition hover:scale-[1.02]"
              >
                Voir mes travaux
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#d8c3b2] bg-[#efe4d8] p-6 shadow-sm">
              <p className="text-sm text-[#7a6155]">Ambiance</p>
              <p className="mt-2 text-2xl font-semibold">Pastel, beige & brun doux</p>
            </div>
            <div className="rounded-3xl border border-[#d8c3b2] bg-[#fdfaf6] p-6 shadow-sm">
              <p className="text-sm text-[#7a6155]">Image</p>
              <p className="mt-2 text-2xl font-semibold">Propre, rassurante et élégante</p>
            </div>
            <div className="rounded-3xl border border-[#d8c3b2] bg-[#ead8c8] p-6 shadow-sm sm:col-span-2">
              <p className="text-sm text-[#7a6155]">Votre futur espace visuel</p>
              <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-[#b8957e] bg-white/60 text-center text-[#7a6155]">
                Photo ou vidéo principale de vos réalisations
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b5c]">Services</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Ce que vous proposez</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-[#dbcabc] bg-white/70 p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#6d5448]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b5c]">Réalisations</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Photos et vidéos de vos travaux</h2>
            </div>
            <p className="max-w-lg text-[#6d5448]">
              Remplacez facilement ces blocs par vos vraies images, extraits vidéo, avant/après ou photos de configurations montées.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-3xl border border-[#dbcabc] bg-white/75 shadow-sm">
                <div className="flex aspect-[4/3] items-center justify-center bg-[#eadfd4] text-center text-[#7a6155]">
                  Zone média<br />{project.type}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6d5448]">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="avis" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b5c]">Avis clients</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Ils vous ont fait confiance</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-3xl border border-[#dbcabc] bg-[#fffaf5] p-6 shadow-sm">
                <p className="text-lg text-[#8b6b5c]">{stars(review.rating)}</p>
                <p className="mt-4 leading-7 text-[#5b463b]">“{review.text}”</p>
                <p className="mt-5 text-sm font-medium text-[#7a6155]">— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[2rem] border border-[#d6c1b0] bg-[#e9d6c7] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#7a6155]">Pourquoi vous choisir</p>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Une présence simple, sérieuse et rassurante</h2>
              </div>
              <div className="space-y-3 text-[#5f493e]">
                <p>✔ Présentation claire de vos services</p>
                <p>✔ Mise en avant de vos montages et entretiens</p>
                <p>✔ Collecte et affichage des avis clients</p>
                <p>✔ Coordonnées visibles et faciles à contacter</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b5c]">Tarifs</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Des prix clairs et transparents</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-[#dbcabc] bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Nettoyage PC</h3>
              <p className="mt-4 text-2xl font-bold">40€</p>
              <p className="mt-2 text-sm text-[#6d5448]">Dépoussiérage complet</p>
            </div>

            <div className="rounded-3xl border border-[#dbcabc] bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Clavier / Souris</h3>
              <p className="mt-4 text-2xl font-bold">10€</p>
              <p className="mt-2 text-sm text-[#6d5448]">Nettoyage des périphériques</p>
            </div>

            <div className="rounded-3xl border border-[#dbcabc] bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Montage PC</h3>
              <p className="mt-4 text-2xl font-bold">80€ – 100€</p>
              <p className="mt-2 text-sm text-[#6d5448]">Selon complexité du boîtier</p>
            </div>

            <div className="rounded-3xl border border-[#dbcabc] bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Remplacement</h3>
              <p className="mt-4 text-2xl font-bold">30€ – 60€</p>
              <p className="mt-2 text-sm text-[#6d5448]">Selon pièce à changer</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b5c]">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Parlons de votre projet</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#6d5448]">
                Remplacez ces informations par vos coordonnées réelles pour permettre à vos futurs clients de vous joindre rapidement.
              </p>
            </div>

            <div className="rounded-3xl border border-[#dbcabc] bg-white/80 p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#7a6155]">Téléphone</p>
                  <p className="text-lg font-medium">06 19 19 38 68</p>
                </div>
                <div>
                  <p className="text-sm text-[#7a6155]">E-mail</p>
                  <p className="text-lg font-medium">setupcleaner@outlook.fr</p>
                </div>
                <div>
                  <p className="text-sm text-[#7a6155]">Zone d’intervention</p>
                  <p className="text-lg font-medium">Perpignan et alentours</p>
                </div>
                <div>
                  <p className="text-sm text-[#7a6155]">Réseaux sociaux</p>
                  <p className="text-lg font-medium">TikTok : https://www.tiktok.com/@setup_cleaner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9c7b7] bg-[#f4ece3]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#7a6155] md:flex-row md:items-center md:justify-between">
          <p>© 2026 SetupCleaner — Tous droits réservés</p>
          <p>Site vitrine au style doux, beige, marron et blanc cassé</p>
        </div>
      </footer>
    </div>
  );
}
