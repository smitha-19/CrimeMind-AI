import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import ConversationHistory from '../components/ai-assistant/ConversationHistory.jsx'
import ChatWindow from '../components/ai-assistant/ChatWindow.jsx'
import InsightsPanel from '../components/ai-assistant/InsightsPanel.jsx'
import { conversationGroups, initialMessages } from '../data/aiAssistantData.js'

const MOBILE_VIEWS = [
  { id: 'history', label: 'History', icon: 'history' },
  { id: 'chat', label: 'Chat', icon: 'chat' },
  { id: 'insights', label: 'Insights', icon: 'query_stats' },
]

export default function AIAssistant() {
  const [activeConversation, setActiveConversation] = useState('c1')
  const [messages, setMessages] = useState(initialMessages)
  const [isTyping, setIsTyping] = useState(false)
  const [mobileView, setMobileView] = useState('chat')

  function handleSend(text) {
    const userMsg = { id: `u-${Date.now()}`, role: 'user', text, time: 'Now', status: 'Delivered' }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    // Mock AI response — no backend wired up yet
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'ai',
          text: "I've queued that query for analysis. Once connected to the CrimeMind intelligence engine, this response will include live case correlations and confidence scoring.",
        },
      ])
    }, 1200)
  }

  return (
    <div className="h-[calc(100vh-theme(spacing.topbar-height))] flex flex-col">
      {/* Mobile view switcher */}
      <div className="lg:hidden flex border-b border-outline-variant bg-surface-container-lowest">
        {MOBILE_VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => setMobileView(v.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-body-sm font-bold transition-colors ${
              mobileView === v.id ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'
            }`}
          >
            <Icon name={v.icon} size="18px" />
            {v.label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex overflow-hidden">
        <ConversationHistory
          groups={conversationGroups}
          activeId={activeConversation}
          onSelect={setActiveConversation}
          className={mobileView === 'history' ? 'flex' : 'hidden lg:flex'}
        />
        <div className={`flex-1 min-w-0 ${mobileView === 'chat' ? 'flex' : 'hidden lg:flex'}`}>
          <ChatWindow messages={messages} onSend={handleSend} isTyping={isTyping} />
        </div>
        <InsightsPanel className={mobileView === 'insights' ? 'flex' : 'hidden lg:flex'} />
      </div>
    </div>
  )
}
