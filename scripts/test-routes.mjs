const routes = [
  '/',
  '/about',
  '/our-work',
  '/nutri-ed',
  '/impact',
  '/stories',
  '/stories/from-vulnerability-to-opportunity',
  '/gallery',
  '/events',
  '/volunteer',
  '/donate',
  '/contact',
  '/transparency',
  '/admin',
  '/privacy',
  '/terms',
  '/api/volunteers',
  '/api/donations',
  '/api/contact',
  '/api/metrics'
];

async function run() {
  console.log('Testing Astha Shakti Website endpoints at http://localhost:3000 ...\n');
  let passCount = 0;
  let failCount = 0;

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        console.log(`[PASS] ${res.status} - ${route}`);
        passCount++;
      } else {
        console.error(`[FAIL] ${res.status} - ${route}`);
        failCount++;
      }
    } catch (err) {
      console.error(`[ERR]  ${route}: ${err.message}`);
      failCount++;
    }
  }

  console.log(`\nVerification Complete: ${passCount} Passed, ${failCount} Failed.`);
  if (failCount > 0) process.exit(1);
}

run();
