import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'
import love from 'eslint-config-love'
import astro from 'eslint-plugin-astro'
import svelte from 'eslint-plugin-svelte'
import { includeIgnoreFile } from '@eslint/compat'
import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default [
  includeIgnoreFile(gitignorePath),
  ...svelte.configs.recommended,
  ...svelte.configs.prettier,
  ...astro.configs.recommended,
  {
    ...love,
    files: ['src/**/*.js', 'src/**/*.ts'],
    rules: {
      ...love.rules,
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
]
