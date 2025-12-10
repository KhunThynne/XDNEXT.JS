@echo off
echo Starting Stripe CLI listener...
echo Forwarding webhooks to http://localhost:3000/api/stripe/webhooks
echo Press Ctrl+C to stop.
stripe listen --forward-to localhost:3000/api/stripe/webhooks
pause