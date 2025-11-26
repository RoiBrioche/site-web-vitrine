# Workflows GitHub Actions

## CI (Continuous Integration)

Le workflow `ci.yml` s'exécute automatiquement sur :
- Toutes les pull requests vers `main` ou `master`
- Tous les pushes directs sur `main` ou `master`

### Vérifications effectuées

1. **Linting (ESLint)** : Vérifie que le code respecte les règles de style et les bonnes pratiques
2. **Type checking (TypeScript)** : Vérifie qu'il n'y a pas d'erreurs de types
3. **Build** : Vérifie que l'application se compile correctement

### Résultat

Si une vérification échoue, la pull request ne peut pas être mergée (protection de branche recommandée).

### Protection de branche (optionnel mais recommandé)

Pour activer la protection de branche sur GitHub :
1. Allez dans Settings → Branches
2. Ajoutez une règle pour `main` ou `master`
3. Cochez "Require status checks to pass before merging"
4. Sélectionnez "quality-check" dans la liste

