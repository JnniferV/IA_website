import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce IA',
      description:
        "Plateforme e-commerce avec recommandations personnalisées alimentées par l'IA",
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      category: 'E-commerce & IA',
      image: '🛍️',
      status: 'En développement',
    },
    {
      title: 'Chatbot Support Client',
      description:
        'Assistant virtuel intelligent pour automatiser le service client',
      tech: ['Python', 'NLP', 'FastAPI', 'Redis'],
      category: 'Automatisation IA',
      image: '🤖',
      status: 'Livré',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel avec analyses prédictives',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      category: 'Data & Analytics',
      image: '📊',
      status: 'Livré',
    },
    {
      title: 'Site Corporate',
      description: 'Site vitrine moderne avec CMS headless et optimisation SEO',
      tech: ['Next.js', 'Strapi', 'Tailwind'],
      category: 'Site Web',
      image: '🌐',
      status: 'Livré',
    },
  ]

  return (
    <section id="projets" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques réalisations qui illustrent mon expertise en
            développement web et IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/40 backdrop-blur-md border-border/30 hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="text-4xl">{project.image}</div>
                    <div className="text-sm text-accent font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Livré'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir le projet
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Vous avez un projet en tête ?
          </p>
          <Button
            variant="hero"
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
