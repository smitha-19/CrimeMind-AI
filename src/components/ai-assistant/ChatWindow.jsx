import { useState, useRef, useEffect } from 'react'
import Icon from '../ui/Icon.jsx'
import { quickPrompts } from '../../data/aiAssistantData.js'

function UserBubble({ message }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[90%] sm:max-w-[80%] bg-surface-container-highest border border-outline-variant px-5 py-3 rounded-2xl rounded-tr-none">
        <p className="text-on-surface">{message.text}</p>
        <div className="mt-2 flex justify-end">
          <span className="text-[10px] text-on-surface-variant">
            {message.time} • {message.status}
          </span>
        </div>
      </div>
    </div>
  )
}

function AiBubble({ message }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[95%] sm:max-w-[90%] space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
            <Icon name="smart_toy" className="text-primary text-sm" filled />
          </div>
          <div className="bg-primary-container/10 border border-primary/20 p-5 rounded-2xl rounded-tl-none relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <p className="text-on-surface mb-4">{message.text}</p>
            {message.dataCards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {message.dataCards.map((card) => (
                  <div key={card.label} className="bg-surface-container p-4 rounded-xl border border-outline-variant">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={card.icon} className={`${card.iconColor} text-sm`} />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">{card.label}</span>
                    </div>
                    <p className="font-data-mono text-data-mono text-on-surface">{card.value}</p>
                  </div>
                ))}
              </div>
            )}
            {message.summaryAction && (
              <div className="mt-4 p-3 bg-surface-container-high rounded-lg flex items-center justify-between gap-2">
                <span className="text-body-sm font-bold text-primary">Case Summary Generated</span>
                <button className="bg-primary text-on-primary px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider shrink-0">
                  {message.summaryAction}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChatWindow({ messages, onSend, isTyping }) {
  const [input, setInput] = useState('')
  const textareaRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function handleSend() {
    if (!input.trim()) return
    onSend(input.trim())
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="flex-1 flex flex-col relative bg-surface-dim min-w-0">
      <div className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-outline-variant glass-panel">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-2 h-2 rounded-full bg-status-success animate-pulse shrink-0" />
          <span className="font-body-sm font-semibold truncate">Active: Pattern Analysis Node</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden sm:flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps">
            <Icon name="download" className="text-base" />
            Download
          </button>
          <button className="hidden sm:flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps">
            <Icon name="share" className="text-base" />
            Share
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-6">
        {messages.map((m) => (m.role === 'user' ? <UserBubble key={m.id} message={m} /> : <AiBubble key={m.id} message={m} />))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
              <Icon name="smart_toy" className="text-on-surface-variant text-sm" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.1s]" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.3s]" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 sm:p-6 border-t border-outline-variant bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1 custom-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => setInput(prompt)}
                className="px-4 py-1.5 rounded-full border border-outline-variant bg-surface text-body-sm text-on-surface-variant hover:border-primary hover:text-primary transition-all whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="relative flex items-end gap-3">
            <div className="flex-1 bg-surface-container-high rounded-2xl border border-outline-variant p-1 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
              <textarea
                ref={textareaRef}
                className="w-full bg-transparent border-none text-on-surface placeholder:text-on-surface-variant resize-none py-3 px-4 focus:ring-0 text-body-md"
                placeholder="Type your query in English or ಕನ್ನಡ..."
                rows={1}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  e.target.style.height = 'auto'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }}
                onKeyDown={handleKeyDown}
              />
              <div className="flex items-center justify-between px-3 pb-2">
                <div className="flex items-center gap-1">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Icon name="attach_file" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Icon name="image" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Icon name="mic" />
                  </button>
                </div>
                <button
                  className="w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95"
                  onClick={handleSend}
                >
                  <Icon name="send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
