// OpenClaw AI Integration
// This connects the app to OpenClaw for AI chat functionality

const OPENCLAW_API_URL = 'http://localhost:18789' // Local gateway
const API_KEY = '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'

// Send message to AI
export const sendMessageToAI = async (message, conversationHistory = []) => {
  try {
    // For now, we'll use a simple approach - calling the OpenClaw API
    // In production, this would be a proper backend endpoint
    
    const response = await fetch(`${OPENCLAW_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        message,
        history: conversationHistory,
        model: 'minimax/minimax-m2.5'
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to get AI response')
    }
    
    const data = await response.json()
    return data.response || data.message || 'I\'m here to help with your finances!'
  } catch (error) {
    console.error('AI Error:', error)
    return 'I\'m having trouble connecting right now. Try again in a moment.'
  }
}

// Financial-specific prompts
export const financialPrompt = (question) => {
  const q = question.toLowerCase()
  
  // If asking about balance
  if (q.includes('balance') || q.includes('how much')) {
    return 'Respond with the current balance from the connected bank account. Say something like: "Your current balance is $X,XXX.XX"'
  }
  
  // If asking about spending
  if (q.includes('spend') || q.includes('where')) {
    return 'Respond with a breakdown of spending by category this month. Include specific amounts.'
  }
  
  // If asking about budget
  if (q.includes('budget')) {
    return 'Respond with budget status: show each category, budget limit, current spending, and percentage used. Alert if over 80%.'
  }
  
  // If asking about bills
  if (q.includes('bill') || q.includes('due')) {
    return 'Respond with upcoming bills: bill name, due date, amount. Say when each is due.'
  }
  
  // Default - helpful finance response
  return 'Give a helpful, brief response about personal finance. Keep it conversational and actionable.'
}

// Format AI response for display
export const formatFinanceResponse = (response) => {
  // Add emoji and formatting
  return response
    .replace(/\$/g, '💰 ')
    .replace(/balance/gi, '💳 balance')
    .replace(/spent/gi, '📊 spent')
    .replace(/budget/gi, '📋 budget')
    .replace(/bill/gi, '📅 bill')
}

export default {
  sendMessageToAI,
  financialPrompt,
  formatFinanceResponse
}
