import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ChevronRight, ChevronLeft, ZoomIn, AlertCircle, CheckCircle, TrendingDown, DollarSign, Search, Target } from 'lucide-react'
import frameworkImage from './assets/ImprovingManufacturingProductivity_3.png'
import './App.css'

const screens = [
  {
    id: 1,
    title: "The Crisis",
    type: "story",
    content: {
      headline: "Imagine you're a division leader at Georgia Pacific...",
      scenario: [
        "Your biggest customer calls with an urgent complaint",
        "Costco reports: \"Your toilet paper feels like sandpaper\"",
        "You're the sole supplier - this could cost millions in lost business",
        "The commercial team is demanding immediate action"
      ],
      icon: AlertCircle,
      color: "text-red-600"
    }
  },
  {
    id: 2,
    title: "The Reactive Response",
    type: "decision",
    content: {
      headline: "The Pressure Mounts",
      scenario: [
        "Commercial team: \"We need this fixed NOW\"",
        "Engineering proposes a $10 million capital project",
        "Install a new refiner to improve fiber processing",
        "Timeline: Complete in one quarter",
        "Result: Problem solved... or is it?"
      ],
      decision: "Approve $10M Capital Investment",
      icon: DollarSign,
      color: "text-orange-600"
    }
  },
  {
    id: 3,
    title: "The Question",
    type: "coaching",
    content: {
      headline: "Mike's Coaching Question",
      quote: "How do you think about that decision?",
      subtext: "Was this really the right investment?",
      reflection: "You fixed the symptom... but did you solve the problem?",
      icon: Search,
      color: "text-blue-600"
    }
  },
  {
    id: 4,
    title: "Introducing the Framework",
    type: "framework-intro",
    content: {
      headline: "A Different Way to Think",
      description: "Let me show you how to diagnose what really happened...",
      framework: "The Manufacturing Productivity Causal Model",
      subtext: "This framework maps the relationships between triggers, challenges, and outcomes"
    }
  },
  {
    id: 5,
    title: "The Symptom",
    type: "framework-detail",
    content: {
      headline: "Start at the Bottom: The Symptom",
      focus: "Quality Control Failures",
      description: "The sandpaper toilet paper was a quality control failure",
      detail: "This is what you saw - but it's not the root cause",
      section: "bottom",
      color: "text-purple-600"
    }
  },
  {
    id: 6,
    title: "The Consequence",
    type: "framework-detail",
    content: {
      headline: "Following the Chain: Capital Misinvestment",
      focus: "Your $10 Million Spent Here",
      description: "Quality failures lead to reactive capital spending",
      detail: "You invested $10M to treat a symptom, not prevent the cause",
      section: "middle",
      color: "text-pink-600"
    }
  },
  {
    id: 7,
    title: "The Root Cause",
    type: "framework-detail",
    content: {
      headline: "The Real Problem: At the Top",
      focus: "Lack of Quality Control Systems",
      description: "The root cause was in your triggers and controls",
      detail: "No one was reviewing the supplier's certificate of analysis",
      section: "top",
      color: "text-blue-600"
    }
  },
  {
    id: 8,
    title: "The Discovery",
    type: "revelation",
    content: {
      headline: "What Really Happened",
      story: [
        "Your fiber supplier (SCA) changed their production process",
        "The fiber still met specifications - but the qualities were different",
        "Paper machines are 'product by process' - small input changes create output issues",
        "No one in your organization was monitoring incoming material certificates",
        "The gap in your quality control process cost you $10 million"
      ],
      insight: "\"We just spent $10 million because we didn't have robustness in our quality control process\"",
      icon: Target,
      color: "text-green-600"
    }
  },
  {
    id: 9,
    title: "The Application",
    type: "self-assessment",
    content: {
      headline: "Now It's Your Turn",
      description: "Use the framework to diagnose your own challenges",
      questions: [
        "Do you have excessive approval layers?",
        "Is there talent draining in your organization?",
        "Have you lost tacit knowledge?",
        "Are there gaps in your quality control systems?",
        "Do you have too much decision latency?"
      ],
      cta: "Where are YOUR triggers showing up?"
    }
  },
  {
    id: 10,
    title: "The Methodology",
    type: "next-steps",
    content: {
      headline: "Master the Framework",
      benefits: [
        "Move from reactive firefighting to proactive prevention",
        "Avoid costly capital misinvestments",
        "Build systematic controls and processes",
        "Teach your team to think causally about productivity",
        "Join an exclusive community of operational leaders"
      ],
      cta: "Ready to go deeper?",
      actions: [
        "Schedule a coaching session",
        "Access the full framework tool",
        "Join the COO Council"
      ]
    }
  }
]

