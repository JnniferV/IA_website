import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/40 backdrop-blur-md border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">DevIA</div>
            <p className="text-muted-foreground">
              Développeur web freelance spécialisé dans les solutions IA pour
              particuliers et entreprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@devia-freelance.fr"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById('accueil')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('apropos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('projets')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projets
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Développement Web</div>
              <div>Automatisation IA</div>
              <div>Applications Mobile</div>
              <div>Optimisation Performance</div>
              <div>Gestion de Données</div>
              <div>Sécurité & Maintenance</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} DevIA. Tous droits réservés.
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            Fait avec <Heart className="h-4 w-4 mx-1 text-red-500" /> en France
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
