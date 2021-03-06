# Angular Router

## Introduction

We already worked on [examples using the PokeAPI](https://github.com/rstropek/ts-angular-workshop/tree/master/rest-fundamentals/9040-pokelist) in this year, can you remember? This time we are going to use this public Web API again.

You have to create an Angular app that uses the Angular router.

## Requirements

* Create a new Angular application including the [Angular Router](https://rstropek.github.io/ts-angular-workshop/#/12/19).

* Display a list of all Pokemon names under the URL *http://yourserver/pokemons*. Every Pokemon name should be a hyperlink to a site with details about the Pokemon (see requirement regarding *Pokemon details* below).

* The user must be able to enter a part of a Pokemon name (e.g. *charm*) to filter the Pokemon list. If the user does not enter a filter string, display the entire list of Pokemons. ***Note** that it is not enough to just process the first 20 Pokemons from the PokeAPI, you have to process all Pokemons.

* If the user does not enter any path in the URL (i.e. just *http://yourserver/*), redirect the user to the list of Pokemons (i.e. *http://yourserver/pokemons*).

* Pokemon details must be reachable at *http://yourserver/pokemons/1* (where *1* is the ID of the Pokemon).

* Display the *name of the pokemon* and its *ability names* on the details page.