function App() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [showFramework, setShowFramework] = useState(false)
  const [frameworkZoom, setFrameworkZoom] = useState(1)
  const [selectedQuestions, setSelectedQuestions] = useState([])

  const screen = screens[currentScreen]

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
      setShowFramework(false)
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
      setShowFramework(false)
    }
  }

  const toggleQuestion = (index) => {
    setSelectedQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  useEffect(() => {
    if (screen.type === 'framework-intro' || screen.type === 'framework-detail') {
      setTimeout(() => setShowFramework(true), 500)
    }
  }, [currentScreen, screen.type])

  const renderScreen = () => {
    switch (screen.type) {
      case 'story':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <screen.content.icon className={`w-24 h-24 mx-auto ${screen.content.color}`} />
            <h1 className="text-5xl font-bold">{screen.content.headline}</h1>
            <div className="space-y-4 text-xl text-muted-foreground">
              {screen.content.scenario.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )

      case 'decision':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <screen.content.icon className={`w-24 h-24 mx-auto ${screen.content.color}`} />
            <h1 className="text-5xl font-bold">{screen.content.headline}</h1>
            <div className="space-y-4 text-xl text-muted-foreground">
              {screen.content.scenario.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-orange-600 hover:bg-orange-700"
              >
                {screen.content.decision}
              </Button>
            </motion.div>
          </motion.div>
        )

      case 'coaching':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <screen.content.icon className={`w-24 h-24 mx-auto ${screen.content.color}`} />
            <h1 className="text-4xl font-bold text-muted-foreground">{screen.content.headline}</h1>
            <motion.blockquote
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold italic border-l-8 border-blue-600 pl-8 text-left"
            >
              "{screen.content.quote}"
            </motion.blockquote>
            <p className="text-2xl text-muted-foreground">{screen.content.subtext}</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-blue-600 font-semibold"
            >
              {screen.content.reflection}
            </motion.p>
          </motion.div>
        )

      case 'framework-intro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold">{screen.content.headline}</h1>
              <p className="text-2xl text-muted-foreground">{screen.content.description}</p>
              <p className="text-xl font-semibold text-blue-600">{screen.content.framework}</p>
              <p className="text-lg text-muted-foreground">{screen.content.subtext}</p>
            </div>
            <AnimatePresence>
              {showFramework && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative bg-white rounded-lg shadow-2xl p-4 overflow-hidden"
                >
                  <img 
                    src={frameworkImage} 
                    alt="Manufacturing Productivity Framework"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm">Click Next to explore the framework</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case 'framework-detail':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
              <p className={`text-3xl font-bold ${screen.content.color}`}>{screen.content.focus}</p>
              <p className="text-xl text-muted-foreground">{screen.content.description}</p>
              <p className="text-lg font-semibold">{screen.content.detail}</p>
            </div>
            <AnimatePresence>
              {showFramework && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative bg-white rounded-lg shadow-2xl p-4 overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={frameworkImage} 
                      alt="Manufacturing Productivity Framework"
                      className="w-full h-auto"
                    />
                    {/* Highlight overlay based on section */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      className={`absolute inset-0 pointer-events-none ${
                        screen.content.section === 'top' ? 'bg-gradient-to-b from-blue-500 to-transparent' :
                        screen.content.section === 'middle' ? 'bg-gradient-to-b from-transparent via-pink-500 to-transparent' :
                        'bg-gradient-to-t from-purple-500 to-transparent'
                      }`}
                    />
                  </div>
                  <div className={`absolute top-4 right-4 ${screen.content.color} bg-white px-6 py-3 rounded-lg shadow-lg border-4 border-current`}>
                    <p className="text-lg font-bold">{screen.content.focus}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case 'revelation':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <screen.content.icon className={`w-24 h-24 mx-auto ${screen.content.color}`} />
            <h1 className="text-5xl font-bold text-center">{screen.content.headline}</h1>
            <div className="space-y-4 text-lg">
              {screen.content.story.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p>{line}</p>
                </motion.div>
              ))}
            </div>
            <motion.blockquote
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl font-bold italic border-l-8 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg"
            >
              {screen.content.insight}
            </motion.blockquote>
          </motion.div>
        )

      case 'self-assessment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold">{screen.content.headline}</h1>
              <p className="text-xl text-muted-foreground">{screen.content.description}</p>
            </div>
            <div className="space-y-4">
              {screen.content.questions.map((question, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => toggleQuestion(i)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                    selectedQuestions.includes(i)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-border hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{question}</span>
                    {selectedQuestions.includes(i) && (
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{screen.content.cta}</p>
              {selectedQuestions.length > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-lg text-muted-foreground"
                >
                  You've identified {selectedQuestions.length} potential trigger area{selectedQuestions.length !== 1 ? 's' : ''}
                </motion.p>
              )}
            </div>
          </motion.div>
        )

      case 'next-steps':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold">{screen.content.headline}</h1>
              <p className="text-2xl font-semibold text-blue-600">{screen.content.cta}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What You'll Gain:</h2>
                {screen.content.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Take Action:</h2>
                {screen.content.actions.map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-6"
                      variant={i === 0 ? "default" : "outline"}
                    >
                      {action}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center p-8 bg-blue-50 rounded-lg border-2 border-blue-200"
            >
              <p className="text-xl font-semibold">
                Transform how you think about manufacturing productivity
              </p>
              <p className="text-muted-foreground mt-2">
                Join the exclusive COO Council community
              </p>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-slate-200 z-50">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            size="lg"
            onClick={prevScreen}
            disabled={currentScreen === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentScreen + 1} / {screens.length}
            </span>
            <span className="text-sm font-medium">{screen.title}</span>
          </div>

          <Button
            size="lg"
            onClick={nextScreen}
            disabled={currentScreen === screens.length - 1}
            className="gap-2"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
