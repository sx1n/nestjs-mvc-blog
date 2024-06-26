module.exports = {
  "env": {
    "es2023": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "eslint-plugin-import-helpers", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"]
      }
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": ["module", "/^@/", ["parent", "sibling", "index"]],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForStatement",
        "message": "Avoid using for loops. Consider using Array methods or other alternatives."
      },
      {
        "selector": "ForInStatement",
        "message": "Avoid using for...in loops. Consider using Object methods or other alternatives."
      },
      {
        "selector": "ForOfStatement",
        "message": "Avoid using for...of loops. Consider using Array methods or other alternatives."
      },
      {
        "selector": "ForAwaitStatement",
        "message": "Avoid using for await...of loops. Consider using async/await with Array methods or other alternatives."
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}