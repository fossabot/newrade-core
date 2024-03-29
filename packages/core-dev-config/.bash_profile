# load brew
eval "$(/opt/homebrew/bin/brew shellenv)"

# silence zsh prompt on macos
export BASH_SILENCE_DEPRECATION_WARNING=1

# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# increate nodejs max ram
export NODE_OPTIONS=--max-old-space-size=8192

# load nvm bash_completion
export PATH=$PATH:~/.local/bin
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
