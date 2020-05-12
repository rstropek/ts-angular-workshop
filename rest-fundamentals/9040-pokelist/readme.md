# *Pokemon List* Exercise


## Introduction

In this exercise, you have to implement a website that uses a RESTful Web API in the background. You have to create the website from scratch without any initial templates to build on.

Your website has to display a list of *Pokemons* from the [*pokeapi*](https://pokeapi.co/). Add a *Details* button for each Pokemon that shows details about the figure. You find the detailed specification below.


## Specification

1. You have to use *TypeScript* as your programming language.

1. Pokemon list
   * Display the name of each Pokemon.
   * A *Details* button next to each Pokemon in the list should bring the user to the details page for the corresponding Pokemon.

1. On the Pokemon *Details* page, display the following fields about the figure:
   * Name
   * Image (`sprites.front_default`). Example:<br/>
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
   * Weight
   * List of all the Pokemon's abilities

1. The *Details* page should contain a button that takes the user back to the Pokemon list


## Hints

1. Look into the [course slides](https://rstropek.github.io/ts-angular-workshop/#/8/6) to see how you can call a RESTful Web API in the browser.

1. It is not absolutely necessary to use [jQuery](https://jquery.com/). You can also just use the browser's [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).


## Advanced Exercises

* Build the app not only using a [*Single-page App*](https://rstropek.github.io/ts-angular-workshop/#/8/27) but also as a website with [*Server-side Rendering*](https://rstropek.github.io/ts-angular-workshop/#/8/25)
  * Look into the [course slides](https://rstropek.github.io/ts-angular-workshop/#/8/29) to see how you can use *Express.js* with server-side rendering
  * A complete sample is available [on GitHub](https://github.com/rstropek/ts-angular-workshop/tree/master/rest-fundamentals/0060-express-server-side-html)
