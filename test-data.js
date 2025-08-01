// Simple test to validate data files
const { execSync } = require('child_process');

try {
  // Test TypeScript compilation
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript compilation successful ✅ 👽 all is well');
} catch (error) {
  console.error('TypeScript compilation failed: ❌ 🤬 somthing broke ', error.message);
  process.exit(1);
}