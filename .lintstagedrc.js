module.exports = {
  '**/*.+(ts|tsx|js|json), !src/shared/graphql/generated/*.+(ts|json),!src/**/*.generated.ts': 'prettier --write',
  '**/*.+(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.+(ts|tsx),!src/shared/graphql/generated/*.+(ts|json),!src/**/*.generated.ts':
    'eslint --fix --color --max-warnings=0',
}
