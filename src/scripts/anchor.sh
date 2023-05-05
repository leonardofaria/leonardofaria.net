#!/usr/bin/env bash
set -e 

cd content 

echo 'github.com'
ag 'github.com' -l0 | xargs -0 \
  gsed -i'' -E 's/\[([^]]*)\]\((https:\/\/[^)]*github\.com[^)]*)\)/<A href="\2">\1<\/A>/g' 

echo 'npmjs.com'
ag 'npmjs.com' -l0 | xargs -0 \
  gsed -i'' -E 's/\[([^]]*)\]\((https:\/\/[^)]*npmjs\.com[^)]*)\)/<A href="\2">\1<\/A>/g' 

echo 'twitter.com'
ag 'twitter.com' -l0 | xargs -0 \
  gsed -i'' -E 's/\[([^]]*)\]\((https:\/\/[^)]*twitter\.com[^)]*)\)/<A href="\2">\1<\/A>/g' 

echo 'eslint.org'
ag 'eslint.org' -l0 | xargs -0 \
  gsed -i'' -E 's/\[([^]]*)\]\((https:\/\/[^)]*eslint\.org[^)]*)\)/<A href="\2">\1<\/A>/g' 