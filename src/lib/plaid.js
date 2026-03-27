// Plaid Link Integration
// This will be the bridge between the app and Plaid API

const PLAID_ENV = 'sandbox' // Change to 'production' later

// Initialize Plaid Link
export const createPlaidLink = (onSuccess, onExit) => {
  // This would normally load the Plaid script
  // For now, we'll use react-plaid-link in the component
  
  return {
    open: () => {
      console.log('Opening Plaid Link...')
      // Plaid Link will handle the bank connection flow
    }
  }
}

// Exchange public token for access token
// Note: This requires a backend server in production
export const exchangePublicToken = async (publicToken) => {
  // In production, this would be a call to your backend
  // which then calls Plaid's /item/public_token/exchange
  
  console.log('Exchanging public token:', publicToken)
  
  // For demo purposes, we'll simulate the response
  return {
    access_token: 'sandbox-demo-access-token',
    item_id: 'sandbox-demo-item-id'
  }
}

// Get transactions
export const getTransactions = async (accessToken, startDate, endDate) => {
  // In production, call your backend which calls Plaid /transactions/get
  // For demo, return mock data
  
  return [
    { transaction_id: '1', date: '2026-03-26', name: 'Shell Gas Station', amount: -45.00, category: ['Transport', 'Gas'] },
    { transaction_id: '2', date: '2026-03-25', name: 'In-N-Out Burger', amount: -12.50, category: ['Food', 'Restaurants'] },
    { transaction_id: '3', date: '2026-03-24', name: 'Payroll Deposit', amount: 2850.00, category: ['Income', 'Payroll'] },
    { transaction_id: '4', date: '2026-03-23', name: 'AT&T Bill', amount: -89.00, category: ['Bills', 'Utilities'] },
    { transaction_id: '5', date: '2026-03-22', name: 'Target', amount: -156.32, category: ['Shopping', 'General'] },
  ]
}

// Get account balance
export const getBalance = async (accessToken) => {
  // In production, call your backend which calls Plaid /accounts/balance/get
  
  return {
    accounts: [
      { account_id: '1', name: 'Checking', balances: { current: 5847.32 }, mask: '4532' },
      { account_id: '2', name: 'Savings', balances: { current: 7000.00 }, mask: '8821' }
    ]
  }
}

export default {
  createPlaidLink,
  exchangePublicToken,
  getTransactions,
  getBalance
}
