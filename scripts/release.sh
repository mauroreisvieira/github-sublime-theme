set -e
echo "Current version: "$(grep version package.json | sed -E 's/^.*"(4[^"]+)".*$/\1/')
echo "Enter release version: "
read VERSION

read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing v$VERSION ..."
  npm run lint

  npm run build
  # GENERATE THE VERSION SO THAT THE CHANGELOG CAN BE GENERATED TOO
  npm version --no-git-tag-version --no-commit-hooks --new-version $VERSION

  # CHANGELOG
  npm run changelog

  echo "Please check the git history and the CHANGELOG and press enter"
  read OKAY

  # COMMIT AND TAG
  git add CHANGELOG.md package.json
  git commit -m "chore(release): v$VERSION"
  git tag -a "v$VERSION" -m "v$VERSION"

  # PUBLISH
  git push origin refs/tags/v$VERSION
  git push
fi
