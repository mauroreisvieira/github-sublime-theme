cecho() {
    RED="\033[0;31m"
    GREEN="\033[0;32m"
    YELLOW="\033[1;33m"
    # ... ADD MORE COLORS
    NC="\033[0m" # No Color

    printf "${!1}${2} ${NC}\n"
}

set -e

echo "Current version: "$(grep version package.json | sed -E 's/^.*"(4[^"]+)".*$/\1/')
echo "Enter release version: "
read VERSION

read -p "Releasing 4070-$VERSION - are you sure? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo ""
  echo "Releasing 4070-$VERSION"
  echo "Run Scripts"

  npm run lint
  npm run build

  # GENERATE THE VERSION SO THAT THE CHANGELOG CAN BE GENERATED TOO
  npm version --no-git-tag-version --no-commit-hooks --new-version $VERSION

  # CHANGELOG
  npm run changelog

  cecho "YELLOW" "Please check git history and the CHANGELOG and press ENTER"
  read OKAY

  # COMMIT AND TAG
  git add CHANGELOG.md package.json
  git commit -m "chore(release): 4070-$VERSION"
  git tag -a "4070-$VERSION" -m "4070-$VERSION"

  # PUBLISH
  git push origin refs/tags/4070-$VERSION
  git push
fi
