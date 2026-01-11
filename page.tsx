'use client'

import { useState, useEffect } from 'react'
import { 
  Shield, Home, Zap, Tv, Cloud, Smartphone, 
  Lock, Thermometer, Lightbulb, Camera, Bell,
  Wifi, Battery, Server, ChevronRight, Check,
  Play, Menu, X, ArrowRight, Star
} from 'lucide-react'

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">HomeServer<span className="text-blue-400">GTL</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition">Fonctionnalités</a>
            <a href="#security" className="text-slate-300 hover:text-white transition">Sécurité</a>
            <a href="#apps" className="text-slate-300 hover:text-white transition">Applications</a>
            <a href="#compare" className="text-slate-300 hover:text-white transition">Comparatif</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Demander une démo
            </button>
          </div>
          
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block py-2 text-slate-300">Fonctionnalités</a>
            <a href="#security" className="block py-2 text-slate-300">Sécurité</a>
            <a href="#apps" className="block py-2 text-slate-300">Applications</a>
            <button className="w-full mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
              Demander une démo
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-300">Nouveau : Installation en 2h par un électricien certifié</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Votre maison intelligente
            <br />
            <span className="gradient-text">100% privée</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Un seul boîtier dans votre tableau électrique qui gère <strong className="text-white">TOUTE</strong> votre maison : 
            sécurité, confort, économies, multimédia. Simple comme une box internet, mais 100× plus puissant.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2">
              Découvrir HomeServer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 font-semibold text-lg transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Voir la démo
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Données 100% locales</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" />
              <span>Chiffrement bout-en-bout</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-yellow-400" />
              <span>Backup batterie inclus</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Product mockup */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <div className="relative mx-auto max-w-4xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl shadow-blue-500/10 overflow-hidden">
              {/* Dashboard mockup */}
              <div className="p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Maison Dupont</div>
                      <div className="text-xs text-slate-400">Tout va bien • 22°C</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm text-green-400">Système actif</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: Shield, label: 'Sécurité', status: 'Armée', color: 'green' },
                    { icon: Thermometer, label: 'Chauffage', status: '22°C', color: 'orange' },
                    { icon: Lightbulb, label: 'Lumières', status: '3 allumées', color: 'yellow' },
                    { icon: Camera, label: 'Caméras', status: '4 actives', color: 'blue' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <item.icon className={`w-6 h-6 mb-2 text-${item.color}-400`} />
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Totale',
      description: 'Alarme, caméras, détecteurs, backup batterie + 4G. Protection même si voleurs coupent le courant.',
      color: 'red',
      items: ['Alarme complète', 'Caméras HD', 'Détecteurs fumée/eau/gaz', 'Backup batterie 6h']
    },
    {
      icon: Thermometer,
      title: 'Confort Automatisé',
      description: 'Chauffage IA, éclairage intelligent, volets automatiques. La maison s\'adapte à vous.',
      color: 'orange',
      items: ['Chauffage prédictif', 'Éclairage auto', 'Volets solaires', 'Scènes 1-clic']
    },
    {
      icon: Zap,
      title: 'Économies Énergie',
      description: 'Monitoring Linky temps réel, IA qui détecte gaspillages et optimise consommation.',
      color: 'green',
      items: ['Monitoring temps réel', 'Alertes gaspillage', 'Heures creuses auto', 'Prédiction facture']
    },
    {
      icon: Tv,
      title: 'Multimédia',
      description: 'Serveur 4K, audio multiroom, mode cinéma. Votre propre Netflix privé.',
      color: 'purple',
      items: ['Streaming 4K local', 'Audio multiroom', 'Watch Party', 'Mode Cinéma']
    },
    {
      icon: Cloud,
      title: 'Cloud Privé',
      description: 'Photos, fichiers, emails stockés chez vous. Pas chez Google. Accès partout.',
      color: 'cyan',
      items: ['Stockage local', 'Sync smartphone', 'Email @famille.fr', 'Coffre-fort']
    },
    {
      icon: Smartphone,
      title: 'Apps Unifiées',
      description: '3 apps simples pour tout contrôler. Domotique, fichiers, médias.',
      color: 'blue',
      items: ['App Control', 'App Files', 'App Media', 'Widgets']
    },
  ]

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tout ce que fait <span className="gradient-text">HomeServer</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un seul système pour remplacer alarme, domotique, NAS, et serveur média
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Security Section
function Security() {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
              <Shield className="w-4 h-4" />
              Protection 24/7
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Sécurité qui ne dort <span className="text-red-400">jamais</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Même si voleurs coupent l'électricité et internet, votre système reste actif grâce au backup batterie et 4G.
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Backup batterie', desc: 'Plusieurs heures d\'autonomie sans électricité' },
                { title: 'Backup 4G', desc: 'Internet de secours automatique' },
                { title: 'Alarme + Caméras', desc: 'Continuent d\'enregistrer et d\'alerter' },
                { title: 'Notifications', desc: 'Vous restez informé en temps réel' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
            <div className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-4">
                  <Shield className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">Mode Anti-Intrusion</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Détection mouvement', active: true },
                  { label: 'Caméras enregistrement', active: true },
                  { label: 'Sirène prête', active: true },
                  { label: 'Backup batterie', active: true, battery: '100%' },
                  { label: 'Connexion 4G', active: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${item.active ? 'bg-green-400' : 'bg-slate-600'}`} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {item.battery && (
                      <span className="text-xs text-green-400">{item.battery}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Apps Section
function Apps() {
  const apps = [
    {
      name: 'Control',
      icon: Home,
      color: 'blue',
      description: 'Domotique, sécurité, scènes',
      features: ['Alarme & caméras', 'Chauffage & lumières', 'Volets & portail', 'Scénarios']
    },
    {
      name: 'Files',
      icon: Cloud,
      color: 'green',
      description: 'Cloud & email privé',
      features: ['Fichiers & photos', 'Sync automatique', 'Email familial', 'Partage sécurisé']
    },
    {
      name: 'Media',
      icon: Tv,
      color: 'orange',
      description: 'Films & musique',
      features: ['Streaming 4K', 'Audio multiroom', 'Watch Party', 'Bibliothèque']
    },
  ]

  return (
    <section id="apps" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            3 apps, <span className="gradient-text">zéro complexité</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Contrairement à Synology qui noie les utilisateurs, nous avons simplifié : 3 apps claires pour tout gérer
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-${app.color}-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${app.color}-500 to-${app.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">HomeServer <span className={`text-${app.color}-400`}>{app.name}</span></h3>
                <p className="text-slate-400 mb-6">{app.description}</p>
                <ul className="space-y-3">
                  {app.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 text-${app.color}-400`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Section
function Comparison() {
  const criteria = [
    { name: 'Sécurité complète', us: true, alarm: 'partial', google: false, nas: false },
    { name: 'Domotique', us: true, alarm: false, google: true, nas: false },
    { name: 'Multimédia 4K', us: true, alarm: false, google: 'partial', nas: true },
    { name: 'Économies IA', us: true, alarm: false, google: false, nas: false },
    { name: 'Privacy 100%', us: true, alarm: 'partial', google: false, nas: true },
    { name: 'Backup batterie', us: true, alarm: 'partial', google: false, nas: false },
    { name: 'Installation pro', us: true, alarm: true, google: false, nas: false },
  ]

  const renderCell = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-400 mx-auto" />
    if (value === 'partial') return <span className="text-yellow-400">⚠</span>
    return <X className="w-5 h-5 text-red-400 mx-auto" />
  }

  return (
    <section id="compare" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pourquoi nous <span className="gradient-text">vs les autres</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Le seul système qui combine tout, sans compromis sur la vie privée
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-4"></th>
                <th className="py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Home className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-blue-400">HomeServer</span>
                  </div>
                </th>
                <th className="py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-slate-400">Alarme</span>
                  </div>
                </th>
                <th className="py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-slate-400">Google</span>
                  </div>
                </th>
                <th className="py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                      <Server className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-slate-400">NAS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-900/50">
                  <td className="py-4 px-4 font-medium">{row.name}</td>
                  <td className="py-4 px-4 bg-blue-500/5">{renderCell(row.us)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.alarm)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.google)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.nas)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à reprendre le contrôle ?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Demandez une démo personnalisée et découvrez comment HomeServer peut transformer votre maison
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all flex items-center gap-2">
                Demander une démo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-slate-500 font-semibold text-lg transition-all">
                Télécharger la brochure
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Installation rapide
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Support inclus
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Made in France
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">HomeServer<span className="text-blue-400">GTL</span></span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          
          <div className="text-sm text-slate-500">
            © 2026 HomeServer GTL. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Apps />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}
