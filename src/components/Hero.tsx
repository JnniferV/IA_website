import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Bot } from 'lucide-react'
import heroImage from '@/assets/hero-image.jpg'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Développeur <span className="text-gradient">Web</span>
              <br />& Expert <span className="text-gradient">IA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Je transforme vos idées en solutions digitales innovantes. Sites
              web sur mesure et automatisations IA pour particuliers et
              entreprises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" onClick={scrollToServices}>
              Découvrir mes services
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">
                Années d'expérience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">
                Projets réalisés
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Clients satisfaits
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-float">
          <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20"></div>
          <img
            src={heroImage}
            alt="Développeur web et expert IA"
            className="relative z-10 w-full h-auto rounded-3xl shadow-elevated"
          />

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-card/10 backdrop-blur-md rounded-full p-4 animate-glow-pulse">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card/10 backdrop-blur-md rounded-full p-4 animate-glow-pulse delay-1000">
            <Bot className="h-8 w-8 text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
