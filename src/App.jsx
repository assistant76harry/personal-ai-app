import React, { useState, useEffect } from 'react'
import { Wallet, PieChart, Bell, MessageSquare, Settings, TrendingUp, CreditCard, Calendar, Plus, Send } from 'lucide-react'

// Mock data for demonstration
const mockTransactions = [
  { id: 1, date: '2026-03-26', name: 'Shell Gas Station', amount: -45.00, category: 'Transport' },
  { id: 2, date: '2026-03-25', name: 'In-N-Out Burger', amount: -12.50, category: 'Food' },
  { id: 3, date: '2026-03-24', name: 'Payroll Deposit', amount: 2850.00, category: 'Income' },
  { id: 4, date: '2026-03-23', name: 'AT&T Bill', amount: -89.00, category: 'Bills' },
  { id: 5, date: '2026-03-22', name: 'Target', amount: -156.32, category: 'Shopping' },
]

const mockBudgets = [
  { category: 'Food', budget: 600, spent: 423.50 },
  { category: 'Transport', budget: 400, spent: 312.00 },
  { category: 'Bills', budget: 800, spent: 756.00 },
  { category: 'Shopping', budget: 300, spent: 156.32 },
]

const mockBills = [
  { name: 'AT&T', dueDate: '2026-04-01', amount: 89.00 },
  { name: 'PG&E', dueDate: '2026-04-05', amount: 145.00 },
  { name: 'Car Insurance', dueDate: '2026-04-10', amount: 178.00 },
]

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey Ravi! I\'m your personal AI assistant. Ask me anything about your finances, bills, or what you need done.' }
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (!input.trim()) return
    
    const userMsg = { role: 'user', content: input }
    setMessages([...messages, userMsg])
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: 'assistant', 
        content: getAIResponse(input) 
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
    
    setInput('')
  }

  const getAIResponse = (query) => {
    const q = query.toLowerCase()
    if (q.includes('balance') || q.includes('how much')) {
      return 'Your current balance across all accounts: $12,847.32'
    } else if (q.includes('bill') || q.includes('due')) {
      return 'You have 3 bills coming up: AT&T ($89, due Apr 1), PG&E ($145, due Apr 5), Car Insurance ($178, due Apr 10)'
    } else if (q.includes('spend') || q.includes('where')) {
      return 'This month you\'ve spent: Food $423.50, Transport $312, Bills $756, Shopping $156.32'
    } else if (q.includes('budget')) {
      return 'Budget status: Food 70% used, Transport 78% used, Bills 94% used (warning!), Shopping 52% used'
    }
    return 'I can help with balances, budgets, bills, and spending. What would you like to know?'
  }

  const tabs = [
    { id: 'dashboard', icon: Wallet, label: 'Dashboard' },
    { id: 'budget', icon: PieChart, label: 'Budget' },
    { id: 'bills', icon: Bell, label: 'Bills' },
    { id: 'chat', icon: MessageSquare, label: 'AI Chat' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-gray-800 flex flex-col items-center py-6">
        <div className="mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl font-bold">H</div>
        </div>
        <nav className="flex flex-col gap-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-xl transition ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
            >
              <tab.icon size={24} />
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 p-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
            {/* Balance Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm">Total Balance</p>
                <p className="text-3xl font-bold text-green-400">$12,847.32</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm">Monthly Income</p>
                <p className="text-3xl font-bold">$2,850.00</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm">Monthly Spending</p>
                <p className="text-3xl font-bold text-red-400">$1,647.82</p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-3">
                {mockTransactions.map(tx => (
                  <div key={tx.id} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <p className="text-gray-400 text-sm">{tx.date} • {tx.category}</p>
                    </div>
                    <span className={tx.amount > 0 ? 'text-green-400' : 'text-white'}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Budget</h1>
            <div className="grid grid-cols-2 gap-4">
              {mockBudgets.map(b => (
                <div key={b.category} className="bg-gray-800 p-6 rounded-2xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{b.category}</span>
                    <span className="text-gray-400">${b.spent} / ${b.budget}</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${b.spent/b.budget > 0.9 ? 'bg-red-500' : b.spent/b.budget > 0.7 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${(b.spent/b.budget)*100}%` }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{Math.round((b.spent/b.budget)*100)}% used</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bills' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Upcoming Bills</h1>
            <div className="space-y-4">
              {mockBills.map(bill => (
                <div key={bill.name} className="bg-gray-800 p-6 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-xl font-semibold">{bill.name}</p>
                    <p className="text-gray-400">Due: {bill.dueDate}</p>
                  </div>
                  <p className="text-2xl font-bold text-orange-400">${bill.amount.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="h-[calc(100vh-4rem)] flex flex-col">
            <h1 className="text-3xl font-bold mb-4">AI Assistant</h1>
            <div className="flex-1 bg-gray-800 rounded-2xl p-4 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, i) => (
                <div key={i} className={`${msg.role === 'user' ? 'ml-auto bg-blue-600' : 'bg-gray-700'} p-4 rounded-xl max-w-md`}>
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about your finances..."
                className="flex-1 bg-gray-800 p-4 rounded-xl text-white"
              />
              <button onClick={handleSendMessage} className="bg-blue-600 p-4 rounded-xl">
                <Send />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CreditCard size={24} />
                    <span>Bank of America ****4532</span>
                  </div>
                  <span className="text-green-400">Connected</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar size={24} />
                    <span>Google Calendar</span>
                  </div>
                  <span className="text-green-400">Connected</span>
                </div>
                <button className="w-full p-4 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-gray-400">
                  + Connect New Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
