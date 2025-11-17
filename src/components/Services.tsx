import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Globe, Bot, Smartphone, Zap, Database, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description:
        "Sites web modernes, responsives et optimisés SEO. De la vitrine corporate à l'application web complexe.",
      features: [
        'Sites vitrines',
        'E-commerce',
        'Applications web',
        'CMS personnalisés',
      ],
    },
    {
      icon: Bot,
      title: 'Automatisation IA',
      description:
        "Solutions d'intelligence artificielle pour automatiser vos processus métier et optimiser votre productivité.",
      features: [
        'Chatbots intelligents',
        'Analyse de données',
        'Automatisation des tâches',
        'Recommandations IA',
      ],
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description:
        'Applications mobiles natives et PWA pour iOS et Android, avec une expérience utilisateur optimale.',
      features: [
        'Apps natives',
        'PWA',
        'Interface intuitive',
        'Performance optimisée',
      ],
    },
    {
      icon: Zap,
      title: 'Optimisation Performance',
      description:
        'Audit et optimisation de vos solutions existantes pour améliorer vitesse et efficacité.',
      features: [
        'Audit technique',
        'Optimisation vitesse',
        'SEO technique',
        'Monitoring',
      ],
    },
    {
      icon: Database,
      title: 'Gestion de Données',
      description:
        'Architecture et gestion de bases de données, migration et synchronisation de vos systèmes.',
      features: [
        'Bases de données',
        'API REST',
        'Migration données',
        'Intégrations',
      ],
    },
    {
      icon: Shield,
      title: 'Sécurité & Maintenance',
      description:
        'Sécurisation de vos applications et maintenance préventive pour assurer la continuité de service.',
      features: [
        'Sécurité web',
        'Maintenance',
        'Sauvegardes',
        'Support technique',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Mes <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes pour digitaliser et automatiser votre
            activité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card/40 backdrop-blur-md border-border/30 hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
