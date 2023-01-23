---
id: 2203
title: Changing node versions automatically per directory
publishedAt: 2020-05-20T07:00:00-07:00
type: Post
ogImage: /images/og-images/2203.png
permalink: /2020/05/20/changing-node-versions-automatically-per-directory
categories:
  - javascript
tags:
  - javascript
---

Working in multiple Node projects sometimes means using different versions of Node. [nvm](https://github.com/nvm-sh/nvm) is one popular solution for Linux, macOS and Windows WSL that handles multiple Node installations. One of its most unknown tricks is the [deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration). Check the video:

<video className="h-auto" controls autoPlay="autoPlay">
  <source src="/wp-content/uploads/2020/05/nvm.mp4" type="video/mp4" />
</video>

If you are using macOS Catalina, you are probably using ZSH as default shell. To make the magic happen, paste the following in `~/.zshrc` file.

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

After restarting your terminal, nvm will automatically change the version of Node based in the current folder.
