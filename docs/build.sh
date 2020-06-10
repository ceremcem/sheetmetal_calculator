#!/bin/bash
set -eu -o pipefail
set_dir(){ _dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"; }; set_dir
safe_source () { source $1; set_dir; }

pug_file="$_dir/app/index.pug"
if [[ -f "$pug_file" ]]; then
    pug -w --pretty "$pug_file" -o ./ &
else
    echo "No $(basename $pug_file) found."
fi

while :; do
    browserify app/app.ls -o app.js -t browserify-livescript
    sleep 1s
done

wait 
