#!/bin/bash
#
# Poor man's deploy script in lack of better infrastructure.
#

DIST=public
TOML_BASE=config.toml

# To color our `echo` output
_YELLOW='\033[1;33m'
_GREEN='\033[0;32m'
_NC='\033[0m' # No Color

# Substituions in generated files
NOW_SITEMAP=`date +"%Y-%m-%dT%H:%M:%S+02:00"`
NOW_HUMAN=`date +"%d.%m.%Y"`
GITHASH=`git rev-parse --short HEAD`

# https://stackoverflow.com/questions/5195607/checking-bash-exit-status-of-several-commands-efficiently
function exit_if_fail {
    "$@"
    local status=$?
    if [ $status -ne 0 ]; then
        echo "error with '$1'" >&2
        exit 1
    fi
    return $status
}

exit_if_fail zola -c $TOML_BASE check
exit_if_fail zola -c $TOML_BASE build

sed -i -e "s/_NOW_HUMAN_/$NOW_HUMAN/g" $DIST/index.html
sed -i -e "s/_GITHASH_/$GITHASH/g" $DIST/index.html
