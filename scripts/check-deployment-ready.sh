#!/bin/bash

# GT Media - Deployment Readiness Check
# Run this script before deploying to ensure everything is configured correctly

set -e

echo "🚀 GT Media - Deployment Readiness Check"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print success
success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Function to print error
error() {
    echo -e "${RED}✗${NC} $1"
}

# Function to print warning
warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check Node version
echo "1. Checking Node version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
    success "Node version $(node -v) is compatible"
else
    error "Node version must be 18 or higher. Current: $(node -v)"
    exit 1
fi
echo ""

# Check if pnpm is installed
echo "2. Checking package manager..."
if command -v pnpm &> /dev/null; then
    success "pnpm is installed ($(pnpm -v))"
else
    error "pnpm is not installed. Run: npm install -g pnpm"
    exit 1
fi
echo ""

# Check if dependencies are installed
echo "3. Checking dependencies..."
if [ -d "node_modules" ]; then
    success "Dependencies installed"
else
    warning "Dependencies not installed. Running pnpm install..."
    pnpm install
fi
echo ""

# Check environment variables
echo "4. Checking environment variables..."
if [ -f ".env.local" ]; then
    success ".env.local file exists"
    
    # Check for required variables
    if grep -q "SANITY_PROJECT_ID=" .env.local; then
        SANITY_ID=$(grep "SANITY_PROJECT_ID=" .env.local | cut -d'=' -f2)
        if [ "$SANITY_ID" = "placeholder" ] || [ "$SANITY_ID" = "your_project_id_here" ] || [ -z "$SANITY_ID" ]; then
            warning "SANITY_PROJECT_ID is set to placeholder. Update for production."
        else
            success "SANITY_PROJECT_ID is configured"
        fi
    else
        warning "SANITY_PROJECT_ID not found in .env.local"
    fi
    
    if grep -q "REVALIDATE_SECRET=" .env.local; then
        success "REVALIDATE_SECRET is set"
    else
        warning "REVALIDATE_SECRET not set. Generate one: openssl rand -base64 32"
    fi
else
    error ".env.local file not found. Copy from .env.local.example"
    exit 1
fi
echo ""

# Run TypeScript check
echo "5. Running TypeScript check..."
if pnpm typecheck > /dev/null 2>&1; then
    success "TypeScript compilation successful"
else
    error "TypeScript errors found. Run: pnpm typecheck"
    exit 1
fi
echo ""

# Run linting
echo "6. Running linter..."
if pnpm lint > /dev/null 2>&1; then
    success "Linting passed"
else
    warning "Linting issues found. Run: pnpm lint --fix"
fi
echo ""

# Test build
echo "7. Testing production build..."
echo "   This may take a minute..."
if pnpm build > /dev/null 2>&1; then
    success "Production build successful"
else
    error "Build failed. Run: pnpm build"
    exit 1
fi
echo ""

# Check for .env files in git
echo "8. Checking Git configuration..."
if git check-ignore .env.local > /dev/null 2>&1; then
    success ".env.local is properly ignored by Git"
else
    error ".env.local is NOT ignored by Git! Check .gitignore"
    exit 1
fi
echo ""

# Summary
echo "========================================"
echo -e "${GREEN}✓ All checks passed!${NC}"
echo ""
echo "Next steps:"
echo "  1. Review PRE-DEPLOYMENT-CHECKLIST.md"
echo "  2. Set environment variables on your deployment platform"
echo "  3. Deploy using: vercel --prod"
echo "  4. Or push to main branch for auto-deploy"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
echo ""
