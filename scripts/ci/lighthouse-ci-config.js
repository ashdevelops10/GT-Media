module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm dev",
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/work",
        "http://localhost:3000/services",
        "http://localhost:3000/contact",
        "http://localhost:3000/case-studies/auric-records-launch"
      ],
      numberOfRuns: 2,
      settings: {
        preset: "desktop"
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
