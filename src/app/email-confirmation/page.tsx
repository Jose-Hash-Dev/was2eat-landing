'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function EmailConfirmationContent() {
  const searchParams = useSearchParams()
  const [confirmationStatus, setConfirmationStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!searchParams) return
    
    // Check for error parameters
    const error = searchParams.get('error')
    const errorCode = searchParams.get('error_code')
    const errorDescription = searchParams.get('error_description')
    
    // Check for success parameters
    const token = searchParams.get('token')
    const type = searchParams.get('type')
    const email = searchParams.get('email')

    if (error || errorCode) {
      setConfirmationStatus('error')
      
      // Handle different error codes
      if (errorCode === 'otp_expired') {
        setMessage('Email verification link has expired. Please request a new verification email.')
      } else if (errorCode === 'access_denied') {
        setMessage('Email verification failed. The link may be invalid or already used.')
      } else if (errorDescription) {
        setMessage(decodeURIComponent(errorDescription))
      } else {
        setMessage('Email verification failed. Please try again.')
      }
    } else if (token && type === 'signup') {
      setConfirmationStatus('success')
      const decodedEmail = email ? decodeURIComponent(email) : ''
      setMessage(`Email successfully verified! Your account${decodedEmail ? ` (${decodedEmail})` : ''} is now active.`)
    } else {
      setConfirmationStatus('error')
      setMessage('Invalid verification link. Please check your email and try again.')
    }
  }, [searchParams])

  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#00BF63', fontSize: '28px', marginBottom: '20px' }}>Was2Eat</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>
          Email Confirmation
        </h2>
        
        {confirmationStatus === 'loading' && (
          <p style={{ color: '#666', fontSize: '16px' }}>
            Confirming your email...
          </p>
        )}
        
        {confirmationStatus === 'success' && (
          <div>
            <p style={{ color: '#00BF63', fontSize: '18px', fontWeight: 'bold' }}>
              ✅ Success!
            </p>
            <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.5' }}>
              {message}
            </p>
          </div>
        )}
        
        {confirmationStatus === 'error' && (
          <div>
            <p style={{ color: '#dc3545', fontSize: '18px', fontWeight: 'bold' }}>
              ❌ Confirmation Failed
            </p>
            <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.5' }}>
              {message}
            </p>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <Link 
          href="/" 
          style={{ 
            color: '#00BF63', 
            textDecoration: 'none', 
            fontSize: '16px',
            border: '1px solid #00BF63',
            padding: '10px 20px',
            borderRadius: '5px',
            display: 'inline-block'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default function EmailConfirmationPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#00BF63', fontSize: '28px', marginBottom: '20px' }}>Was2Eat</h1>
        <p style={{ color: '#666', fontSize: '16px' }}>Loading...</p>
      </div>
    }>
      <EmailConfirmationContent />
    </Suspense>
  )
} 