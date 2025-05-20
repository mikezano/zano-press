#!/bin/bash

# Exit on error
#set -e

# Display steps as they are executed
#set -x

# Navigate to project directory (adjust if needed)
#cd "$(dirname "$0")"

# Clean previous build
rm -rf .vitepress/dist/

# Install dependencies
#npm install

# Build the site
#npm run docs:build
npm run build

# Create or update .nojekyll file (needed for GitHub Pages)
#touch .vitepress/dist/.nojekyll

# Optional: Deploy to GitHub Pages
# git add dist -f
# git commit -m "Deploy site updates"
# git subtree push --prefix dist origin gh-pages

#echo "Build completed successfully!"
#exit 0