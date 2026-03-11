# deploy.ps1 - Antigravity Automated Deployment Script

# --- Configuration (Loaded from .env) ---
if (Test-Path ".env") {
    Get-Content ".env" | ForEach-Object {
        $name, $value = $_.Split('=', 2)
        Set-Variable -Name $name -Value $value -Scope Script
    }
}
$COMMIT_MSG = "Site update via Antigravity ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"

Write-Host "🚀 Starting deployment flow..." -ForegroundColor Cyan

# 1. Save and Push to GitHub
Write-Host "📦 Pushing changes to GitHub..." -ForegroundColor Yellow
git add .
git commit -m "$COMMIT_MSG"
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Git push failed. Please check your connection or token." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "✅ GitHub sync complete!" -ForegroundColor Green

# 2. Verify Cloudflare Status
Write-Host "📡 Checking Cloudflare Pages status..." -ForegroundColor Yellow
$env:CLOUDFLARE_API_TOKEN = $CF_API_TOKEN
$env:CLOUDFLARE_ACCOUNT_ID = $CF_ACCOUNT_ID
npx wrangler pages project list

Write-Host "✨ Deployment flow finished! Your site will be live in a few moments." -ForegroundColor Green
Write-Host "🔗 URL: https://my-office-site.pages.dev" -ForegroundColor Cyan
