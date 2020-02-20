---
title: How I Postgres
date: '2019-04-23T00:00:00.000Z'
draft: false
category: ''
tags:
  - ''
description: 'Postgres is awesome. This is how I run it'
---

At [Lambda School][lambdaschool], we love postgres. Here are a few gems I've learned that make
developing with it a joy:

## PSQL for Mac

The best way to handle this is to install
[Postgres.app] and then add the following to your
shell profile:

```shell
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```

Et voilà! Reload your terminal and `psql` will be ready to go, along with other
Postgres command line tools. To update to the latest version is as simple as
opening Postgres.app and letting it update.

## PSQL Profile

This file in `~/.psqlrc` will configure `psql` with a few key settings to make
it more useful:

```sql
\set QUIET 1 -- Disable logs while this script runs

-- Show if we are in a transaction or not,
-- and the current database if it's different from our username
\set PROMPT1 '%~%x%# '

-- Update the prompt when we're on a multi-line script
\set PROMPT2 '[more] %R > '

\set VERBOSITY verbose

\set HISTFILE ~/.psql_history- :DBNAME
\set HISTCONTROL ignoredups
\set COMP_KEYWORD_CASE upper


\x auto -- Set expanded output to auto

-- Stop transactions when there's an error
\set ON_ERROR_STOP on
-- Require the user to rollback when there's an error
\set ON_ERROR_ROLLBACK interactive

-- Make null characters print as this character
\pset null '¤'
\pset linestyle 'unicode'
-- Make tables look nicer
\pset unicode_border_linestyle single
\pset unicode_column_linestyle single
\pset unicode_header_linestyle double

-- Make intervals look clean
\set intervalstyle to 'postgres_verbose';

-- Settings to pass to `less` when paging through output
\setenv LESS '-iMFXSx4R'

-- Use visual studio code as my editor
\setenv EDITOR '/usr/local/bin/code -w'

-- Show how long each query takes
\timing on

-- Restore logs
\unset QUIET

```

## PG Services

A lesser-known feature of `psql` and other bundled Postgres command line tools
is the `~/.pg_service.conf` file, or [connection service file](https://www.postgresql.org/docs/9.0/libpq-pgservice.html).

```conf
# comment
[connection-name]
host=somewhere
user=foo
password=bar
```

You can create as many `[connection-name]` blocks as you like, and name them
according to what they configure. To use a specific service with psql is as easy
as `PGSERVICE=connection-name psql`. To make it easier, I add the following to
my `.zshrc` file:

```zsh
export PGSERVICE=local
```

The corresponding `[local]` section in the connection service file points to my
local machine. Pointing at production, staging, test, or other environments
is as easy as changing the variable on the command line.

## Running a Postgres database locally

You can use [Postgres.app] to setup and manage different versions of Postgres
on your mac. At [Lambda School][lambdaschool] we use Docker to set up local
dependencies (and I generally prefer using Docker to Postgres.app).


[lambdaschool]: https://lambdaschool.com/
[Postgres.app]: https://postgresapp.com/

