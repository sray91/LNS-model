import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, TrendingDown, DollarSign, Search, Target, Layers, Network, ArrowDownUp, Lightbulb } from 'lucide-react'
import frameworkImage from './assets/ImprovingManufacturingProductivity_3.png'
import simplifiedMapImage from './assets/simplified-map.png'
import lnsLogo from './assets/lns-logo.png'
import challengesImage from './assets/screenshots/challenges.png'
import mitigantsImage from './assets/screenshots/mitigants.png'
import coreFailureImage from './assets/screenshots/core-failure.png'
import operationalChallengesImage from './assets/screenshots/operational-challenges.png'
import triggersImage from './assets/screenshots/triggers.png'
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
    id: 4.5,
    title: "Understanding Systems Maps",
    type: "causal-map-simplified",
    content: {
      headline: "How to Read a Causal Map",
      description: "Before we dive into the full framework, let's understand how causal maps work",
      points: [
        "Each box is a factor that influences the system",
        "Arrows show causal relationships: A → B means 'A influences B'",
        "Red arrows = negative/aggravating effects",
        "Blue arrows = positive/mitigating effects",
        "The system is organized in vertical tiers showing cause and effect chains"
      ],
      icon: Layers,
      color: "text-indigo-600"
    }
  },
  {
    id: 4.6,
    title: "The 5-Tier Architecture",
    type: "tier-architecture",
    content: {
      headline: "Five Layers of Cause and Effect",
      description: "Every complex system can be mapped through these interconnected layers",
      tiers: [
        {
          name: "Triggers & Controls",
          color: "bg-blue-500",
          textColor: "text-blue-600",
          role: "External/Systemic Drivers",
          examples: ["Global competition", "Regulatory pressures", "Energy costs", "Labor shortages"],
          function: "Root causes and environmental pressures that initiate problems"
        },
        {
          name: "Operational Challenges",
          color: "bg-red-500",
          textColor: "text-red-600",
          role: "Organizational/Process Failures",
          examples: ["Skill gaps", "Siloed departments", "Outdated equipment", "Poor data systems"],
          function: "Strategic weaknesses turn into day-to-day bottlenecks"
        },
        {
          name: "Core Failure Point",
          color: "bg-purple-600",
          textColor: "text-purple-600",
          role: "Systemic Failure",
          examples: ["Manufacturing Productivity Decline"],
          function: "The aggregated effect where all problems converge"
        },
        {
          name: "Mitigants",
          color: "bg-teal-500",
          textColor: "text-teal-600",
          role: "Leverage Points",
          examples: ["Workforce upskilling", "Predictive maintenance", "Lean systems", "Automation"],
          function: "Interventions that break negative loops or create positive ones"
        },
        {
          name: "Resulting Challenges",
          color: "bg-purple-500",
          textColor: "text-purple-600",
          role: "Socioeconomic Outcomes",
          examples: ["GDP loss", "Offshoring", "Wage stagnation", "Lost innovation"],
          function: "Visible consequences that often feed back to trigger layer"
        }
      ],
      icon: Network,
      color: "text-purple-600"
    }
  },
  {
    id: 4.7,
    title: "Feedback Loops",
    type: "feedback-loops",
    content: {
      headline: "Understanding Vicious vs. Virtuous Cycles",
      description: "Systems don't just flow downward—they create self-reinforcing loops",
      loops: [
        {
          type: "Vicious (Reinforcing Decline)",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-600",
          example: "Skill shortages → reduced productivity → cost-cutting → fewer training budgets → deeper skill shortages",
          impact: "Each cycle makes the problem worse"
        },
        {
          type: "Virtuous (Reinforcing Improvement)",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-600",
          example: "Predictive maintenance → reduced downtime → freed-up capital → reinvestment in modernization → sustained productivity",
          impact: "Each cycle makes the solution stronger"
        }
      ],
      insight: "Strategic leverage lies in finding where you can reverse a vicious cycle into a virtuous one",
      icon: ArrowDownUp,
      color: "text-blue-600"
    }
  },
  {
    id: 4.8,
    title: "Finding Leverage",
    type: "leverage-points",
    content: {
      headline: "Where to Intervene for Maximum Impact",
      description: "Not all interventions are equal—some nodes create cascading positive effects",
      principles: [
        "Trace arrows backward to find upstream causes you can influence",
        "Trace arrows forward to see downstream effects if unaddressed",
        "Identify nodes connected to multiple upstream AND downstream factors",
        "Design interventions as self-reinforcing loops, not one-time fixes"
      ],
      highLeverageExample: {
        intervention: "Cross-functional Quality Control System",
        upstreamImpacts: ["Prevents skill gap exploitation", "Reduces siloed decision-making"],
        downstreamImpacts: ["Avoids capital misinvestment", "Prevents quality failures", "Maintains customer trust"],
        roiMultiplier: "1:100+ (Prevented $10M spend with $100K system)"
      },
      icon: Lightbulb,
      color: "text-yellow-600"
    }
  },
  {
    id: 4.9,
    title: "The Full Framework",
    type: "framework-intro-full",
    content: {
      headline: "Now Let's See the Real System",
      description: "Here's the actual causal map for manufacturing productivity decline",
      framework: "The Complete Manufacturing Productivity Causal Model",
      subtext: "Notice how complex real systems are—but now you know how to read them"
    }
  },
  {
    id: 5,
    title: "Triggers & Controls",
    type: "causal-section",
    content: {
      headline: "Layer 1: Triggers & Controls",
      tier: "Triggers & Controls",
      description: "External and systemic drivers that initiate problems in the manufacturing system",
      screenshot: triggersImage,
      keyPoints: [
        "Global competition drives pressure to cut costs",
        "Energy price volatility affects production costs",
        "Regulatory pressures demand compliance investments",
        "Labor shortages limit operational capacity"
      ],
      gpExample: {
        title: "The Georgia Pacific Case",
        point: "Lack of Quality Control Systems",
        explanation: "No one was reviewing the supplier's certificate of analysis - this was the root trigger that started the cascade"
      },
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600"
    }
  },
  {
    id: 6,
    title: "Operational Challenges",
    type: "causal-section",
    content: {
      headline: "Layer 2: Operational Challenges",
      tier: "Operational Challenges",
      description: "Organizational and process failures that emerge from strategic weaknesses",
      screenshot: operationalChallengesImage,
      keyPoints: [
        "Skill gaps limit workforce effectiveness",
        "Siloed departments prevent collaboration",
        "Outdated equipment reduces efficiency",
        "Poor data systems hinder decision-making"
      ],
      gpExample: {
        title: "The Georgia Pacific Case",
        point: "Process Knowledge Gaps",
        explanation: "Teams didn't understand how input material changes affect 'product by process' manufacturing"
      },
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-600"
    }
  },
  {
    id: 7,
    title: "Core Failure Point",
    type: "causal-section",
    content: {
      headline: "Layer 3: Core Failure Point",
      tier: "Core Failure Point",
      description: "The central convergence where all upstream problems manifest as productivity decline",
      screenshot: coreFailureImage,
      keyPoints: [
        "Manufacturing productivity decline is the aggregated effect",
        "All triggers and operational challenges flow into this point",
        "Creates a vicious cycle that reinforces upstream problems",
        "Most visible symptom but treating it here wastes resources"
      ],
      gpExample: {
        title: "The Georgia Pacific Case",
        point: "Quality Control Failures",
        explanation: "The 'sandpaper toilet paper' was the visible symptom - treating this directly cost $10M without addressing root causes"
      },
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600"
    }
  },
  {
    id: 7.5,
    title: "Mitigants",
    type: "causal-section",
    content: {
      headline: "Layer 4: Mitigants (Leverage Points)",
      tier: "Mitigants",
      description: "Strategic interventions that break negative loops and create positive reinforcing cycles",
      screenshot: mitigantsImage,
      keyPoints: [
        "Workforce upskilling builds organizational capability",
        "Predictive maintenance prevents cascading failures",
        "Lean systems reduce waste and improve flow",
        "Strategic automation amplifies human effectiveness"
      ],
      gpExample: {
        title: "The Georgia Pacific Case",
        point: "Cross-functional Quality Control System",
        explanation: "A $100K investment in proper quality control would have prevented the $10M capital misinvestment - a 1:100 ROI"
      },
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-600"
    }
  },
  {
    id: 7.6,
    title: "Resulting Challenges",
    type: "causal-section",
    content: {
      headline: "Layer 5: Resulting Challenges",
      tier: "Resulting Challenges",
      description: "Socioeconomic outcomes that create feedback loops back to the trigger layer",
      screenshot: challengesImage,
      keyPoints: [
        "GDP loss from reduced manufacturing output",
        "Offshoring as companies seek lower costs",
        "Wage stagnation due to reduced productivity",
        "Lost innovation capacity and competitiveness"
      ],
      gpExample: {
        title: "The Georgia Pacific Case",
        point: "Capital Misinvestment",
        explanation: "The $10M spent on unnecessary equipment diverted resources from strategic initiatives, creating long-term competitive disadvantage"
      },
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600"
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
    id: 8.5,
    title: "Using the Map",
    type: "how-to-use",
    content: {
      headline: "How to Use This Map as a Strategic Tool",
      description: "Don't just read it—operationalize it to drive real change",
      steps: [
        {
          step: 1,
          action: "Map Your Position",
          description: "Circle the 3-5 nodes most active or painful right now in your organization",
          icon: Target,
          color: "text-blue-600"
        },
        {
          step: 2,
          action: "Trace Arrows Backward",
          description: "Find upstream causes you can actually influence (not just symptoms)",
          icon: Search,
          color: "text-purple-600"
        },
        {
          step: 3,
          action: "Trace Arrows Forward",
          description: "See what downstream effects will worsen if unaddressed",
          icon: TrendingDown,
          color: "text-red-600"
        },
        {
          step: 4,
          action: "Identify Leverage Nodes",
          description: "Mitigants connected to multiple upstream AND downstream nodes yield highest ROI",
          icon: Lightbulb,
          color: "text-yellow-600"
        },
        {
          step: 5,
          action: "Design Loop Interventions",
          description: "Every mitigation should create a self-reinforcing benefit, not a one-time patch",
          icon: ArrowDownUp,
          color: "text-green-600"
        }
      ],
      summaryTable: {
        title: "Strategic Systems View",
        headers: ["Layer", "Role", "Example Focus"],
        rows: [
          {
            layer: "Triggers & Controls",
            color: "bg-blue-100 text-blue-900",
            role: "External/Systemic Drivers",
            focus: "Global competition, energy costs"
          },
          {
            layer: "Operational Challenges",
            color: "bg-red-100 text-red-900",
            role: "Organizational/Process Failures",
            focus: "Skill gaps, silos, outdated equipment"
          },
          {
            layer: "Core",
            color: "bg-purple-100 text-purple-900",
            role: "Central Decline Node",
            focus: "Manufacturing productivity drop"
          },
          {
            layer: "Mitigants",
            color: "bg-teal-100 text-teal-900",
            role: "Leverage Points",
            focus: "Upskilling, automation, predictive maintenance"
          },
          {
            layer: "Results",
            color: "bg-purple-100 text-purple-900",
            role: "Socioeconomic Outcomes",
            focus: "GDP loss, offshoring, wage stagnation"
          }
        ]
      }
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
    if (screen.type === 'framework-intro' || screen.type === 'framework-intro-full' || screen.type === 'framework-detail' || screen.type === 'causal-section') {
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
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <screen.content.icon className={`w-20 h-20 mx-auto ${screen.content.color}`} />
            <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
            <div className="space-y-3 text-lg text-muted-foreground">
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
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <screen.content.icon className={`w-20 h-20 mx-auto ${screen.content.color}`} />
            <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
            <div className="space-y-3 text-lg text-muted-foreground">
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
                className="text-lg px-10 py-5 bg-orange-600 hover:bg-orange-700"
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
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <screen.content.icon className={`w-20 h-20 mx-auto ${screen.content.color}`} />
            <h1 className="text-3xl font-bold text-muted-foreground">{screen.content.headline}</h1>
            <motion.blockquote
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold italic border-l-8 border-blue-600 pl-8 text-left"
            >
              "{screen.content.quote}"
            </motion.blockquote>
            <p className="text-xl text-muted-foreground">{screen.content.subtext}</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-blue-600 font-semibold"
            >
              {screen.content.reflection}
            </motion.p>
          </motion.div>
        )

      case 'causal-map-simplified':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <screen.content.icon className={`w-16 h-16 mx-auto ${screen.content.color}`} />
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-2xl p-6"
            >
              <img
                src={simplifiedMapImage}
                alt="Simplified Causal Map"
                className="w-full h-auto"
              />
            </motion.div>

            <div className="grid gap-3">
              {screen.content.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg shadow"
                >
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'tier-architecture':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-6xl mx-auto space-y-5"
          >
            <div className="text-center space-y-2">
              <screen.content.icon className={`w-14 h-14 mx-auto ${screen.content.color}`} />
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>

            <div className="space-y-3">
              {screen.content.tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className={`${tier.color} text-white px-4 py-3 flex items-center justify-between`}>
                    <div>
                      <h3 className="text-lg font-bold">{tier.name}</h3>
                      <p className="text-xs opacity-90">{tier.role}</p>
                    </div>
                    <div className="text-3xl font-bold opacity-50">{i + 1}</div>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-sm font-semibold">{tier.function}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tier.examples.map((example, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full ${tier.color}`} />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center p-4 bg-purple-50 rounded-lg border-2 border-purple-200"
            >
              <p className="text-base font-semibold text-purple-900">
                Each tier connects to the next, creating cascading cause-and-effect chains
              </p>
            </motion.div>
          </motion.div>
        )

      case 'feedback-loops':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-6 pb-8"
          >
            <div className="text-center space-y-3">
              <screen.content.icon className={`w-16 h-16 mx-auto ${screen.content.color}`} />
              <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
              <p className="text-xl text-muted-foreground">{screen.content.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {screen.content.loops.map((loop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className={`${loop.bgColor} border-4 ${loop.borderColor} rounded-lg p-6 space-y-4`}
                >
                  <h3 className={`text-xl font-bold ${loop.color}`}>{loop.type}</h3>
                  <div className="bg-white rounded p-4 font-mono text-sm leading-relaxed">
                    {loop.example}
                  </div>
                  <p className="text-base font-semibold">{loop.impact}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-lg p-6 text-center"
            >
              <Lightbulb className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
              <p className="text-xl font-bold text-gray-900 leading-relaxed">{screen.content.insight}</p>
            </motion.div>
          </motion.div>
        )

      case 'leverage-points':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-5"
          >
            <div className="text-center space-y-2">
              <screen.content.icon className={`w-14 h-14 mx-auto ${screen.content.color}`} />
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-5 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">How to Find High-Leverage Points:</h3>
              {screen.content.principles.map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-yellow-500 text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-sm">{principle}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-xl p-5 border-4 border-green-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Real Example: The Georgia Pacific Case</h3>
              </div>

              <div className="bg-white rounded-lg p-4 mb-3">
                <h4 className="text-base font-bold text-gray-900 mb-1">Intervention:</h4>
                <p className="text-lg font-semibold text-green-600">{screen.content.highLeverageExample.intervention}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-blue-900 mb-2">Upstream Impacts:</h4>
                  {screen.content.highLeverageExample.upstreamImpacts.map((impact, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs mb-1">
                      <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{impact}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-purple-900 mb-2">Downstream Impacts:</h4>
                  {screen.content.highLeverageExample.downstreamImpacts.map((impact, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs mb-1">
                      <CheckCircle className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3 text-center">
                <p className="text-xs text-yellow-800 font-semibold mb-1">ROI Multiplier:</p>
                <p className="text-2xl font-bold text-yellow-900">{screen.content.highLeverageExample.roiMultiplier}</p>
              </div>
            </motion.div>
          </motion.div>
        )

      case 'framework-intro-full':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
              <p className="text-base font-semibold text-blue-600">{screen.content.framework}</p>
              <p className="text-sm text-muted-foreground">{screen.content.subtext}</p>
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
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg">
                    <p className="text-xs">Now you can read this complex map! Click Next to apply it.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case 'framework-intro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
              <p className="text-base font-semibold text-blue-600">{screen.content.framework}</p>
              <p className="text-sm text-muted-foreground">{screen.content.subtext}</p>
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
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg">
                    <p className="text-xs">Click Next to explore the framework</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case 'framework-detail':
        // Select the appropriate screenshot based on the section
        const getScreenshotImage = () => {
          switch (screen.content.section) {
            case 'top':
              return triggersImage
            case 'middle':
              return coreFailureImage
            case 'bottom':
              return challengesImage
            default:
              return frameworkImage
          }
        }

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className={`text-2xl font-bold ${screen.content.color}`}>{screen.content.focus}</p>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
              <p className="text-base font-semibold">{screen.content.detail}</p>
            </div>
            <AnimatePresence>
              {showFramework && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative bg-white rounded-lg shadow-2xl p-4 overflow-hidden"
                >
                  <img
                    src={getScreenshotImage()}
                    alt={`Manufacturing Productivity Framework - ${screen.content.focus}`}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )

      case 'causal-section':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-6xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>

            <AnimatePresence>
              {showFramework && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-2xl p-4 overflow-hidden"
                >
                  <img
                    src={screen.content.screenshot}
                    alt={`${screen.content.tier} Section`}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`${screen.content.bgColor} border-2 ${screen.content.borderColor} rounded-lg p-6 space-y-4`}
              >
                <h3 className={`text-xl font-bold ${screen.content.color}`}>Key Characteristics</h3>
                <div className="space-y-3">
                  {screen.content.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${screen.content.color} flex-shrink-0 mt-0.5`} />
                      <p className="text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-green-900">{screen.content.gpExample.title}</h3>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">{screen.content.gpExample.point}</p>
                  <p className="text-sm text-gray-700">{screen.content.gpExample.explanation}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )

      case 'revelation':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <screen.content.icon className={`w-20 h-20 mx-auto ${screen.content.color}`} />
            <h1 className="text-4xl font-bold text-center">{screen.content.headline}</h1>
            <div className="space-y-3 text-base">
              {screen.content.story.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>{line}</p>
                </motion.div>
              ))}
            </div>
            <motion.blockquote
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg font-bold italic border-l-8 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg"
            >
              {screen.content.insight}
            </motion.blockquote>
          </motion.div>
        )

      case 'how-to-use':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-6xl mx-auto space-y-5"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>

            <div className="grid md:grid-cols-5 gap-3">
              {screen.content.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-4 space-y-2 relative"
                >
                  <div className="absolute -top-3 -left-3 w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                  <step.icon className={`w-10 h-10 ${step.color} mx-auto mt-2`} />
                  <h3 className="text-sm font-bold text-center">{step.action}</h3>
                  <p className="text-xs text-muted-foreground text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-xl p-5"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">{screen.content.summaryTable.title}</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      {screen.content.summaryTable.headers.map((header, i) => (
                        <th key={i} className="px-4 py-2 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {screen.content.summaryTable.rows.map((row, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className={`px-4 py-3 whitespace-nowrap font-bold ${row.color} rounded-l text-sm`}>
                          {row.layer}
                        </td>
                        <td className="px-4 py-3 text-xs font-semibold text-gray-900">
                          {row.role}
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-700">
                          {row.focus}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-300"
            >
              <p className="text-lg font-semibold text-gray-900">
                This is not a report—it's a strategic decision tool
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Identify your leverage nodes to maximize ROI and break vicious cycles
              </p>
            </motion.div>
          </motion.div>
        )

      case 'self-assessment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
              <p className="text-lg text-muted-foreground">{screen.content.description}</p>
            </div>
            <div className="space-y-3">
              {screen.content.questions.map((question, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => toggleQuestion(i)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedQuestions.includes(i)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-border hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">{question}</span>
                    {selectedQuestions.includes(i) && (
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600">{screen.content.cta}</p>
              {selectedQuestions.length > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-base text-muted-foreground"
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
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold">{screen.content.headline}</h1>
              <p className="text-xl font-semibold text-blue-600">{screen.content.cta}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h2 className="text-xl font-bold">What You'll Gain:</h2>
                {screen.content.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-base">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold">Take Action:</h2>
                {screen.content.actions.map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Button
                      size="lg"
                      className="w-full text-base py-5"
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
              className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200"
            >
              <p className="text-lg font-semibold">
                Transform how you think about manufacturing productivity
              </p>
              <p className="text-sm text-muted-foreground mt-2">
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
      {/* Header with logo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
          <img src={lnsLogo} alt="LNS Research" className="h-8" />
        </div>
        {/* Progress bar */}
        <div className="h-2 bg-slate-200">
          <motion.div
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-8 pt-24 pb-24">
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
